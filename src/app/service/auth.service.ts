import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {mergeMap, Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {SignInForm} from '../models/auth/sign-in-form.interface';
import {AuthResponse} from '../models/auth/auth-response.interface';
import {Router} from '@angular/router';
import {Route} from '../constants/route.constants';
import {RegisterForm} from "../models/auth/register-form.interface";
import {AnimalService} from "./animal.service";

@Injectable()
export class AuthService {

  private readonly baseUrl: string = `${environment.backendUrl}/authenticate`;
  private readonly  registerUrl: string = `${environment.backendUrl}/signup`;

  private jwt: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  public getToken(): string | null {
    return this.jwt;
  }

  public logIn(signInForm: SignInForm): Observable<void> {
    const body = {
      username: signInForm.email,
      password: signInForm.password,
    };

    return this.http.post<AuthResponse>(`${this.baseUrl}`, body).pipe(
      mergeMap(response => {
        localStorage.setItem('jwt', response.token);
        localStorage.setItem('id', String(response.id));
        console.log(response.token)
        this.jwt = response.token;
        return of(undefined);
      })
    );
  }

  public goToLogin():void {
    this.router.navigate([Route.LOGIN]);
  }


  public register(registerForm: RegisterForm): Observable<void> {

    console.log(this.baseUrl);
    return this.http.post<AuthResponse>(`${this.registerUrl}`, registerForm).pipe(
      mergeMap(response => {
        this.jwt = response.token;
        return of(undefined);
      })
    );
  }

}
