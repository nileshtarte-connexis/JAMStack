import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id: string;
  user: User;

  type: 'vertical';

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(map(p => p.userId))
      .subscribe(id => {
        this.usersService.getUserById(id)
          .subscribe(user => this.user = user);
      });
  }

}
