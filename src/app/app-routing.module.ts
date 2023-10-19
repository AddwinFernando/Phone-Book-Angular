import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { AboutProjectComponent } from './components/about-project/about-project.component';

 const routes: Routes = [
    {path:"",component:AboutProjectComponent},
    {path:"home",component:TodoComponent},
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
