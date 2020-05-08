import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(
    private usersService: UsersService) { }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }
}
