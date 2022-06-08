import {AnimalProperty} from "./animal-property.enum";
import {AnimalGenderEnum} from "./animal-gender.enum";
import {AnimalTypeEnum} from "./animal-type.enum";

export interface Animal {
  [AnimalProperty.id]?: string;
  [AnimalProperty.owner]: string;
  [AnimalProperty.age]: string;
  [AnimalProperty.price]: string;
  [AnimalProperty.shortDescription]: string;
  [AnimalProperty.longDescription]: string;
  [AnimalProperty.location]: string;
  [AnimalProperty.animalType]: AnimalTypeEnum;
  [AnimalProperty.gender]: AnimalGenderEnum;
  [AnimalProperty.isVaccinated]?: boolean;
}
