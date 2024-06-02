import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';
import {
  errorHandlerMiddleware,
  handleUncaughtError,
} from './middlewares/errorHandlerMiddleware.js';

// Handle uncaught exceptions
handleUncaughtError();

// Handle environmental variables
const configPath = path.resolve('config', 'uat.env');
dotenv.config({ path: configPath });

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
import questionRoutes from './routes/question.routes.js';
app.use('/questions', questionRoutes);

// errorHandlerMiddleware
app.use(errorHandlerMiddleware);

export default app;
