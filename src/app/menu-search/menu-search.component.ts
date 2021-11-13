import { Component, OnInit, Injectable, Input } from '@angular/core';
import { faLanguage, faChevronLeft, faChevronRight, faShareAltSquare, faDonate,faSyncAlt, faSearch, faFilter, faTrash, faCalendarAlt,faFileAlt,faPoll,faSort, faWindowClose, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Globals } from '../entry';
import { MenuService } from '../menu.service';
import { SearchbarInterface } from '../menu';
import { library } from '@fortawesome/fontawesome-svg-core';

@Injectable()
@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.css']
})
export class MenuSearchComponent {
  faChevronLeft = faChevronLeft
  faSearch = faSearch
  faTimes=faTimes
  menuObject:any

  constructor( public menuService:MenuService) { }
  
  ngOnInit(){
    this.menuService.currentSearchBarActiveObject.subscribe(
      serviceData => this.menuObject = serviceData
    )
  }
  

}
