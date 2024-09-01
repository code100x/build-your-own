import express from 'express';
import passport from 'passport';

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(passport.initialize); // Remove parentheses


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
