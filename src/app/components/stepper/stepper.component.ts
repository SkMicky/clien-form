import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  stepperInfoDone: boolean;
  stepperAddressDone: boolean;

  stepperActive: 'info' | 'address' | 'identity';

  constructor(private _router: Router) { }

  ngOnInit(): void {

    if (this._router.url.indexOf('/client-form/client') !== -1) {
      this.stepperActive = 'info';
    } else if (this._router.url.indexOf('/client-form/address') !== -1) {
      this.stepperActive = 'address';
    } else {
      this.stepperActive = 'identity';
    }

    this.stepperInfoDone = !!localStorage.getItem('clientInfo');
    this.stepperAddressDone = !!localStorage.getItem('clientAddress');
  }

}
