import express from "express";
import { login, signup } from "../controllers/userController";
import { googleLogin, googleCallback } from "../controllers/oauthController";
const passport =require("../oauthstrategy/passport")
const gitPassport=require("../oauthstrategy/github")
export const userRouter = express.Router();
export const oauthRouter=express.Router()
userRouter.get("/",(req,res)=>{
  res.send("hello")
})
userRouter.post("/signup", signup);
userRouter.post("/login", login);

userRouter.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
   
  );
  
  userRouter.get(
    "/auth/google/callback",
    passport.authenticate("google", {
     
      failureRedirect: "/auth/google/failure",
    }),(req,res)=>{
      res.redirect("/")
    }
  );


  userRouter.get('/auth/github',gitPassport.authenticate("github",{

    scope: [ 'user:email' ]  }))
  userRouter.get(
    "/auth/github/callback",
    gitPassport.authenticate("github", {
     
      failureRedirect: "/auth/github/failure",
    }),(req,res)=>{
      res.redirect("/")
    }
  );


