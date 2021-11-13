import { Component, OnInit } from '@angular/core';
import { BackService } from '../back.service';
import { ApiService } from '../api.service';
import { faChevronLeft, faFilm, faImage } from '@fortawesome/free-solid-svg-icons';
import { Globals } from '../entry';



@Component({
  selector: 'app-mediathek',
  templateUrl: './mediathek.component.html',
  styleUrls: ['./mediathek.component.css']
})


export class MediathekComponent implements OnInit {

  //icons
  faFilm = faFilm
  faImage = faImage
  faChevronLeft = faChevronLeft

  //variables
  mediathek: any;
  contentLoaded: boolean;
  status: boolean = false;

  constructor(public globals: Globals, public apiService: ApiService, public backService: BackService) { }

  showVideos() {
    if (this.globals.videos.length == 0) {
      this.apiService.getAllVideos().subscribe(
        res => {
          this.mediathek = res;
          this.globals.videos = res;
        },
        error => {
          console.log(error);
        }
      );
    }
    else {
      this.mediathek = this.globals.videos;
    }
    this.status = true;
    this.contentLoaded = true;
  }

  showImages() {
    if (this.globals.images.length == 0) {
      this.apiService.getAllImages().subscribe(
        res => {
          this.mediathek = res;
          this.globals.images = res;
        },
        error => {
          console.log(error);
        }
      );
    }
    else {
      this.mediathek = this.globals.images;
    }
    this.status = false;
  }

  ngOnInit(): void {
    this.showVideos();
  }
}
