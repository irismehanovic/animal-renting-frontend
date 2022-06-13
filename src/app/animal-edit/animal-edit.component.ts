import {Component, OnInit} from '@angular/core';
import {Animal} from "../models/animal.model";
import {AnimalGenderEnum, AnimalGenderMapping} from "../models/animal-gender.enum";
import {AnimalTypeEnum, AnimalTypeMapping} from "../models/animal-type.enum";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnimalProperty} from "../models/animal-property.enum";
import {CurrencyPipe} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {AnimalService} from "../service/animal.service";

@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.component.html',
  styleUrls: ['./animal-edit.component.css']
})
export class AnimalEditComponent implements OnInit {

  //public animals: Animal | any = '';

  // @Output()
  // saveAnimal: EventEmitter<Animal> = new EventEmitter<Animal>();

   //@Input()
   public animal: Animal | null = null;

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
    private activatedRoute:ActivatedRoute,
    private formBuilder: FormBuilder,
    private currencyPipe: CurrencyPipe,
    private animalService: AnimalService,
    private router: Router
) { }

  ngOnInit(): void {
    const animal_id: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    if (animal_id===null) throw "Incorrect id"
    this.animalService.getAnimal(animal_id).subscribe((response:any)=>{
        this.animal = response
        console.log(this.animal);

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
    )

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
    if (this.animal===null) throw "error: no animal"

    const animal_id: string | undefined = this.animal[AnimalProperty.id];
    if (animal_id===undefined) throw "Error with deleting"

    this.animalService.update(animal_id, this.form.value).subscribe(value => {
      this.router.navigate(['animal-list']);
    });
    //this.saveAnimal.emit(this.form.value, true);

    this.resetForm();
  }

  private resetForm(): void {
    this.form.reset();
  }

}
