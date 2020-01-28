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
}
