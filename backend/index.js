import express from 'express';
import db from './config/Database.js';
import userRoutes from './routes/userRoute.js';

const app = express();
const port = 5000;

//midelware
app.use(express.json());

//userRoutes
app.use(userRoutes);

try {
  await db.authenticate();
  console.log('database connected');
  //await db.sync();
} catch (error) {
  console.log(error);
}

app.listen(port, () => {
  console.log('server is running');
});
