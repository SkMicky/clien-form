import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

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

    });
  }

  goToClient(): void {
    this._router.navigate(['client-created']);
  }

}
