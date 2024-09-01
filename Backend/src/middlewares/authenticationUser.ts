import jwt from "jsonwebtoken";
import { NextFunction, Response } from "express";
export const createToken = async (payload: any) => {
  const token = await jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "2d",
  });
  return token;
};


export const jwtAuth = (req: any, res: Response, next: NextFunction) => {
  const token: any = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET as string, (err: any, decodedToken: any) => {
    if (err) {
      return res.json({ error: err.message });
    }
    req.user = decodedToken;
    next();
  });
};