import { Component } from '@angular/core';
import { BackService } from '../back.service';

@Component({
  selector: 'app-dsgvo',
  templateUrl: './dsgvo.component.html',
  styleUrls: ['./dsgvo.component.css']
})
export class DsgvoComponent  {
  constructor(public backService:BackService){}
}
