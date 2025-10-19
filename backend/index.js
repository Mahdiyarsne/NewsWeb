import express from 'express';
import db from './config/Database.js';
import userRoutes from './routes/userRoute.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import categoryRoutes from './routes/categoryRoute.js';

const app = express();
const port = 5000;

dotenv.config();

//midelware
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(fileUpload());
//userRoutes
app.use(userRoutes);

//categoryRoutes
app.use(categoryRoutes);

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
