import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  formStatus: string;

  constructor(public utilsService: UtilsService,
              private _router: Router,
              private _location: Location) { }

  ngOnInit(): void {
    this.formStatus = localStorage.getItem('formStatus') ?? 'initial';
  }

  goToForm(): void {
    this.utilsService.buttonState = 'hidden';
    localStorage.setItem('formStatus', 'inProgress');
    this._router.navigate(['client-form']);
  }

  goMain(): void {
    this.utilsService.buttonState = 'returnToForm';
    this._router.navigate(['clients']);
  }

  returnToForm(): void {
    this.utilsService.buttonState = 'hidden';
    this._location.back();
  }

}
