import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Animal} from "../models/animal.model";
import {AnimalService} from "../service/animal.service";

@Injectable()
export class AnimalsResolver implements Resolve<Animal[]> {

  constructor(private animalService:AnimalService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animal[]> | Promise<Animal[]> | Animal[] {
    const animals = this.animalService.getAnimals();
    if(!animals) {
      throw 'Animals not found!';
    }
    return animals;
  }

}
