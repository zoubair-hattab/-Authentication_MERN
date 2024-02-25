import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('Connect To MongoDB');
  })
  .catch((err) => {
    console.log(`There is an error ${err?.message}`);
  });
const app = express();
app.listen(3000, () => {
  console.log('server is runing on port 3000');
});
app.use(express.json());
app.use('api/v2/user', userRoutes);
app.use('api/v2/auth', authRoutes);
