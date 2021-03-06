import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './routes';
import './database';
import upload from './config/upload';
import AppError from './errors/AppErrors';

const app = express();
app.use(cors());

app.use(express.json());
app.use('/file', express.static(upload.directory));
app.use(router);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.status).json({
      status: 'error',
      message: err.message,
    });
  }
  console.error(err);
  return response.status(500).json({
    status: 'error',

    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('vai que vai');
});
