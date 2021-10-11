import { Request, Response } from 'express';
import { CreatePokemonService } from '../../../services/CreatePokemonService';
// import { PokemonRepository } from '../../typeorm/repository/pokemonRepository';
import { PokemonRepository } from '../../typegoose/repository/pokemonRepository';
import { YupValidationProvider } from '../../providers/Yup/implementations/YupValidationProvider';

const pokemonRepository = new PokemonRepository();
const yupValidationProvider = new YupValidationProvider();
const createPokemonService = new CreatePokemonService(
  pokemonRepository,
  yupValidationProvider
);

export class CreatePokemonController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const data = request.body;

    const pokemon = await createPokemonService.execute(data);

    return response.json(pokemon);
  }
}
