import { Component, OnInit } from '@angular/core';
import { faLanguage, faChevronLeft, faChevronRight, faShareAltSquare, faDonate,faSyncAlt, faSearch, faFilter, faTrash, faCalendarAlt,faFileAlt,faPoll,faSort } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-filter-language',
  templateUrl: './menu-filter-language.component.html',
  styleUrls: ['./menu-filter-language.component.css']
})
export class MenuFilterLanguageComponent implements OnInit {

  faChevronLeft = faChevronLeft
  faFilter = faFilter
  faTrash = faTrash

  constructor(public menuService:MenuService) { }

  ngOnInit(): void {
  }

}
