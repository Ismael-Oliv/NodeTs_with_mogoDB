import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Pokemon } from './pokemon';
import { Type } from './type';

@Entity('pokemon_types')
export class Pokemon_types {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  pokemon_id: ObjectID;

  @OneToOne(() => Pokemon, { lazy: true })
  @JoinColumn()
  pokemon: Pokemon;

  @Column()
  type_id: ObjectID;

  @OneToOne(() => Type, { lazy: true })
  @JoinColumn()
  type: Type;
}
