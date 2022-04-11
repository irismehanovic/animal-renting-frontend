import { Injectable } from '@angular/core';
import {PostAnimal} from "../models/post-animal.model";

@Injectable({
  providedIn: 'root'
})
export class PostAnimalService {
  postAnimal: PostAnimal[] = [];

  constructor() { }
}
