import { PhotoComponent } from './pages/photo/photo.component';
import { ComponentsModule } from './components/ComponentsModule';
import { ServicesModule } from './services/services.module';
import { PostsComponent } from './pages/posts/posts.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsModule } from './components/bs.module';
import { HomeComponent } from './pages/home/home.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// ngx-dropdown module import ettik.

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    PostsComponent,
    PostDetailComponent,
    PhotoComponent,
    AlbumsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsModule,
    ServicesModule,
    ComponentsModule,
    NgbModule,
    // Pages sayfaları için bootrap kullanırız
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
