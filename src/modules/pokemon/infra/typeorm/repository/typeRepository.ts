import { getMongoRepository, MongoRepository } from 'typeorm';
import { ITypeRepository } from '../../../repository/ITypeRepository';
import { Type } from '../schemas/type';
import { IType } from '../../../dto';

export class TypeRepository implements ITypeRepository {
  public async create({ type }: IType): Promise<Type> {
    const repository = getMongoRepository(Type);

    const pokemonType = repository.create({ type });

    await repository.save(pokemonType);
    return pokemonType;
  }

  public async findByDescription(type: string): Promise<Type | undefined> {
    const repository = getMongoRepository(Type);
    const ExistentType = repository.findOne({
      where: {
        type,
      },
    });

    return ExistentType;
  }
}
