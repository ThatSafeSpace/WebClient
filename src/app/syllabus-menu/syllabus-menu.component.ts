import { Component, OnInit } from '@angular/core';
import { faHome, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { BackService } from '../back.service';

@Component({
  selector: 'app-syllabus-menu',
  templateUrl: './syllabus-menu.component.html',
  styleUrls: ['./syllabus-menu.component.css']
})
export class SyllabusMenuComponent implements OnInit {

  faChevronLeft = faChevronLeft
  constructor(public backService: BackService) { }

  ngOnInit(): void {
  }

}
