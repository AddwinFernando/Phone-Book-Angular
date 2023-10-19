import { Injectable } from '@angular/core';

export type Todo = {
  id: number;
  todo: string;
  phone:string;
  email:string
};

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}

  getItem(): string[] {
    return ['Item1', 'Item2'];
  }

  todos: Todo[] = [];
  count = 0;
  editState = 0;

  getTodo(): Todo[] {
    return this.todos;
  }
  setTodo(todo: Todo[]): void {
    this.todos = todo
  }
}
