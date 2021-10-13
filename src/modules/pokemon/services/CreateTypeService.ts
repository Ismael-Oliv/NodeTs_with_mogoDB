import { inject, injectable } from 'tsyringe';
import { ITypeRepository } from '../repository/ITypeRepository';
import { Type } from '../infra/typegoose/schemas/type';
import { IType } from '../dto';
import { AppError } from '../../shared/Error/AppError';
import { IValidationProvider } from '../infra/providers/Yup/models/IValidationProvider';

@injectable()
export class CreateTypeService {
  constructor(
    @inject('TypeRepository')
    private typeRepository: ITypeRepository,
    @inject('ValidationProvider')
    private validationProvider: IValidationProvider
  ) {}
  public async execute(data: IType): Promise<Type> {
    const ExistentType = await this.typeRepository.findByType(data.type);

    if (ExistentType) {
      throw new AppError('Type already exist');
    }

    await this.validationProvider.validateTypeData(data);

    const newType = await this.typeRepository.create(data);

    return newType;
  }
}
