import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Animal} from "../../models/animal.model";
import {AnimalGenderEnum, AnimalGenderMapping} from "../../models/animal-gender.enum";
import {AnimalTypeEnum, AnimalTypeMapping} from "../../models/animal-type.enum";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnimalProperty} from "../../models/animal-property.enum";

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  @Output()
  saveAnimal: EventEmitter<Animal> = new EventEmitter<Animal>();

  @Input()
  animal: Animal | undefined;

  public readonly animalTypes = [
    AnimalTypeMapping[AnimalTypeEnum.dog],
    AnimalTypeMapping[AnimalTypeEnum.cat],
    AnimalTypeMapping[AnimalTypeEnum.rabbit],
    AnimalTypeMapping[AnimalTypeEnum.hamster],
    AnimalTypeMapping[AnimalTypeEnum.bird],
  ];

  public readonly genders = [
    AnimalGenderMapping[AnimalGenderEnum.male],
    AnimalGenderMapping[AnimalGenderEnum.female],
  ];

  public form!: FormGroup;
  public animalProperty = AnimalProperty;
  public isEditable: boolean = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [AnimalProperty.id]: [this.animal?.[AnimalProperty.id] || ''],
      [AnimalProperty.owner]: [this.animal?.[AnimalProperty.owner] || '', Validators.required],
      [AnimalProperty.age]: [this.animal?.[AnimalProperty.age] || '', Validators.required],
      [AnimalProperty.price]: [this.animal?.[AnimalProperty.price] || '', Validators.required],
      [AnimalProperty.shortDescrption]: [this.animal?.[AnimalProperty.shortDescrption] || '', Validators.required],
      [AnimalProperty.longDescrption]: [this.animal?.[AnimalProperty.longDescrption] || '', Validators.required],
      [AnimalProperty.location]: [this.animal?.[AnimalProperty.location] || '', Validators.required],
      [AnimalProperty.animalType]: [this.animal?.[AnimalProperty.animalType] || false],
      [AnimalProperty.gender]: [this.animal?.[AnimalProperty.gender] || false],
      [AnimalProperty.isVaccinated]: [this.animal?.[AnimalProperty.isVaccinated] || false],
    });
  }

  public get animalType() {
    const typeValue: AnimalTypeEnum | null = this.form.value[AnimalProperty.animalType];
    return typeValue ? AnimalTypeMapping[typeValue] : null;
  }

  public get gender() {
    const genderValue: AnimalGenderEnum | null = this.form.value[AnimalProperty.gender];
    return genderValue ? AnimalGenderMapping[genderValue] : null;
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.saveAnimal.emit(this.form.value);

    this.resetForm();
  }

  private resetForm(): void {
    this.form.reset();
  }

}
