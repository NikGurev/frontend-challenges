import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';



// @ts-ignore
@NgModule({
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
// @ts-ignore
export class SharedModule { }
