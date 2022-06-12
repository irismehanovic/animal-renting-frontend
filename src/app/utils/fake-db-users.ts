import {UsersProperty} from "../models/users-property.enum";
import {Users} from "../models/user.model";
import {UserCityEnum} from "../models/user-city.enum";
import {UsersTypeEnum} from "../models/user-type.enum";

export const dbUsers: Users[] = [
  {

    [UsersProperty.id]: '10',
    [UsersProperty.firstName]: 'Anida',
    [UsersProperty.lastName]: 'Sadikovic',
    [UsersProperty.email]: 'anida@gmail.com',
    [UsersProperty.username]: 'anida123',
    [UsersProperty.password]: 'anida123',
    [UsersProperty.phoneNumber]: '05172933',
    [UsersProperty.userType]: UsersTypeEnum.renter,
    [UsersProperty.city]: UserCityEnum.Livno,
  }

];
