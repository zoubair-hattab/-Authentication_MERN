import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
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
