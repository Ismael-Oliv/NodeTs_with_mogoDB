import { IPokemon, IType } from '../../../../dto';

export interface IValidationProvider {
  validatePokemonData(data: IPokemon): Promise<void>;
  validateTypeData(data: IType): Promise<void>;
}
