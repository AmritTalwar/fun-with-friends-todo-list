import { Resolver, Query } from "type-graphql";
import { Todo } from "../models/todo.entity";
import { AppDataSource } from "../../data-source";

@Resolver()
export class TodoResolver {
  @Query(() => [Todo])
  async getAllTodoItems() {
    const todoRepo = AppDataSource.getRepository(Todo);
    return todoRepo.find();
  }
}
