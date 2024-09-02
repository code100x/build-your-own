import express from "express";
import { login, signup } from "../controllers/userController";
import { googleLogin, googleCallback } from "../controllers/oauthController";
const passport =require("../oauthstrategy/passport")
export const userRouter = express.Router();
export const oauthRouter=express.Router()
userRouter.post("/signup", signup);
userRouter.post("/login", login);

userRouter.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
   
  );
  
  userRouter.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/auth/google/success",
      failureRedirect: "/auth/google/failure",
    })
  );


