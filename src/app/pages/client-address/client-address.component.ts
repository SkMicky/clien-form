import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'app-client-address',
  templateUrl: './client-address.component.html',
  styleUrls: ['./client-address.component.scss']
})
export class ClientAddressComponent implements OnInit {

  form: FormGroup;

  constructor(private _router: Router, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({

    });
  }

  goNext(): void {
    this._router.navigate(['identity']);
  }

}
