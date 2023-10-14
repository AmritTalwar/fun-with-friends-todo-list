import { ObjectType, Field, ID } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
@ObjectType()
export class Todo {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  dueDate?: string;
}
