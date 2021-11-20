import { Component, Input, OnInit } from '@angular/core';
import { IClient } from '../../shared/models/client.model';
import { generateRandomColor } from '../../shared/helpers/random-color-generator';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() client: IClient;

  color: string;

  constructor() { }

  ngOnInit(): void {
    this.color = generateRandomColor();
  }

}
