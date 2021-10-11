import { Request, Response } from 'express';
import { PokemonRepository } from '../../typegoose/repository/pokemonRepository';
import { ListOnePokemonService } from '../../../services/ListOnePokemonService';

const pokemonRepository = new PokemonRepository();

const listOnePokemonService = new ListOnePokemonService(pokemonRepository);

export class ListOnePokemonController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    let { id } = request.query;

    const newType = await listOnePokemonService.execute(id as string);

    return response.json(newType);
  }
}
