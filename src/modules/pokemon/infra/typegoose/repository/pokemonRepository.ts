import { getModelForClass } from '@typegoose/typegoose';
import { Pokemon } from '../schemas/pokemon';
import { IPokemon } from '../../../dto';
import { IPokemonRepository } from '../../../repository/IPokemongRepository';

export class PokemonRepository implements IPokemonRepository {
  public async create(pokamonData: IPokemon): Promise<Pokemon> {
    const repository = getModelForClass(Pokemon);
    const { _id: id } = await repository.create(pokamonData);
    const pokemonObject = await repository.findById(id).exec();

    const pokemon = pokemonObject!.toObject();

    return pokemon;
  }
  public async findOneByIndex(index: number): Promise<Pokemon | undefined> {
    const repository = getModelForClass(Pokemon);
    const pokemonObject = await repository
      .findOne({ pokedex_index: index })
      .exec();

    const pokemon = pokemonObject?.toObject();

    return pokemon;
  }
  public async findOneByName(name: string): Promise<Pokemon | undefined> {
    const repository = getModelForClass(Pokemon);
    const pokemonObject = await repository.findOne({ name }).exec();

    const pokemon = pokemonObject?.toObject();

    return pokemon;
  }

  public async findOneById(id: string): Promise<Pokemon | undefined> {
    const repository = getModelForClass(Pokemon);

    const pokemonObject = await repository.findById(id).exec();
    const pokemon = pokemonObject?.toObject();

    return pokemon;
  }
}
