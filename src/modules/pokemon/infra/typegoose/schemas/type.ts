import { prop } from '@typegoose/typegoose';

export class Type {
  @prop({ required: true })
  public type!: string;
}
