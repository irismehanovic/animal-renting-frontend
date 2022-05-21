import {Injectable} from '@angular/core';
import {Animal} from "../models/animal.model";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable()
export class AnimalService {

  private readonly baseUrl: string = environment.backendUrl + '/home';

  constructor(private http:HttpClient) { }

  public getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.baseUrl);
  }

  public getAnimal(id:string): Observable<Animal> {
    return this.http.get<Animal>(`${this.baseUrl}/${id}`);
  }

  public create(animal:Animal): Observable<Animal> {
    return this.http.post<Animal>(`${this.baseUrl}`, animal);
  }

}
