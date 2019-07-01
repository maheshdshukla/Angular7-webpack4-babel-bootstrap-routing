import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core'

import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [{
  path: '',
  component: AuthenticationComponent,
  children: [
	  { path: '',
		component: LoginComponent,
	  },
	  {
		path: 'login',
		component: LoginComponent,
		data: { title: 'Login' }
	  },
	  {
		path: 'register',
		component: RegisterComponent,
		data: { title: 'Register' }
	  }
	  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
