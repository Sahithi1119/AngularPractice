import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const materialComponents=[
  MatButtonModule,MatToolbarModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponents
   
  ],
  exports:[materialComponents]
})
export class AngularMaterialModule { }
