import { getModelForClass } from '@typegoose/typegoose';
import { Type } from '../schemas/type';
import { IType } from '../../../dto';
import { ITypeRepository } from '../../../repository/ITypeRepository';

export class TypeRepository implements ITypeRepository {
  public async create(type: IType): Promise<Type> {
    const repository = getModelForClass(Type);
    const { _id: id } = await repository.create(type);
    const typeObject = await repository.findOne(type).exec();

    const newType = typeObject!.toObject();

    return newType;
  }
  public async findByType(type: string): Promise<Type | undefined> {
    const repository = getModelForClass(Type);
    const pokemonObject = await repository.findOne({ type }).exec();

    const pokemon = pokemonObject?.toObject();

    return pokemon;
  }
}
