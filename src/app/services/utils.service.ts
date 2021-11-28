import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  clientDocumentFile: BehaviorSubject<File> = new BehaviorSubject<File>(null);

  constructor() { }
}
