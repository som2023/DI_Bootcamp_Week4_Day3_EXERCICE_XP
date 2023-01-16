import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UtilisateursService } from '../utilisateurs.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users!: User[];

  constructor(private userService: UtilisateursService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => this.users = data );
  }

}
