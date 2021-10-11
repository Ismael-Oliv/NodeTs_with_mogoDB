import { Pokemon } from '../infra/typegoose/schemas/pokemon';
import { IPokemon } from '../dto';

export interface IPokemonRepository {
  create(pokemon: IPokemon): Promise<Pokemon>;
  findOneById(id: string): Promise<Pokemon | undefined>;
  findOneByIndex(index: number): Promise<Pokemon | undefined>;
  findOneByName(name: string): Promise<Pokemon | undefined>;
}
