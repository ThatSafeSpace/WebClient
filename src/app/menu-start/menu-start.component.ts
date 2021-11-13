import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MenuService } from '../menu.service';
import { faCog, faPlus, faFileSignature, faLanguage, faChevronLeft, faChevronRight, faShareAltSquare, faDonate, faSyncAlt, faSearch, faFilter, faTrash, faCalendarAlt, faFileAlt, faPoll, faSort, faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { Globals } from '../entry';

@Component({
  selector: 'app-menu-start',
  templateUrl: './menu-start.component.html',
  styleUrls: ['./menu-start.component.css']
})
export class MenuStartComponent implements OnInit {
  faFileSignature = faFileSignature
  faFileMedical = faFileMedical
  faCog = faCog
  faChevronLeft = faChevronLeft
  faSearch = faSearch
  
  startTimer: boolean;
  constructor(public apiService: ApiService, public menuService: MenuService, public globals: Globals) { }


  handleEvent($event){
    if($event.action=="done"){
      this.globals.activateCooldownTimer = false;
    }
    console.log($event.action);
  }
  
  ngOnInit(): void {
  }

}
