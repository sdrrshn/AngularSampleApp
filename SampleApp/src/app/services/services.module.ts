import { UsersService } from './users.service';
import { TodosService } from './todos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [PostsService, TodosService, UsersService],
})
export class ServicesModule {}
