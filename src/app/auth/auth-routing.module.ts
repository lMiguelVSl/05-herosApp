import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
