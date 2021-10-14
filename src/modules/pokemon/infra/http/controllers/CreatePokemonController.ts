import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePokemonService } from '../../../services/CreatePokemonService';

export class CreatePokemonController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const data = request.body;

    const createPokemonService = container.resolve(CreatePokemonService);

    const pokemon = await createPokemonService.execute(data);

    return response.json(pokemon);
  }
}
