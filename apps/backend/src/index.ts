import express from "express";
const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`first app listening on port ${PORT}!`));
