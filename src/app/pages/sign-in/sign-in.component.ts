import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  link: string;
  // this can be coming from the API, service, json file, or other resources
  // myUser = { fName: 'Carson', lName: 'Huber', mName: 'Maxwell', hasMiddleName: true };
  constructor(private fb: FormBuilder, private router: Router) { }
  // get fName() { return this.signInForm.get('fName'); }
  // get lName() { return this.signInForm.get('lName'); }
  // get mName() { return this.signInForm.get('mName'); }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.signInForm = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
      savePassword: ''
    });
  }

  submitForm() {
    if (this.signInForm.invalid) {
      alert('Error! Please fill in blank spaces!');
    } else {
      const f: any = {
        userName: this.signInForm.value.userName,
        password: this.signInForm.value.password
      };
      alert('Success! Welcome and enjoy shopping!');
      this.signInForm.reset();
      this.router.navigate(['home']);
      console.log(f);
    }
  }






  // setValue() {
  //   this.signInForm.setValue({
  //     fName: 'Carson',
  //     lName: 'Huber',
  //     mName: 'Maxwell',
  //     hasMiddleName: true
  //   });
  // }


  // patchValue() {
  //   this.signInForm.patchValue({
  //     fName: 'Carson'
  //   });
  // }

}
