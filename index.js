import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());

const port = 8080;

app.get('/login', (req, res) => {
  const {name} = req.query;

  if (name) {
    res.cookie('name', name);
    res.send(`Name cookie set successfully! It's delicious`);
  } else {
    res.send('I need your name to bake the cookie!.');
  }
});

app.get('/hello', (req, res) => {
  const name = req.cookies.name;

  if (name) {
    res.send(`Welcome ${name}!`);
  } else {
    res.send(`Don't be rude, log in first.`);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
