import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { AppDataSource } from "../../data-source";
import { CreateTodoInput } from "../types";
import { Todo } from "../models";

@Resolver()
export class TodoResolver {
  @Query(() => [Todo])
  async getAllTodoItems() {
    const todoRepo = AppDataSource.getRepository(Todo);
    return todoRepo.find();
  }

  @Mutation(() => Todo)
  async addTodo(@Arg("newTodo") newTodo: CreateTodoInput) {
    const todoRepo = AppDataSource.getRepository(Todo);
    return todoRepo.save(newTodo);
  }
}
