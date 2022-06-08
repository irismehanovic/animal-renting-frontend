import { Component, OnInit } from '@angular/core';
import {Animal} from "../../models/animal.model";
import {AnimalService} from "../../service/animal.service";
import {AnimalProperty} from "../../models/animal-property.enum";
import {Subject} from "rxjs";

@Component({
  selector: 'app-post-animal-container',
  templateUrl: './post-animal-container.component.html',
})
export class PostAnimalContainerComponent implements OnInit {

  public animals: Subject<Animal[]> = new Subject<Animal[]>();

  constructor(
    private animalService: AnimalService,
  ) {
  }

  ngOnInit(): void {
    this.reloadAnimals();
  }

  removeAnimal(animal: Animal) {
    this.animalService.delete(animal[AnimalProperty.id]!).subscribe(() => {
      this.reloadAnimals();
    });
  }

  private reloadAnimals() {
    this.animalService.getAnimals().subscribe(animals => {
      this.animals.next(animals);
    });
  }
}
