import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Todo } from '../entities';
import { TodoService } from '../services';
import { CreateTodoInput } from '../dto';

@Resolver((of) => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query((returns) => [Todo])
  async getAllTodos(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Mutation((returns) => Todo)
  async addTodo(@Args('newTodo') newTodo: CreateTodoInput) {
    return this.todoService.createTodo(newTodo);
  }
}
