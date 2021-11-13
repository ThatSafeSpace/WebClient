import { Component, OnInit } from '@angular/core';
import { BackService } from '../back.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {

  constructor(public backService:BackService) { }


}
