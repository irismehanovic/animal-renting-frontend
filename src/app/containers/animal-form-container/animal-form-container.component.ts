import { Component, OnInit } from '@angular/core';
import {Animal} from "../../models/animal.model";
import {dbAnimals} from '../../utils/fake-db';
import {ActivatedRoute, Router} from '@angular/router';
import {AnimalService} from "../../service/animal.service";
import {Route} from "../../constants/route.constants";
import {ResolverResponse} from "../../constants/resolver-response.constants";
import {AnimalProperty} from "../../models/animal-property.enum";

@Component({
  selector: 'app-animal-form-container',
  templateUrl: './animal-form-container.component.html',
})
export class AnimalFormContainerComponent implements OnInit {

  public animal: Animal | undefined;

  private isEditing: boolean = false;
  private animals: Animal[] = dbAnimals;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService,
  ) { }

  ngOnInit(): void {
    this.isEditing = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path === Route.EDIT;
    if (this.isEditing) {
      this.activatedRoute.data.subscribe((response: any) => {
        this.animal = response[ResolverResponse.ANIMAL];
      });
    }
  }

  saveAnimal(animal: Animal): void {
    console.log(123);
    if (this.isEditing) {
      const existingIndex = this.animals.findIndex(i => i[AnimalProperty.id] === animal[AnimalProperty.id]);
      this.animals.splice(existingIndex, 1, animal);
      this.router.navigate([Route.ANIMALS]);
    } else {
      this.animalService.create(animal).subscribe(value => {
        this.router.navigate(['animal-list']);
      });
    }
  }

}
