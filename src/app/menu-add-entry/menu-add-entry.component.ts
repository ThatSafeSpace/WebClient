import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-add-entry',
  templateUrl: './menu-add-entry.component.html',
  styleUrls: ['./menu-add-entry.component.css']
})
export class MenuAddEntryComponent implements OnInit {

  constructor(public menuService:MenuService) { }

  ngOnInit(): void {
  }

}
