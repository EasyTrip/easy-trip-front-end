import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { shareReplay, tap } from 'rxjs/operators';

const signUpQuery = gql`
  mutation emailSignUp(
    $email: String!,
    $firstName: String!,
    $lastName: String!,
    $password: String!,
    $passwordConfirmation: String!
  ) {
    emailSignUp(
      email: $email,
      firstName: $firstName,
      lastName: $lastName,
      password: $password,
      passwordConfirmation: $passwordConfirmation
    ) {
      email
    }
  }
`;
const signInQuery = gql`
  mutation emailSignIn($email: String!, $password: String!) {
    emailSignIn(email: $email, password: $password) {
      authToken
    }
  }
`;

@Injectable()
export class AuthService {
  private token: string;

  constructor(private router: Router, private apollo: Apollo) {
  }

  public signUp(
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    passwordConfirmation: string
  ): Observable<any> {
    return this.apollo.mutate({
      mutation: signUpQuery,
      variables: {
        email,
        firstName,
        lastName,
        password,
        passwordConfirmation
      }
    });
  }

  public signIn(email: string, password: string): Observable<any> {
    return this.apollo.mutate({
      mutation: signInQuery,
      variables: { email, password }
    }).pipe(
      tap(res => this.saveToken(res)),
      shareReplay()
    );
  }

  public signOut(): void {
    localStorage.removeItem('access_token');
    this.token = '';
    this.router.navigateByUrl('/sign-in');
  }

  public isSignedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public getUserDetails() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('access_token');
    }
    return this.token;
  }

  private saveToken(authResult): void {
    localStorage.setItem('access_token', authResult.data.emailSignIn.authToken);
    this.token = authResult.auth_token;
  }
}
