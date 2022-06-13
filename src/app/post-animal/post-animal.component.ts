import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Animal} from "../models/animal.model";
import {AnimalProperty} from "../models/animal-property.enum";
import {Route} from "../constants/route.constants";
import {AnimalGenderMapping} from "../models/animal-gender.enum";
import {AnimalTypeMapping} from "../models/animal-type.enum";
import {AnimalService} from "../service/animal.service";

@Component({
  selector: 'post-animal',
  templateUrl: './post-animal.component.html',
  styleUrls: ['./post-animal.component.css']
})
export class PostAnimalComponent implements OnInit {


  public animals: Animal[] | null = [];

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


  constructor(private activatedRoute:ActivatedRoute, private animalService: AnimalService) {

  }

  ngOnInit(): void {
    const userId: string | null = localStorage.getItem("id");
    if (userId===null) throw "Error with id"
    this.animalService.getUserAnimals(userId).subscribe((response:any)=>{
        this.animals = response
      }
    )
  }

}



