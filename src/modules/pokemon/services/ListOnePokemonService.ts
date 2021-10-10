import { IPokemonRepository } from '../repository/IPokemongRepository';
import { AppError } from '../../shared/Error/AppError';

export class ListOnePokemonService {
  constructor(private pokemonRepository: IPokemonRepository) {}

  public async execute(id: string) {
    const foundPokemonById = await this.pokemonRepository.findOneById(id);

    if (!foundPokemonById) {
      throw new AppError('Pokemon does not exist');
    }

    return foundPokemonById;
  }
}
