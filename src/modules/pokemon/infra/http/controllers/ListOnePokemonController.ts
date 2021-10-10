import { Request, Response } from 'express';
import { PokemonRepository } from '../../typeorm/repository/pokemonRepository';
import { ListOnePokemonService } from '../../../services/ListOnePokemonService';

const pokemonRepository = new PokemonRepository();

const listOnePokemonService = new ListOnePokemonService(pokemonRepository);

export class ListOnePokemonController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const newType = await listOnePokemonService.execute(id);

    return response.json(newType);
  }
}
