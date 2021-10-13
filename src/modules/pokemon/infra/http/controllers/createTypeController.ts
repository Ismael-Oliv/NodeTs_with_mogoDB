import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTypeService } from '../../../services/CreateTypeService';

export class CreateTypeController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { type } = request.body;

    const createTypeService = container.resolve(CreateTypeService);

    const newType = await createTypeService.execute({ type });

    return response.json(newType);
  }
}
