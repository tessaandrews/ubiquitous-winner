const express = require('express');
const db = require('./config/connection');
const routes = require('./routes/api');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

const activity = cwd.includes('challenge-18')
  ? cwd.split('challenge-18')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});