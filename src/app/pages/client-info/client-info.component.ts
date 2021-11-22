import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {

  form: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    this.form = this._fb.group({

    });
  }

  goNext(): void {
    this._router.navigate(['address']);
  }

}
