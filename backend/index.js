import express from 'express';
import db from './config/Database.js';

const app = express();
const port = 5000;

try {
  await db.authenticate();
  console.log('database connected');
} catch (error) {
  console.log(error);
}

app.listen(port, () => {
  console.log('server is running');
});
