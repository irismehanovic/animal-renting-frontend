import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal} from "../models/animal.model";
import {AnimalProperty} from "../models/animal-property.enum";
import {Route} from "../constants/route.constants";
import {AnimalGenderMapping} from "../models/animal-gender.enum";
import {AnimalTypeMapping} from "../models/animal-type.enum";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../service/user.service";
import {Users} from "../models/user.model";
import {UsersProperty} from "../models/users-property.enum";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private id: string | null;
  public user: Users | any = '';

  @Input()
  animals: Animal[] | null = [];

  @Output()
  removeAnimal: EventEmitter<Animal> = new EventEmitter<Animal>()

  public animalProperty = AnimalProperty;
  public route = Route;

  public remove(animal: Animal): void {
    this.removeAnimal.emit(animal);
  }

  getGender(animal: Animal) {
    return AnimalGenderMapping[animal[AnimalProperty.gender]].value;
  }

  getAnimalType(animal: Animal) {
    return AnimalTypeMapping[animal[AnimalProperty.animalType]].value;
  }


  constructor(private activatedRoute:ActivatedRoute, private userService: UserService) {
    this.id = null;
    }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    this.activatedRoute.data.subscribe((response:any)=>{
      this.animals=response.animals
    })

    if (this.id===null) {
      throw "there was error in fetching id"
    }

    this.userService.getUser(this.id).subscribe((response:any)=>{
      this.user = response
      console.log(this.user);
      }
    )

    // this.activatedRoute.queryParams.subscribe(params => {
    //   console.log(params)
    //   this.id = params['id'];
    //   console.log(this.id)
    // });
  }

}
