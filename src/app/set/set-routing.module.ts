import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';


  
const routes: Routes = [
  {
      
    path: '',
    redirectTo: 'list',
    pathMatch: "full"
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  
 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetRoutingModule { }