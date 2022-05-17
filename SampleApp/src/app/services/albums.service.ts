import { Album } from './../models/album';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private http: HttpClient) {}
  getAlbums() {
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }
  getByUserIdAlbum(userId: number) {
    return this.http.get<Album>(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
  }
  getAlbumbyId(id: number) {
    return this.http.get<Album>(
      `https://jsonplaceholder.typicode.com/albums/${id}`
    );
  }
}
