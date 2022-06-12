import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal} from "../models/animal.model";
import {AnimalProperty} from "../models/animal-property.enum";
import {Route} from "../constants/route.constants";
import {AnimalGenderMapping} from "../models/animal-gender.enum";
import {AnimalTypeMapping} from "../models/animal-type.enum";
import {ActivatedRoute} from "@angular/router";

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

  public animalProperty = AnimalProperty;
  public route = Route;

  public remove(animal: Animal): void {
    this.removeAnimal.emit(animal);
  }

  getGender(animal: Animal) {
    return AnimalGenderMapping[animal[AnimalProperty.gender]].value;
  }

  getAnimalType(animal: Animal) {
    return AnimalTypeMapping[animal[AnimalProperty.animalType]].value;
  }


  constructor(private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response:any)=>{
      this.animals=response.animals
    })
  }

}
