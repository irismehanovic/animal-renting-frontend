import {Animal} from "../models/animal.model";
import {AnimalProperty} from "../models/animal-property.enum";
import {AnimalTypeEnum} from "../models/animal-type.enum";
import {AnimalGenderEnum} from "../models/animal-gender.enum";

export const dbAnimals: Animal[] = [
  {

    [AnimalProperty.id]: '10',
    [AnimalProperty.owner]: 'Anida Sadikovic',
    [AnimalProperty.age]: '1',
    [AnimalProperty.price]: '9.20',
    [AnimalProperty.shortDescription]: 'A beautiful cat',
    [AnimalProperty.longDescription]: 'A beautiful cat with white fur',
    [AnimalProperty.location]: 'Sarajevo',
    [AnimalProperty.animalType]: AnimalTypeEnum.cat,
    [AnimalProperty.gender]: AnimalGenderEnum.male,
    [AnimalProperty.isVaccinated]: false,

  }
];
