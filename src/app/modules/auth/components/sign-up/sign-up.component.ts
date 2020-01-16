import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  signUpUser = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirmation: ''
  };

  errors = [];

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  signUp() {
    if (this.signUpUser.email && this.signUpUser.first_name && this.signUpUser.last_name &&
      this.signUpUser.password && this.signUpUser.password_confirmation) {
      this.authService.signup(this.signUpUser.email, this.signUpUser.first_name, this.signUpUser.last_name,
        this.signUpUser.password, this.signUpUser.password_confirmation)
        .subscribe(
          () => {
            this.authService.login(this.signUpUser.email, this.signUpUser.password)
              .subscribe(
                () => this.router.navigateByUrl('/home')
              );
          },
          (res) => {
            this.errors = [];
            const errors = res.error.errors;
            for (const key of Object.keys(errors)) {
              this.errors.push(this.capitalizeFirstLetter(key) + ' ' + errors[key]);
            }
          }
        );
    }
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
