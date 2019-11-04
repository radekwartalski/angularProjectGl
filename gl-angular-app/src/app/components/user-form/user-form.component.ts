import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { descriptionValidator } from '../../helpers/validators';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  submitted = false;
  registrationKey = 'registration';

  constructor(private fb: FormBuilder, private localStorageService: LocalStorageService) { }

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

  get f() {
    return this.profileForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.profileForm.invalid){
      this.localStorageService.putItemsIntoLocalStorage(this.registrationKey, this.profileForm.value );
    }
  }

  clearLocalStorage() {
    this.localStorageService.resetLocalStorage();
  }

  getRegisteredUsersFromLocalStorage() {
    this.localStorageService.getAllItemsFromLocalStorage(this.registrationKey);
  }

  getSpecItem() {
   const specItem = this.localStorageService.getSpecificItemFromLocalStorage(this.registrationKey, 'email', 'r@r.pl');
  }

}
