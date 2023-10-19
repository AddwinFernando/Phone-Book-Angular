import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestService } from 'src/app/service/test.service';
import { Todo } from 'src/app/service/test.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  buttonTxt: string = 'Enter';
  inputTodo: string = '';
  inputphone: string = '';
  inputemail: string = '';
  todos: Todo[] = [];
  count = 0;
  editState = 0;
  constructor(private testService: TestService) {
    this.todos = testService.getTodo();
  }

  add(form: NgForm): void {
    if (this.editState === 0) {
      this.count += 1;
      this.todos.push({
        id: this.count,
        todo: this.inputTodo,
        phone: this.inputphone,
        email: this.inputemail,
      });
      this.testService.setTodo(this.todos);
      this.inputTodo = '';
      this.inputemail = '';
      this.inputphone = '';
    } else {
      this.todos = this.todos.map((item) => {
        if (this.editState === item.id) {
          console.log('in');
          return {
            ...item,
            todo: this.inputTodo,
            phone: this.inputphone,
            email: this.inputemail,
          };
        } else {
          return item;
        }
      });
      this.editState = 0;
      this.buttonTxt = 'Enter';
      this.inputTodo = '';
      this.inputemail = '';
      this.inputphone = '';
      console.log(this.todos);
      this.testService.setTodo(this.todos);
    }
    form.resetForm();
  }

  del(id: number): void {
    this.todos = this.todos.filter((item) => item.id !== id);
    this.testService.setTodo(this.todos);
  }
  edit(id: number): void {
    this.buttonTxt = 'Edit';
    this.editState = id;
    let edititem = this.todos.find((item) => item.id === id);
    this.inputTodo = edititem?.todo!;
    this.inputemail = edititem?.email!;
    this.inputphone = edititem?.phone!;
  }
}
