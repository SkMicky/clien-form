import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {UtilsService} from '../../services/utils.service';
import {IClient} from '../../shared/models/client.model';

@Component({
  selector: 'app-client-created',
  templateUrl: './client-created.component.html',
  styleUrls: ['./client-created.component.scss']
})
export class ClientCreatedComponent implements OnInit, OnDestroy {

  client: any = {};

  documentFile: File;

  private _sub: Subscription;

  constructor(private _utilsService: UtilsService) { }

  ngOnInit(): void {
    this._sub = this._utilsService.clientDocumentFile.subscribe(data => {
      console.log(data);
      this.documentFile = data;
    });

    this.client.personal = localStorage.getItem('clientInfo') ? JSON.parse(localStorage.getItem('clientInfo')) : null;
    this.client.address = localStorage.getItem('clientAddress') ? JSON.parse(localStorage.getItem('clientAddress')) : null;
    this.client.identity = localStorage.getItem('clientIdentity') ? JSON.parse(localStorage.getItem('clientIdentity')) : null;

    console.log(this.client, localStorage.getItem('clientInfo'));
  }

  ngOnDestroy(): void {
    localStorage.removeItem('clientInfo');
    localStorage.removeItem('clientAddress');
    localStorage.removeItem('clientIdentity');
    localStorage.clear();

    if (this._sub) {
      this._sub.unsubscribe();
    }
  }

}
