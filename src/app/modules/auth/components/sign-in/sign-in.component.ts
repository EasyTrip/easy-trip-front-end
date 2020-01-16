import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  signInUser = {
    email: '',
    password: ''
  };

  errors = [];

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  signIn() {
    if (this.signInUser.email && this.signInUser.password) {
      this.authService.login(this.signInUser.email, this.signInUser.password)
        .subscribe(
          () => {
            this.router.navigateByUrl('/home');
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
