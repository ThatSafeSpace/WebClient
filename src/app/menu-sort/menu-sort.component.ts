import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { faLanguage, faChevronLeft, faChevronRight, faShareAltSquare, faDonate,faSyncAlt, faSearch, faFilter, faTrash, faCalendarAlt,faFileAlt,faPoll,faSort } from '@fortawesome/free-solid-svg-icons';
import { Globals } from '../entry';


@Component({
  selector: 'app-menu-sort',
  templateUrl: './menu-sort.component.html',
  styleUrls: ['./menu-sort.component.css']
})
export class MenuSortComponent implements OnInit {
  faChevronLeft = faChevronLeft
  faCalendarAlt = faCalendarAlt
  faFileAlt = faFileAlt
  faPoll = faPoll
  faSort = faSort
  faTrash = faTrash
  
  mobile: boolean;
  
  constructor(public globals:Globals, public menuService:MenuService) { }

  ngOnInit(){
    if (window.screen.width < 360) { // 768px portrait
      this.mobile = true;
    }
    }

}
