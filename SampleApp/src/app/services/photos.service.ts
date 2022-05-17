import { Photo } from './../models/photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}
  getPhoto() {
    return this.http.get<Photo[]>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }
  getIdByPhoto(id: number) {
    return this.http.get<Photo[]>(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
  }
  getAlbumIdByPhoto(albumId: number) {
    return this.http.get<Photo[]>(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
  }
}
