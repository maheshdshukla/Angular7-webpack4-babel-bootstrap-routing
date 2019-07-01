import { NgModule } from '@angular/core';
import {ExtraOptions, Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeLayoutComponent } from './template/layouts';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [			
	{
		path: 'auth',
		loadChildren: './authentication/authentication.module#AuthenticationModule',
	},	
	{
		path: 'home',
		component: HomeComponent
	},
	{ path: '', pathMatch: 'full', redirectTo: '/home' },
	{ path: '**', component: PageNotFoundComponent }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes,config)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
