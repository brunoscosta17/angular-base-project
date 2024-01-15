import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule } from '@angular/forms';
import { FieldErrorComponent } from './components/field-error/field-error.component';

const Declarations = [
  LoadingComponent,
  InputComponent,
  FieldErrorComponent
];

@NgModule({
  declarations: [Declarations, FieldErrorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [Declarations]
})
export class SharedModule { }
