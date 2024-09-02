import express from "express"
const passport=require("../oauthStrategy/google-oauth")
const gitPassport=require("../oauthStrategy/github-oauth")
export const userRouter=express.Router()

userRouter.get("/success",(req,res)=>{
    res.send("jelllpo")
})
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
res.redirect('/')    }
  );

  userRouter.get("/auth/github/failure", (req, res) => {
    res.send("GitHub authentication failed");
  });


