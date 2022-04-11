import { Component, OnInit } from '@angular/core';
import {OwnerService} from "../owner.service";

@Component({
  selector: 'app-owner-list',
  template: '<h2>Owner List</h2> <ul *ngFor="let owner of owners"><li>{{owner["id"]}}-{{owner["name"]}}-{{owner["surname"]}}-{{owner["age"]}}-{{owner["city"]}}</li></ul>',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  public owners = []

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.owners=this.ownerService.getOwners();
  }

}
