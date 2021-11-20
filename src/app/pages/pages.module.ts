import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import {ComponentsModule} from '../components/components.module';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientAddressComponent } from './client-address/client-address.component';
import { ClientIdentityComponent } from './client-identity/client-identity.component';
import { ClientCreatedComponent } from './client-created/client-created.component';


@NgModule({
  declarations: [
    ClientsComponent,
    ClientInfoComponent,
    ClientAddressComponent,
    ClientIdentityComponent,
    ClientCreatedComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
})
export class PagesModule { }
