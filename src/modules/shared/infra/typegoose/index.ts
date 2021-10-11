import dotenv from 'dotenv';

dotenv.config();

import mongoose from 'mongoose';
import { AppError } from '../../Error/AppError';

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  socketTimeoutMS: 30000,
  keepAlive: true,
  autoIndex: false,
  retryWrites: false,
};

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_HOST = process.env.MONGO_HOST;
const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`;

mongoose
  .connect(url, options)
  .then((result) => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log(error);
    throw new AppError('Erro interno', 500);
  });
