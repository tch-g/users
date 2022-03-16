import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';


  
const routes: Routes = [
  {
      
    path: '',
    redirectTo: 'list',
    
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: ':usersId/users',
    component: UsersComponent
  },
  {
    path: ':usersId/posts',
    component: PostsComponent
  },
  
 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetRoutingModule { }