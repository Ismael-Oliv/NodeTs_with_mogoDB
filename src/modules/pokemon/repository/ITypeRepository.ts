import { Type } from '../infra/typegoose/schemas/type';
import { IType } from '../dto';

export interface ITypeRepository {
  create(type: IType): Promise<Type>;
  findByType(type: string): Promise<Type | undefined>;
}
