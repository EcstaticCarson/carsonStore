import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  myFunction() {
    if (confirm('Email Sent')) {
      this.router.navigate(['/home']);
    }
  }
}

// forgotMe() {
//   if (this..invalid) {
//     alert('Please enter a valid email address.');
//   } else {
//     const f: any = {
//       emailAddress:
//     }
//   }
// }

// myFunction() {
//   var txt;
//   if (confirm("Press a button!")) {
//     txt = "You pressed OK!";
//   } else {
//     txt = "You pressed Cancel!";
//   }
//   document.getElementById("demo").innerHTML = txt;
// }

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