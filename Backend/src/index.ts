import "dotenv/config"
import express from "express";
import session from "express-session";
const app = express();
import passport from "passport";
import { oauthRouter, userRouter } from "./routes/userRoute";
app.use(
  session({
    secret: process.env.SESSION_SECRET
      ? process.env.SESSION_SECRET
      : "SESSIONSECRET",
   resave:false,
   saveUninitialized:false
  })
);


app.use(passport.initialize());
console.log("initialzised");

app.use(passport.session());
app.use(express.json());





app.use("/",userRouter)







const PORT = process.env.PORT ? process.env.PORT : 3000;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
