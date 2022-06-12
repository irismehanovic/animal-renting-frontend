import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal} from "../models/animal.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  animals: Animal[] | null = [];

  @Output()
  removeAnimal: EventEmitter<Animal> = new EventEmitter<Animal>()

  constructor() { }

  ngOnInit(): void {
  }

}
