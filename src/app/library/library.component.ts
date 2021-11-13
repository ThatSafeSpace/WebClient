import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { BackService } from '../back.service';
import { Globals } from '../entry';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  constructor(public globals: Globals, public apiService: ApiService, public backService: BackService) { }

  //variables
  library: any[];
  contentLoaded: boolean = false;

  //load and display library
  showLibrary() {
    if (this.globals.library.length == 0) {
      this.apiService.getLibrary().subscribe(
        res => {
          this.library = res;
          this.globals.library = res;
          this.contentLoaded = true;
        }
      );
    }
    else {
      this.library = this.globals.library;
      this.contentLoaded = true;
    }
  }


  ngOnInit(): void {
    this.showLibrary()
  }
}
