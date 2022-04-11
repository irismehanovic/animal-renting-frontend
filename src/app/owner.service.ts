import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor() { }

  getOwners() {
    return [
      {"id":1, "username":"sara.memic", "name":"Sara", "surname":"Memic", "age":24,  "city":"Sarajevo"},
      {"id":2, "username":"efnan.merdan", "name":"Efnan", "surname":"Merdan", "age":21,  "city":"Visoko"},
      {"id":3, "username":"hamid.sadikovic", "name":"Hamid", "surname":"Sadikovic", "age":22,  "city":"Sarajevo"}
    ];
  }
}
