import { InputType, Field } from '@nestjs/graphql';
import { Todo } from '../entities';

@InputType()
export class CreateTodoInput implements Partial<Todo> {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  dueDate?: string;
}
