import { AlbumsComponent } from './pages/albums/albums.component';
import { PhotoComponent } from './pages/photo/photo.component';
import { Photo } from './models/photo';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'post-detail/:id',
    component: PostDetailComponent,
  },
  {
    path: 'photo',
    component: PhotoComponent,
  },
  {
    path: 'album',
    component: AlbumsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
