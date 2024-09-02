import { PrismaClient } from "@prisma/client";
import passport from "passport";
const prisma = new PrismaClient();
import { configDotenv } from "dotenv";

var GoogleStrategy = require("passport-google-oauth2").Strategy;
var GithubStrategy=require("passport-github2").Strategy
configDotenv()

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;



interface types {
  email: string;
  given_name: string;
  name: string;
}
passport.use(
  new GoogleStrategy(
    {
    //   clientID: client_id,
    clientID:client_id,
      clientSecret: client_secret,
      callbackURL: "http://localhost:3000/auth/google/callback",
      passReqToCallback: true,
    } ,

    
    

    async function (request: any, accessToken: any, refreshToken: any, profile: types, done: (arg0: { id: string; name: string; email: string; password: string | null; }) => any) {
      

      const { email, given_name }: types = profile;

      
      
      
      

      const upsertUser = await prisma.user.upsert({
        where: {
          email: email,
        },
        update: {
          name: given_name,
        },
        create: {
          email: email,
          name: given_name,
        },
      });

      return done(upsertUser);
    }
  ), 

  
);




module.exports = passport;
