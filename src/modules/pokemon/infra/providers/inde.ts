import { container } from 'tsyringe';

import { IValidationProvider } from './Yup/models/IValidationProvider';
import { YupValidationProvider } from './Yup/implementations/YupValidationProvider';

container.registerSingleton<IValidationProvider>(
  'YupValidationProvider',
  YupValidationProvider
);
