import { Component } from '@angular/core';
import { BackService } from '../back.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css']
})
export class ImpressumComponent {
  constructor(public backService: BackService) { }
}
