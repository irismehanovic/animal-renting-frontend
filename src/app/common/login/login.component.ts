import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {Route} from "../../constants/route.constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup | undefined;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  handleFormSubmit() {
    this.form!.markAllAsTouched();

    if (this.form!.valid) {
      this.authService.logIn({ ...this.form!.value }).subscribe(() => {
        this.router.navigate([Route.USER_PROFILE + '/' + localStorage.getItem('id')]);
      });
    } else console.log(123)
  }

}
