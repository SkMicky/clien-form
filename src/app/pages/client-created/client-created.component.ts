import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {UtilsService} from '../../services/utils.service';
import {IClient} from '../../shared/models/client.model';
import {DomSanitizer} from '@angular/platform-browser';
import {generateRandomColor} from '../../shared/helpers/random-color-generator';

@Component({
  selector: 'app-client-created',
  templateUrl: './client-created.component.html',
  styleUrls: ['./client-created.component.scss']
})
export class ClientCreatedComponent implements OnInit, OnDestroy {

  client: any = {};

  documentFile: File;
  documentSrc: any;

  private _sub: Subscription;

  constructor(private _utilsService: UtilsService, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this._sub = this._utilsService.clientDocumentFile.subscribe(data => {
      if (data) {
        this.documentFile = data;
        this.documentSrc = this._sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(this.documentFile));
      }
    });

    this.client.personal = localStorage.getItem('clientInfo') ? JSON.parse(localStorage.getItem('clientInfo')) : null;
    this.client.address = localStorage.getItem('clientAddress') ? JSON.parse(localStorage.getItem('clientAddress')) : null;
    this.client.identity = localStorage.getItem('clientIdentity') ? JSON.parse(localStorage.getItem('clientIdentity')) : null;
  }

  ngOnDestroy(): void {
    localStorage.clear();

    if (this._sub) {
      this._sub.unsubscribe();
    }

    if (this.documentSrc) {
      URL.revokeObjectURL(this.documentSrc);
    }
  }

}
