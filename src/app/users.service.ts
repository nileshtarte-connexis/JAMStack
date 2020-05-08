import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  name: string;
  id: string;
  url: string;
  phoneNumber: number;
  image: string;
  email: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('http://www.mocky.io/v2/5eb3fe2a0e00006700081816');
  }

  getUserById(id: string): Observable<User | null> {
    return this.getUsers()
      .pipe(map(products => {
        const filtered = products.filter(x => x.id === id);

        if (filtered.length > 0) {
          return filtered[0];
        }

        return null;
      }));
  }
}
