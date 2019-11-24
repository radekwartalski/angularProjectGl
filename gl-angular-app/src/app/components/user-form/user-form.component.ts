import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { descriptionValidator } from '../../helpers/validators';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  flagForMessageIfEmailAlreadyExist = false;
  closePopUpflag = false;

  registrationKey = 'registration';

  constructor(private fb: FormBuilder, private localStorageService: LocalStorageService, private router: Router) { }

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
    if (!this.emailExistInLocalStorage()){
      this.flagForMessageIfEmailAlreadyExist = false;
      this.localStorageService.putItemsIntoLocalStorage(this.registrationKey, this.profileForm.value );
      setTimeout(() => {
        this.router.navigate(['/home']);
        this.closePopUpflag = true;
      }, 3000);
    } else {
      this.flagForMessageIfEmailAlreadyExist = true;
    }
  }

  clearLocalStorage() {
    this.localStorageService.resetLocalStorage();
  }

  getRegisteredUsersFromLocalStorage() {
    this.localStorageService.getAllItemsFromLocalStorage(this.registrationKey);
  }

  emailExistInLocalStorage(): boolean {
    return  this.localStorageService.getSpecificItemFromLocalStorage(this.registrationKey, 'email', this.profileForm.controls.email.value)
    ? true : false;
  }

//   countDown(timeLeft: number) {
//     let counter = 0;
//     let ixnterval = setInterval(() => {
//       counter ++;
//       console.log(timeLeft - counter);
// 	  if (timeLeft - counter == 0) {
// 		clearInterval(ixnterval)
// 	 }
//     }, 1000);
//   }

}
