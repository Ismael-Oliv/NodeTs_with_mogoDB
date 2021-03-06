import 'reflect-metadata';
import 'reflect';

import express from 'express';
import '../typegoose';
import 'express-async-errors';

import { HandlingError } from './middleware/handlingErros';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(HandlingError);

app.listen(3001, () => console.log('Server is running on port 3001'));
