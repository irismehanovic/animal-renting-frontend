import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Users} from "../../models/user.model";
import {UsersTypeEnum, UsersTypeMapping} from "../../models/user-type.enum";
import {UsersProperty} from "../../models/users-property.enum";
import {AnimalProperty} from "../../models/animal-property.enum";
import {UserCityEnum, UsersCityMapping} from "../../models/user-city.enum";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output()
  saveUser: EventEmitter<Users> = new EventEmitter<Users>();

  @Input()
  users: Users | undefined;

  public readonly usersTypes = [
    UsersTypeMapping[UsersTypeEnum.renter],
    UsersTypeMapping[UsersTypeEnum.rentee],
  ];

  public readonly  usersCities = [
    UsersCityMapping[UserCityEnum.Sarajevo],
    UsersCityMapping[UserCityEnum.Tuzla],
    UsersCityMapping[UserCityEnum.Mostar],
    UsersCityMapping[UserCityEnum.Zenica],
    UsersCityMapping[UserCityEnum.Bihac],
    UsersCityMapping[UserCityEnum.Trebinje],
    UsersCityMapping[UserCityEnum.Prijedor],
    UsersCityMapping[UserCityEnum.Doboj],
    UsersCityMapping[UserCityEnum.Zavidovici],
    UsersCityMapping[UserCityEnum.Visoko],
    UsersCityMapping[UserCityEnum.Cazin],
    UsersCityMapping[UserCityEnum.Livno],
  ];

  public form!: FormGroup;
  public usersProperty = UsersProperty;
  public isEditable: boolean = true;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [UsersProperty.id]: [this.users?.[AnimalProperty.id] || ''],
      [UsersProperty.firstName]: [this.users?.[UsersProperty.firstName] || '', Validators.required],
      [UsersProperty.lastName]: [this.users?.[UsersProperty.lastName] || '', Validators.required],
      [UsersProperty.email]: [this.users?.[UsersProperty.email] || '', Validators.required],
      [UsersProperty.username]: [this.users?.[UsersProperty.username] || '', Validators.required],
      [UsersProperty.password]: [this.users?.[UsersProperty.password] || '', Validators.required],
      [UsersProperty.userType]: [this.users?.[UsersProperty.userType] || false],
      [UsersProperty.phoneNumber]: [this.users?.[UsersProperty.phoneNumber] || '', Validators.required],
      [UsersProperty.city]: [this.users?.[UsersProperty.city] || false],
    });
  }

  public get usersType() {
    const typeValue: UsersTypeEnum | null = this.form.value[UsersProperty.userType];
    return typeValue ? UsersTypeMapping[typeValue] : null;
  }

  public get city() {
    const cityValue: UserCityEnum | null = this.form.value[UsersProperty.city];
    return cityValue ? UsersCityMapping[cityValue] : null;
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.saveUser.emit(this.form.value);

    this.resetForm();
  }

  private resetForm(): void {
    this.form.reset();
  }

}
