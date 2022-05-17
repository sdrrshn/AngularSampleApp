import { Coment } from './../models/coment';
import { Post } from '../models/post';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getPostbyId(postId: number) {
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
  getPostCommand(postId: number) {
    return this.http.get<Coment[]>(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
  }
}
