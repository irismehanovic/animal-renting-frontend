import { Component, OnInit } from '@angular/core';
import {Animal} from "../../models/animal.model";
import {dbAnimals} from '../../utils/fake-db';
import {ActivatedRoute, Router} from '@angular/router';
import {AnimalService} from "../../service/animal.service";
import {Route} from "../../constants/route.constants";
import {ResolverResponse} from "../../constants/resolver-response.constants";
import {AnimalProperty} from "../../models/animal-property.enum";
import {Users} from "../../models/user.model";
import {dbUsers} from "../../utils/fake-db-users";
import {UserService} from "../../service/user.service";
import {UsersProperty} from "../../models/users-property.enum";

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
})
export class RegisterContainerComponent implements OnInit {

  public user: Users | undefined;

  private isEditing: boolean = false;
  private users: Users[] = dbUsers;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.isEditing = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path === Route.EDIT;
    if (this.isEditing) {
      this.activatedRoute.data.subscribe((response: any) => {
        this.user = response[ResolverResponse.USER];
      });
    }
  }

  saveUsers(user: Users): void {
    console.log(123);
    if (this.isEditing) {
      const existingIndex = this.users.findIndex(i => i[UsersProperty.id] === user[UsersProperty.id]);
      this.users.splice(existingIndex, 1, user);
      this.router.navigate([Route.USERS]);
    } else {
      this.userService.create(user).subscribe(value => {
        this.router.navigate(['user-profile']);
      });
    }
  }

}
