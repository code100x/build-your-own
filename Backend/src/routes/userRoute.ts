import express from "express";
import { login, signup } from "../controllers/userController";
import { googleLogin, googleCallback } from "../controllers/oauthController";
import passport from "passport";
export const userRouter = express.Router();
export const oauthRouter=express.Router()
userRouter.post("/signup", signup);
userRouter.post("/login", login);

oauthRouter.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
   
  );
  
  oauthRouter.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/auth/google/success",
      failureRedirect: "/auth/google/failure",
    })
  );