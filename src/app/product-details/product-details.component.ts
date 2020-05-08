import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { User, UsersService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id: string;
  user: User;

  type: 'vertical';

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(map(p => p.productId))
      .subscribe(id => {
        this.usersService.getUserById(id)
          .subscribe(user => this.user = user);
      });
  }

}
