import { getMongoRepository, MongoRepository } from 'typeorm';
import { IPokemonRepository } from '../../../repository/IPokemongRepository';
import { Pokemon } from '../schemas/pokemon';
import { IPokemon } from '../../../dto';

export class PokemonRepository implements IPokemonRepository {
  public async create(pokamonData: IPokemon): Promise<Pokemon> {
    const repository = getMongoRepository(Pokemon);
    const pokemon = repository.create(pokamonData);

    await repository.save(pokemon);
    return pokemon;
  }
  public async findOneByIndex(index: number): Promise<Pokemon | undefined> {
    const repository = getMongoRepository(Pokemon);
    const pokemon = repository.findOne({
      where: { pokedex_index: index },
    });
    return pokemon;
  }
  public findOneByName(name: string): Promise<Pokemon | undefined> {
    const repository = getMongoRepository(Pokemon);
    const pokemon = repository.findOne({
      where: { name: name },
    });
    return pokemon;
  }

  public async findOneById(id: string): Promise<Pokemon | undefined> {
    const repository = getMongoRepository(Pokemon);
    const pokemon = repository.findOne(id);
    return pokemon;
  }
}
