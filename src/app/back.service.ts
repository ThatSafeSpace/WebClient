import { Injectable } from '@angular/core';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(public _location: Location) { }
  goBack() {
    this._location.back();
  }
}
