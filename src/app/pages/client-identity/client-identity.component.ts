import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'app-client-identity',
  templateUrl: './client-identity.component.html',
  styleUrls: ['./client-identity.component.scss']
})
export class ClientIdentityComponent implements OnInit {

  form: FormGroup;

  file: File;

  constructor(public utilsService: UtilsService,
              private _router: Router,
              private _fb: FormBuilder,
              private _toastrService: ToastrService) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      documentType: [null, Validators.required],
      documentSeries: [null],
      documentNumber: [null, Validators.required],
      documentIssuingAuthority: [null],
      documentIssueDate: [null, Validators.required]
    });
  }

  uploadFile(event: any): void {
    if (!event.target.files && !event.target.files.length) {
      return;
    }

    this.file = event.target.files[0];
  }

  goPrevious(): void {
    this._router.navigate(['address']);
  }

  goToClient(): void {
    if (this.form.invalid) {
      this._toastrService.error('Необходимо заполнить форму для продолжения');
      return;
    }

    localStorage.setItem('clientIdentity', JSON.stringify(this.form.value));
    this.utilsService.clientDocumentFile = this.file ? this.file : null;
    this._toastrService.success('Клиент успешно создан');
    this._router.navigate(['client-created']);
  }

}
