import 'dotenv/config';

import { prisma } from "@repo/db";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import session from "express-session";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import ErrorHandler from "./middlewares/ErrorHandler";
import limiter from "./middlewares/Limiter";
import Logger from "./middlewares/Logger";
import { userRouter } from "./routes/userRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(ErrorHandler);
app.use(Logger);
app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(limiter);
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.use("/", userRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

const users = [{ id: 1, username: "user", password: "password" }];

passport.use(
  new LocalStrategy((username: string, password: string, done: any) => {
    const user = users.find((u) => u.username === username);
    if (!user) {
      return done(null, false, { message: "Incorrect username." });
    }
    if (user.password !== password) {
      return done(null, false, { message: "Incorrect password." });
    }
    return done(null, user);
  })
);

passport.serializeUser((user: any, done: any) => {
  done(null, user.id);
});
passport.deserializeUser((id: any, done: any) => {
  const user = users.find((u) => u.id === id);
  done(null, user);
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.get("/profile", (req: any, res: any) => {
  if (req.isAuthenticated()) {
    res.send("Welcome to your profile");
  } else {
    res.redirect("/login");
  }
});
app.get("/login", (req, res) => {
  res.send("Login page");
});

app.post("/post", async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Please input Title and Content" });
    }

    function ensureAuthenticated(req: any, res: any, next: any) {
      if (req.isAuthenticated()) {
        return next();
      }
      res.redirect("/login");
    }
    app.get("/protected", ensureAuthenticated, (req, res) => {
      res.send("This is a protected route");
    });

    const blog = await prisma.post.create({
      data: { title, content },
    });

    return res
      .status(201)
      .json({ message: "Blog created successfully", data: blog });
  } catch (error) {
    return res.status(500).json({ message: "Error creating blog" });
  }
});

app.get("/posts", async (req: Request, res: Response) => {
  try {
    const blogs = await prisma.post.findMany();
    return res.status(201).json({ data: blogs.length, blogs });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching blogs" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
