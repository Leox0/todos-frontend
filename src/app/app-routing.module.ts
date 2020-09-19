import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from './component/header/header.component';
import {HomeComponent} from './component/home/home.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {TodoListComponent} from './component/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todos',
    component: TodoListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
