import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import{TestService} from './service/test.service';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { AboutProjectComponent } from './components/about-project/about-project.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    TodoComponent,
    AboutProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
