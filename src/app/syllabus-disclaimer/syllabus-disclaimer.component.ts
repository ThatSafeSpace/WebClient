import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { BackService } from '../back.service';

@Component({
  selector: 'app-syllabus-disclaimer',
  templateUrl: './syllabus-disclaimer.component.html',
  styleUrls: ['./syllabus-disclaimer.component.css']
})
export class SyllabusDisclaimerComponent implements OnInit {

  faChevronLeft=faChevronLeft
  faExternalLinkAlt=faExternalLinkAlt
  constructor(public backService: BackService) { }

  ngOnInit(): void {
  }

}
