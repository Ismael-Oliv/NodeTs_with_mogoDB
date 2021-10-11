import { prop } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

export class Type {
  @prop({ required: true })
  public pokemon_id!: mongoose.Types.ObjectId;

  @prop({ required: true })
  public type_id!: mongoose.Types.ObjectId;
}
