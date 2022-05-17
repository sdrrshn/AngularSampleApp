import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUserInfo(userId: number) {
    return this.http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
