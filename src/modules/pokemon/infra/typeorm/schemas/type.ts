import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('type')
export class Type {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  type: string;
}
