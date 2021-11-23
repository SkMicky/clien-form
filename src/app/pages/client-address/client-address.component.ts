import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Country, City } from 'country-state-city';
import {ICity, ICountry} from 'country-state-city/dist/lib/interface';
// import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-client-address',
  templateUrl: './client-address.component.html',
  styleUrls: ['./client-address.component.scss']
})
export class ClientAddressComponent implements OnInit {

  form: FormGroup;
  countriesList: ICountry[];
  citiesList: ICity[];

  constructor(private _router: Router, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.countriesList = Country.getAllCountries();

    this.form = this._fb.group({
      zipCode: [null],
      country: [null, Validators.required],
      region: [null],
      city: [null, Validators.required],
      street: [null],
      building: [null]
    });

    if (localStorage.getItem('clientAddress')) {
      const clientAddressForm = JSON.parse(localStorage.getItem('clientAddress'));
      this.form.patchValue(clientAddressForm);
    }

    this.form.controls.country.valueChanges.subscribe(data => {
      console.log(data);
      this.citiesList = City.getCitiesOfCountry(data);
    });
  }

  goPrevious(): void {
    this._router.navigate(['client']);
  }

  goNext(): void {
    if (this.form.invalid) {
      // this._toastrService.error('Необходимо заполнить форму для перехода к следующему шагу');
      return;
    }

    localStorage.setItem('clientAddress', JSON.stringify(this.form.value));
    this._router.navigate(['identity']);
  }

}
