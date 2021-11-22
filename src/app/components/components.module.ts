import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ClientComponent } from './client/client.component';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import { StepperComponent } from './stepper/stepper.component';


@NgModule({
  declarations: [
    ClientComponent,
    StepperComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    ClientComponent,
    StepperComponent,
  ]
})
export class ComponentsModule { }
