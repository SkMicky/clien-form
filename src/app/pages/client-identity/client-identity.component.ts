import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-client-identity',
  templateUrl: './client-identity.component.html',
  styleUrls: ['./client-identity.component.scss']
})
export class ClientIdentityComponent implements OnInit {

  form: FormGroup;

  constructor(private _router: Router, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      documentType: [null, Validators.required],
      documentSeries: [null],
      documentNumber: [null, Validators.required],
      documentIssuingAuthority: [null],
      documentIssueDate: [null, Validators.required],
      documentFile: [null]
    });
  }

  goPrevious(): void {
    this._router.navigate(['client']);
  }

  goToClient(): void {
    if (this.form.invalid) {
      return;
    }

    localStorage.setItem('clientIdentity', JSON.stringify(this.form.value));
    this._router.navigate(['client-created']);
  }

}
