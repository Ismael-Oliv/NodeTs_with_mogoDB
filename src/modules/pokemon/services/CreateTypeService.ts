import { ITypeRepository } from '../repository/ITypeRepository';
import { Type } from '../infra/typeorm/schemas/type';
import { IType } from '../dto';
import { AppError } from '../../shared/Error/AppError';
import { IValidationProvider } from '../infra/providers/Yup/models/IValidationProvider';

export class CreateTypeService {
  constructor(
    private typeRepository: ITypeRepository,
    private validationProvider: IValidationProvider
  ) {}
  public async execute(data: IType): Promise<Type> {
    const ExistentType = await this.typeRepository.findByDescription(data.type);

    if (ExistentType) {
      throw new AppError('Type already exist');
    }

    await this.validationProvider.validateTypeData(data);

    const newType = await this.typeRepository.create(data);

    return newType;
  }
}
