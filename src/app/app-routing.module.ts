import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientInfoComponent} from './pages/client-info/client-info.component';
import {ClientAddressComponent} from './pages/client-address/client-address.component';
import {ClientIdentityComponent} from './pages/client-identity/client-identity.component';
import {ClientCreatedComponent} from './pages/client-created/client-created.component';
import {ClientGuard} from './shared/guards/client.guard';

export const routes: Routes = [
  {
    path: 'client-form', children: [
      {
        path: '', redirectTo: 'client', pathMatch: 'full'
      },
      {
        path: 'client', component: ClientInfoComponent, canActivate: [ClientGuard]
      },
      {
        path: 'address', component: ClientAddressComponent, canActivate: [ClientGuard]

      },
      {
        path: 'identity', component: ClientIdentityComponent, canActivate: [ClientGuard]
      }
    ],
  },
  {
    path: 'client-created', component: ClientCreatedComponent, canActivate: [ClientGuard]
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
