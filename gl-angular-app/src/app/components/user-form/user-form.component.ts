import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { descriptionValidator } from '../../helpers/validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  submitted = false;

  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group ({
    firstName: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(4)]],
    lastName: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    gender: ['', Validators.required],
    disabled: [''],
    country: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    description: ['', [descriptionValidator]]
  });

  ngOnInit() {
  }

  get f(){
    return this.profileForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.log(this.f);
  }

}
