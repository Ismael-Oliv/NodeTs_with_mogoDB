import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('pokemon')
export class Pokemon {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({ unique: true })
  pokedex_index: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: 255 })
  hp: number;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  speed: number;

  @Column()
  special_attack: number;

  @Column()
  special_defense: number;

  @Column()
  generation: number;

  @Column()
  image: string;
}
