import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Animal} from "../../models/animal.model";
import {AnimalGenderEnum, AnimalGenderMapping} from "../../models/animal-gender.enum";
import {AnimalTypeEnum, AnimalTypeMapping} from "../../models/animal-type.enum";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnimalProperty} from "../../models/animal-property.enum";
import { CommonModule, CurrencyPipe} from '@angular/common';

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

  constructor(
    private formBuilder: FormBuilder,
    private currencyPipe: CurrencyPipe
) { }

  ngOnInit(): void {
    const user_id: string | null = localStorage.getItem('id');
    if (user_id===null) {
      throw "Error initializing id";
    }
    this.form = this.formBuilder.group({
      [AnimalProperty.id]: [this.animal?.[AnimalProperty.id] || ''],
      [AnimalProperty.age]: [this.animal?.[AnimalProperty.age] || '', Validators.required],
      [AnimalProperty.price]: [this.animal?.[AnimalProperty.price] || '', Validators.required],
      [AnimalProperty.shortDescription]: [this.animal?.[AnimalProperty.shortDescription] || '', Validators.required],
      [AnimalProperty.longDescription]: [this.animal?.[AnimalProperty.longDescription] || '', Validators.required],
      [AnimalProperty.animalType]: [this.animal?.[AnimalProperty.animalType] || false],
      [AnimalProperty.gender]: [this.animal?.[AnimalProperty.gender] || false],
      [AnimalProperty.isVaccinated]: [this.animal?.[AnimalProperty.isVaccinated] || false],
      [AnimalProperty.userId]: [user_id],

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
