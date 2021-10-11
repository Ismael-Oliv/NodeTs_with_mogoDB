import { Request, Response } from 'express';
import { TypeRepository } from '../../typegoose/repository/typeRepository';
import { CreateTypeService } from '../../../services/CreateTypeService';
import { YupValidationProvider } from '../../providers/Yup/implementations/YupValidationProvider';

const typeRepository = new TypeRepository();
const yupValidationProvider = new YupValidationProvider();
const createTypeService = new CreateTypeService(
  typeRepository,
  yupValidationProvider
);

export class CreateTypeController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { type } = request.body;

    const newType = await createTypeService.execute({ type });

    return response.json(newType);
  }
}
