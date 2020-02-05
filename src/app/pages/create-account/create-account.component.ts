import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  createForm: FormGroup;
  link: string;

  constructor(private accountCreate: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.madeNewForm();
  }

  madeNewForm() {
    this.createForm = this.accountCreate.group({
      fullName: [null, Validators.required],
      userName: [null, Validators.required],
      password: [null, Validators.required],
      emailAddress: [null, Validators.required],
      birth: [null, Validators.required],
      gender: [null, Validators.required],
      country: [null, Validators.required],
      city: [null, Validators.required],
      streetZip: [null, Validators.required],
      secretQuestion: [null, Validators.required],
      secretAnswer: [null, Validators.required]
    });
  }
  accountCheck() {
    if (this.createForm.invalid) {
      alert('Error! You must fill in the blank spaces to have an account created.');
    } else {
      const f: any = {
        userName: this ,
        password: this
      };
      alert('Congratz! Welcome to the store and please take a look at your profile.');
      this.createForm.reset();
      this.router.navigate(['profile']);
    }
  }
  // submitForm() {
  //   if (this.signInForm.invalid) {
  //     alert('Error! Please fill in blank spaces!');
  //   } else {
  //     const f: any = {
  //       userName: this.signInForm.value.userName,
  //       password: this.signInForm.value.password
  //     };
  //     alert('Success! Welcome and enjoy shopping!');
  //     this.signInForm.reset();
  //     this.router.navigate(['home']);
  //     console.log(f);
  //   }
  // }
}
