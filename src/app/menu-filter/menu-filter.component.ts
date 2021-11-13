import { Component, OnInit } from '@angular/core';
import { faLanguage, faChevronLeft, faChevronRight, faShareAltSquare, faDonate,faSyncAlt, faSearch, faFilter, faTrash, faCalendarAlt,faFileAlt,faPoll,faSort } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-filter',
  templateUrl: './menu-filter.component.html',
  styleUrls: ['./menu-filter.component.css']
})
export class MenuFilterComponent {

  faChevronLeft = faChevronLeft
  faFilter = faFilter
  faTrash = faTrash

  constructor(public menuService:MenuService) { }

}
