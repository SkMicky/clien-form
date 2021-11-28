import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';

import {MatMomentDateModule} from '@angular/material-moment-adapter';

import {ComponentsModule} from '../components/components.module';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientAddressComponent } from './client-address/client-address.component';
import { ClientIdentityComponent } from './client-identity/client-identity.component';
import { ClientCreatedComponent } from './client-created/client-created.component';

import {NgxMaskModule} from 'ngx-mask';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    ClientInfoComponent,
    ClientAddressComponent,
    ClientIdentityComponent,
    ClientCreatedComponent
  ],
    imports: [
        CommonModule,
        ComponentsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatRadioModule,
        MatMomentDateModule,
        NgxMaskModule.forRoot(),
        MatCheckboxModule,
        FormsModule,
    ],
})
export class PagesModule { }
