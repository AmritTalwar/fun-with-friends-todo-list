import { InputType, Field } from "type-graphql";
import { Todo } from "../models";

@InputType()
export class CreateTodoInput implements Partial<Todo> {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  dueDate: string;
}
