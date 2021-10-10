import { Type } from '../infra/typeorm/schemas/type';
import { IType } from '../dto';

export interface ITypeRepository {
  create(type: IType): Promise<Type>;
  findByDescription(description: string): Promise<Type | undefined>;
}
