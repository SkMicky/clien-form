import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientInfoComponent} from './pages/client-info/client-info.component';
import {ClientAddressComponent} from './pages/client-address/client-address.component';
import {ClientIdentityComponent} from './pages/client-identity/client-identity.component';
import {ClientCreatedComponent} from './pages/client-created/client-created.component';

export const routes: Routes = [
  {
    path: 'client-form', children: [
      {
        path: '', redirectTo: 'client', pathMatch: 'full'
      },
      {
        path: 'client', component: ClientInfoComponent
      },
      {
        path: 'address', component: ClientAddressComponent
      },
      {
        path: 'identity', component: ClientIdentityComponent
      }
    ],
  },
  {
    path: 'client-created', component: ClientCreatedComponent
  },
  {
    path: '**', redirectTo: '/client-form/client'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
