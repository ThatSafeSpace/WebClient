import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faFilter, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Globals } from '../entry';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-filter-number',
  templateUrl: './menu-filter-number.component.html',
  styleUrls: ['./menu-filter-number.component.css']
})
export class MenuFilterNumberComponent implements OnInit {

  faChevronLeft = faChevronLeft
  faFilter = faFilter
  faTrash = faTrash
  
  constructor(public globals: Globals, public menuService:MenuService) { }

  ngOnInit(): void {
  }

}
