import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollComponent } from './pages/enroll/enroll.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    children : [
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'enroll/:id',
        component : EnrollComponent
      },
      {
        path : '**',
        redirectTo : 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
