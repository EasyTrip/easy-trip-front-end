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
      this.authService.signUp(this.signUpUser.email, this.signUpUser.first_name, this.signUpUser.last_name,
        this.signUpUser.password, this.signUpUser.password_confirmation)
        .subscribe(
          (res) => {
            this.authService.signIn(res.data.emailSignUp.email, this.signUpUser.password)
              .subscribe(() => this.router.navigateByUrl('/'));
          },
          (error) => {
            this.errors = [error.networkError.error.error.message];
          }
        );
    }
  }
}
