import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent  } from './layouts';
import { FooterComponent, HeaderComponent  } from './common';

const TEMPLATE_COMPONENTS = [
  HomeLayoutComponent, FooterComponent,HeaderComponent
];

@NgModule({
  declarations: [...TEMPLATE_COMPONENTS],
  exports : [...TEMPLATE_COMPONENTS],
  imports: [
    CommonModule
  ]
})
export class TemplateModule { }
