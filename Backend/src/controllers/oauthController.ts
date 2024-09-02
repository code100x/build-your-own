import passport from "passport"
export const googleLogin = passport.authenticate("google", {
    scope: ["email", "profile"],
  });


  export const googleCallback = passport.authenticate("google", {
    successRedirect: "/auth/google/success",
    failureRedirect: "/auth/google/failure",
  });


