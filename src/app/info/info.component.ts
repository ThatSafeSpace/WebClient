import { Component } from '@angular/core';
import { faShareAltSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent {
  
  //icons
  faShareAltSquare = faShareAltSquare;

  //variables
  panelOpenState = false;
  checkboxValue = false;
  isCollapsed = false;
}
