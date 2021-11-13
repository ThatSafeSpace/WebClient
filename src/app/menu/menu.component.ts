import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { faLanguage, faChevronLeft, faChevronRight, faShareAltSquare, faDonate, faSyncAlt, faSearch, faFilter, faTrash, faCalendarAlt, faFileAlt, faPoll, faSort, faRandom } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  faSyncAlt = faSyncAlt
  faChevronLeft = faChevronLeft
  faSearch = faSearch
  faRandom=faRandom
  
  constructor(public apiService:ApiService, public menuService: MenuService) { }


}
