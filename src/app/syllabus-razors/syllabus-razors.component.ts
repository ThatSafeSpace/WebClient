import { Component, OnInit } from '@angular/core';
import { BackService} from '../back.service'

@Component({
  selector: 'app-syllabus-razors',
  templateUrl: './syllabus-razors.component.html',
  styleUrls: ['./syllabus-razors.component.css']
})
export class SyllabusRazorsComponent implements OnInit {

  constructor(public backService:BackService) { }

  ngOnInit(): void {
  }

}
