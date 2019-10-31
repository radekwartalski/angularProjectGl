import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;

  constructor(private fb: FormBuilder, private localStorageService: LocalStorageService) { }

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
    this.submitted = true;


    if (!this.loginForm.invalid && this.localStorageService.doesItemExistInLocalStorage('registration', 'email', this.f.email.value)
    && this.localStorageService.doesItemExistInLocalStorage('registration', 'password', this.f.password.value)) {
      console.log('exist');
    } else {
      console.log('doesnt exist');
    }
  }
}
