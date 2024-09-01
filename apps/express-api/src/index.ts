import express from 'express';
import passport from 'passport';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(passport.initialize());

app.get('/', (req, res) => {
  res.send('Hello from the Build Your Own X backend!');
});

app.get("/multiply", (req, res) => {
  const num1 = parseInt(req.query.a as string);
  const num2 = parseInt(req.query.b as string);
  const result = num1 * num2;
  res.send(`The result of multiplying ${num1} and ${num2} is ${result}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});