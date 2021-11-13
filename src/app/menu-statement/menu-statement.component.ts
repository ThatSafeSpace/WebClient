import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit,AfterContentChecked, ChangeDetectionStrategy } from '@angular/core';
import { faCheck, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Globals } from '../entry';
import { MenuService } from '../menu.service';
import { StatementComponent } from '../statement/statement.component';

@Component({
  selector: 'app-menu-statement',
  templateUrl: './menu-statement.component.html',
  styleUrls: ['./menu-statement.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MenuStatementComponent implements OnInit  {

  faCheck = faCheck
  faChevronLeft = faChevronLeft
  textCopied = false
  screenshotTaken = false
  
  

  
  constructor(public globals: Globals, public scp: StatementComponent) { }


  ngOnInit(): void {
  }
}
