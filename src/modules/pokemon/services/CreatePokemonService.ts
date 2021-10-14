import { inject, injectable } from 'tsyringe';
import { IPokemonRepository } from '../repository/IPokemongRepository';
import { IPokemon } from '../dto';
import { AppError } from '../../shared/Error/AppError';
import { IValidationProvider } from '../infra/providers/Yup/models/IValidationProvider';

@injectable()
export class CreatePokemonService {
  constructor(
    @inject('PokemonRepository')
    private pokemonRepository: IPokemonRepository,
    @inject('ValidationProvider')
    private validationProvider: IValidationProvider
  ) {}
  public async execute(pokemonData: IPokemon) {
    const foundPokemonByIndex = await this.pokemonRepository.findOneByIndex(
      pokemonData.pokedex_index
    );

    if (foundPokemonByIndex) {
      throw new AppError('Pokemon already exist');
    }

    const foundPokemonByName = await this.pokemonRepository.findOneByName(
      pokemonData.name
    );

    if (foundPokemonByName) {
      throw new AppError('There is a pokemon already with the given name');
    }

    await this.validationProvider.validatePokemonData(pokemonData);

    const pokemon = await this.pokemonRepository.create(pokemonData);

    return pokemon;
  }
}
