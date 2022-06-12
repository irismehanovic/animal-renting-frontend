import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Users} from "../../models/user.model";
import {UsersTypeEnum, UsersTypeMapping} from "../../models/user-type.enum";
import {UsersProperty} from "../../models/users-property.enum";
import {AnimalProperty} from "../../models/animal-property.enum";
import {UserCityEnum, UsersCityMapping} from "../../models/user-city.enum";
import {RegisterForm} from "../../models/auth/register-form.interface";
import {AuthService} from "../../service/auth.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AnimalService} from "../../service/animal.service";

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
    private formBuilder: FormBuilder,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [UsersProperty.id]: [this.users?.[AnimalProperty.id] || ''],
      [UsersProperty.firstName]: [this.users?.[UsersProperty.firstName] || '', Validators.required],
      [UsersProperty.lastName]: [this.users?.[UsersProperty.lastName] || '', Validators.required],
      [UsersProperty.email]: [this.users?.[UsersProperty.email] || '', Validators.required],
      [UsersProperty.username]: [this.users?.[UsersProperty.username] || '', Validators.required],
      [UsersProperty.password]: [this.users?.[UsersProperty.password] || '', Validators.required],
      [UsersProperty.phoneNumber]: [this.users?.[UsersProperty.phoneNumber] || '', Validators.required],
      [UsersProperty.userType]: [this.users?.[UsersProperty.userType] || false],
      [UsersProperty.city]: [this.users?.[UsersProperty.city] || false],
    });
  }

  public get usersType() {
    const typeValue: UsersTypeEnum | null = this.form.value[UsersProperty.userType];
    return typeValue ? UsersTypeMapping[typeValue] : null;
  }

  public get firstName() {
    const firstName: string = this.form.value[UsersProperty.firstName];
    return firstName;
  }
  public get lastName() {
    const lastName: string = this.form.value[UsersProperty.lastName];
    return lastName;
  }
  public get username() {
    const username: string = this.form.value[UsersProperty.username];
    return username;
  }
  public get phoneNumber() {
    const phoneNumber: string = this.form.value[UsersProperty.phoneNumber];
    return phoneNumber;
  }
  public get password() {
    const password: string = this.form.value[UsersProperty.password];
    return password;
  }
  public get email() {
    const email: string = this.form.value[UsersProperty.email];
    return email;
  }


  public get city() {
    const cityValue: UserCityEnum | null = this.form.value[UsersProperty.city];
    return cityValue ? UsersCityMapping[cityValue] : null;
  }

  public submit(): void {
    this.form!.markAllAsTouched();
    if (!this.form.valid) {
      return;
    }
    const registerForm: RegisterForm = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password,
      phoneNumber: this.phoneNumber,
      userType: this.usersType?.value,
      city: this.city?.value,
    }
    console.log(registerForm);

    this.authService.register(registerForm).subscribe();

    //   this.saveUser.emit(this.form.value);

    //this.resetForm();
  }



  private resetForm(): void {
    this.form.reset();
  }

}
