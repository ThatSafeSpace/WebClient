import { Component, OnInit } from '@angular/core';
import { BackService} from '../back.service'

@Component({
  selector: 'app-syllabus-fallacies',
  templateUrl: './syllabus-fallacies.component.html',
  styleUrls: ['./syllabus-fallacies.component.css']
})
export class SyllabusFallaciesComponent implements OnInit {

  constructor(public backService:BackService) { }

  ngOnInit(): void {
  }

}
