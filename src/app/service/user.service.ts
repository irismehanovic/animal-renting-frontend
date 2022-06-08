import {Injectable} from '@angular/core';
import {Animal} from "../models/animal.model";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import {Users} from "../models/user.model";

@Injectable()
export class UserService {

  private readonly baseUrl: string = environment.backendUrl + '/users';

  constructor(private http:HttpClient) { }

  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl);
  }

  public getUser(id:string): Observable<Users> {
    return this.http.get<Users>(`${this.baseUrl}/${id}`);
  }

  public create(users:Users): Observable<Users> {
    return this.http.post<Users>(`${this.baseUrl}`, users);
  }

  public update(id:string, users:Users): Observable<Users> {
    return this.http.put<Users>(`${this.baseUrl}/${id}`, users);
  }

  public delete(id:string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
