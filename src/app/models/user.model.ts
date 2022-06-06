import {UsersProperty} from "./users-property.enum";
import {UserCityEnum} from "./user-city.enum";
import {UsersTypeEnum} from "./user-type.enum";

export interface Users {
  [UsersProperty.id]?: string;
  [UsersProperty.firstName]: string;
  [UsersProperty.lastName]: string;
  [UsersProperty.email]: string;
  [UsersProperty.username]: string;
  [UsersProperty.password]: string;
  [UsersProperty.userType]: UsersTypeEnum;
  [UsersProperty.phoneNumber]: string;
  [UsersProperty.city]: UserCityEnum;
}
