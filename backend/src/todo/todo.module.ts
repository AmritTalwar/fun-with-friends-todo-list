import { Module } from '@nestjs/common';
import { TodoService } from './services/todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities';
import { TodoResolver } from './resolvers/todo.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
