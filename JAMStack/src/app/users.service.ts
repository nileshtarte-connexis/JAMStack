import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  name: string;
  id: number;
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
    // http://www.mocky.io/v2/5eb5458e3100005e0069944c
    return this.http.get<User[]>('http://localhost:1337/user-details');
  }

  getUserById(id: number) {
    // return this.getUsers()
    //   .pipe(map(products => {
    //     const filtered = products.filter(x => x.id === id);

    //     if (filtered.length > 0) {
    //       return filtered[0];
    //     }

    //     return null;
    //   }));
  return this.http.get<User>(`http://localhost:1337/user-details/${id}`);

  }

}
