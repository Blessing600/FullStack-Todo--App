import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './src/routes/toDoRoute.ts';
import * as env from 'dotenv';
env.config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());
app.use(router);

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log(`Connected To mongoDb.....`))
  .catch((err: any) => console.log(err));

app.listen(PORT, () => console.log(`listening on: ${PORT}`));
