import express from 'express';
import db from './config/Database.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import userRoutes from './routes/userRoute.js';
import categoryRoutes from './routes/categoryRoute.js';
import videoRoutes from './routes/videoRoutes.js';
import newsRouters from './routes/newsRoute.js';

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

//videoRoute
app.use(videoRoutes);

//newsRoutes
app.use(newsRouters);

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
