import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {

  form: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router, private _toastrService: ToastrService) { }

  ngOnInit(): void {

    this.form = this._fb.group({
      lastName: [null, Validators.required],
      name: [null, Validators.required],
      middleName: [null],
      birthDate: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      gender: [null],
      clientGroup: [null, Validators.required],
      coordinator: [null, Validators.required],
      isSendSms: [false]
    });

    if (localStorage.getItem('clientInfo')) {
      const clientInfoForm = JSON.parse(localStorage.getItem('clientInfo'));
      this.form.patchValue(clientInfoForm);
    }
  }

  goNext(): void {
    if (this.form.invalid) {
      this._toastrService.error('Необходимо заполнить форму для перехода к следующему шагу');
      return;
    }

    localStorage.setItem('clientInfo', JSON.stringify(this.form.value));
    this._router.navigate(['address']);
  }

}
