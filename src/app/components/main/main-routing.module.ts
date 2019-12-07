import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { LandingComponent } from '../landing/landing.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
// import { UserProfileComponent } from '../user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'index', component: LandingComponent, canActivate: [AuthGuardService] },
  // { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class MainRoutingModule { }
