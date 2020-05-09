import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthLoginGuard } from './auth-login.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent, canActivate: [AuthLoginGuard] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [AuthLoginGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
