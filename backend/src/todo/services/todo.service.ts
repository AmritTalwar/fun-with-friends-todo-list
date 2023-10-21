import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../entities';
import { Repository } from 'typeorm';
import { CreateTodoInput } from '../dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepo: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepo.find();
  }

  async createTodo(newTodoData: CreateTodoInput): Promise<Todo> {
    return this.todoRepo.save(newTodoData);
  }
}
