import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {ComponentsModule} from '../components/components.module';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientAddressComponent } from './client-address/client-address.component';
import { ClientIdentityComponent } from './client-identity/client-identity.component';
import { ClientCreatedComponent } from './client-created/client-created.component';


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
        MatSelectModule
    ],
})
export class PagesModule { }
