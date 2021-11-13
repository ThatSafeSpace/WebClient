import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { BackService } from '../back.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  constructor(public backService: BackService) { }

  ngOnInit(): void {
  }

}
