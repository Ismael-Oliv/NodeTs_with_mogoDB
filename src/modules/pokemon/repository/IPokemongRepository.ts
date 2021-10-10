import { Pokemon } from '../infra/typeorm/schemas/pokemon';
import { IPokemon } from '../dto';

export interface IPokemonRepository {
  create(pokemon: IPokemon): Promise<Pokemon>;
  findOneByIndex(index: number): Promise<Pokemon | undefined>;
  findOneByName(name: string): Promise<Pokemon | undefined>;
}
