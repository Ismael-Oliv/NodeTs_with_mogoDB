import { prop } from '@typegoose/typegoose';

export class Pokemon {
  @prop({ required: true })
  public pokedex_index!: number;

  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public hp!: number;

  @prop({ required: true })
  public attack!: number;

  @prop({ required: true })
  public defense!: number;

  @prop({ required: true })
  public speed!: number;

  @prop({ required: true })
  public special_attack!: number;

  @prop({ required: true })
  public special_defense!: number;

  @prop({ required: true })
  public generation!: number;

  @prop({ required: true })
  public image!: string;
}
