import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetRoutingModule } from './set-routing.module';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './list/list.component';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  declarations: [
    UsersComponent,
    ListComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SetRoutingModule
  ]
})
export class SetModule { }
