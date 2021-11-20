import { Component } from '@angular/core';
import { IClient } from '../../shared/models/client.model';
import { CLIENTS_MOCK } from '../../shared/mocks/clients.mock';

@Component({
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  clients: IClient[] = CLIENTS_MOCK;

  constructor() { }

}
