import { PrismaClient } from "@prisma/client";
import passport from "passport";
const GithubStrategy = require('passport-github2').Strategy;

const prisma = new PrismaClient();

interface types {
    email: string;
    given_name: string;
    name: string;
}

const git_client_id = process.env.GIT_CLIENT_ID;
const git_client_secret = process.env.GIT_CLIENT_SECRET;

console.log(git_client_id);

passport.use(new GithubStrategy({
    clientID: git_client_id,
    clientSecret: git_client_secret,
    callbackURL: "http://localhost:3000/auth/github/callback",
  },
  async (accessToken:any,refreshToken: string, profile: any, done: any) => {

const name = profile.displayName || profile.username || "No Name";
const user=await prisma.user.upsert({
    where:{email:""},
    update:{name:name},create:{
        email:"",
        name:name
    }
})
console.log(profile);



    return done(null,profile)
  }
));

passport.serializeUser(function(user: any, done: any) {
    done(null, user.id);  // Serialize user by ID
});

passport.deserializeUser(async function(id: any, done: any) {
    try {
        const user = await prisma.user.findUnique({ where: { id: id } });
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

module.exports = passport;
