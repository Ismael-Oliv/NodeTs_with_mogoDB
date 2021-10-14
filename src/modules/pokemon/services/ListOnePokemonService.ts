import { inject, injectable } from 'tsyringe';
import { IPokemonRepository } from '../repository/IPokemongRepository';
import { AppError } from '../../shared/Error/AppError';

@injectable()
export class ListOnePokemonService {
  constructor(
    @inject('PokemonRepository')
    private pokemonRepository: IPokemonRepository
  ) {}

  public async execute(id: string) {
    const foundPokemonById = await this.pokemonRepository.findOneById(id);

    if (!foundPokemonById) {
      throw new AppError('Pokemon does not exist');
    }

    return foundPokemonById;
  }
}
