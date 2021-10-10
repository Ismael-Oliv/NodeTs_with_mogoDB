import * as yup from 'yup';
import { AppError } from '../../../../../shared/Error/AppError';
import { IValidationProvider } from '../models/IValidationProvider';
import { IPokemon, IType } from '../../../../dto';

export class YupValidationProvider implements IValidationProvider {
  public async validatePokemonData(data: IPokemon): Promise<void> {
    try {
      const schema = yup
        .object({
          pokedex_index: yup
            .number()
            .integer('Pokedex_index should be integer')
            .required('Pokedex_index is required'),
          name: yup.string().required('Name is required'),
          hp: yup
            .number()
            .integer('HP should be integer')
            .moreThan(1, 'HP should be more than 1')
            .lessThan(255, 'HP should be less than 255')
            .required('HP is required'),
          attack: yup
            .number()
            .integer('Attack should be integer')
            .moreThan(5, 'Attack should be more than 5')
            .lessThan(190, 'Attack should be less than 190')
            .required('Attack is required'),
          defense: yup
            .number()
            .integer('Defense should be integer')
            .moreThan(5, 'Defense should be more than 5')
            .lessThan(230, 'Defense should be less than 230')
            .required('Defense is required'),
          special_attack: yup
            .number()
            .integer('Special_attack should be integer')
            .moreThan(10, 'Special_attack should be more than 10')
            .lessThan(194, 'Special_attack should be less than 194')
            .required('Special_attack is required'),
          special_defense: yup
            .number()
            .integer('Special_defense should be integer')
            .moreThan(20, 'Special_defense should be more than 20')
            .lessThan(230, 'Special_defense should be less than 230')
            .required('Special_defense is required'),
          speed: yup
            .number()
            .integer('Speed should be integer')
            .moreThan(5, 'Speed should be more than 5')
            .lessThan(180, 'Speed should be less than 180')
            .required('Speed is required'),
          generation: yup
            .number()
            .integer('Generation should be integer')
            .moreThan(1, 'Generation should be more than 1')
            .lessThan(6, 'Generation should be less than 6')
            .required('Generation is required'),
          image: yup.string().required('Image is required'),
        })
        .noUnknown(true)
        .strict();

      await schema.validate(data, { abortEarly: true });
    } catch (err: any) {
      if (err instanceof yup.ValidationError) {
        throw new AppError(err.message);
      }
    }
  }

  public async validateTypeData(data: IType): Promise<void> {
    try {
      const schema = yup
        .object({
          type: yup.string().required('type is required'),
        })
        .noUnknown(true)
        .strict();

      await schema.validate(data, { abortEarly: true });
    } catch (err: any) {
      if (err instanceof yup.ValidationError) {
        throw new AppError(err.message);
      }
    }
  }
}
