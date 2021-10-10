import { createConnection } from 'typeorm';
import { AppError } from '../../Error/AppError';

createConnection()
  .then(() => {
    console.log('Database conection stablished');
  })
  .catch(() => new AppError('Unable to connect to the database'));
