import { NgModule } from '@angular/core';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication.component';

const AUTH_COMPONENTS = [
  LoginComponent, RegisterComponent, AuthenticationComponent
];

@NgModule({  
  imports: [
    AuthenticationRoutingModule
  ],
  declarations: [...AUTH_COMPONENTS],
  exports: [...AUTH_COMPONENTS]
})
export class AuthenticationModule { }
