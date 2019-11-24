import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDoesntExsist = false;
  loginSuccess = false;
  newB: boolean;

  constructor(private fb: FormBuilder, private localStorageService: LocalStorageService, private router: Router) { }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit() {
  }

  get f() {
    return this.loginForm.controls;
  }

  submitLogin() {
this.newB = this.localStorageService.doesItemExistInLocalStorage('registration', 'email', this.f.email.value)
&& this.localStorageService.doesItemExistInLocalStorage('registration', 'password', this.f.password.value);
    if (!this.loginForm.invalid && this.newB) {
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    } 
  }
}
