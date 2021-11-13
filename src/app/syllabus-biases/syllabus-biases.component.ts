import { Component, OnInit } from '@angular/core';
import { BackService} from '../back.service'
@Component({
  selector: 'app-syllabus-biases',
  templateUrl: './syllabus-biases.component.html',
  styleUrls: ['./syllabus-biases.component.css']
})
export class SyllabusBiasesComponent implements OnInit {

  constructor(public backService:BackService) { }

  ngOnInit(): void {
  }

}
