import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Prisma, Express, and PSQL Tutorial");
});

// Create a blog
app.post("/post", async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Please input Title and Content" });
    }

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

// Get all blogs
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
