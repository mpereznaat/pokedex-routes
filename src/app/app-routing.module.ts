import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollComponent } from './components/modules/auth/pages/enroll/enroll.component';
import { LoginComponent } from './components/modules/auth/pages/login/login.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

const routes: Routes = [
  {
    path : '404',
    component : NotFoundComponent
  },
  {
    path : 'auth',
    children : [
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'enroll/:id/:param/:name',
        component : EnrollComponent,
      },
      {
        path : '**',
        redirectTo : 'login'
      }
    ]
  },
  {
    path : 'authLazy',
    loadChildren: () => import('./components/modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path : '',
    component : NotFoundComponent,
    pathMatch : 'full'
  },
  {
    path : '**',
    redirectTo : '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
