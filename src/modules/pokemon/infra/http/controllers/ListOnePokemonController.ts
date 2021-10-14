import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListOnePokemonService } from '../../../services/ListOnePokemonService';

export class ListOnePokemonController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    let { id } = request.query;

    const listOnePokemonService = container.resolve(ListOnePokemonService);

    const newType = await listOnePokemonService.execute(id as string);

    return response.json(newType);
  }
}
