import { Component, OnInit } from '@angular/core';
import { faHeart, faAward, faStar, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPatreon, faPaypal } from '@fortawesome/free-brands-svg-icons'
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../api.service';
import { BackService } from '../back.service';
import { Globals } from '../entry';

@Component({
  selector: 'app-supporters',
  templateUrl: './supporters.component.html',
  styleUrls: ['./supporters.component.css']
})
export class SupportersComponent implements OnInit {
  
  constructor(public globals: Globals, public apiService: ApiService, public translateService: TranslateService, public backService: BackService) { }

  faHeart = faHeart
  faAward = faAward
  faPatreon = faPatreon
  faPaypal = faPaypal
  faStar = faStar
  faCoffee = faCoffee

  status: boolean = false;
  supporters: any;
  contentLoaded: boolean;

  public showPatrons() {
    if(this.globals.patrons.length==0){
      this.apiService.getPatrons().subscribe(
        res => {
          this.supporters = res;
          this.status = true;
          this.contentLoaded = true;
          this.globals.patrons = res;
        },
        error => { console.log(error); }
      );
    }
    else{
      this.supporters = this.globals.patrons;
      this.status = true;
      this.contentLoaded = true;
    }
  }

  public showDonors() {
    if(this.globals.donors.length==0){
    this.apiService.getDonors().subscribe(
      res => {
        this.supporters = res;
        this.status = false;
        this.globals.donors = res;
      },
      error => { console.log(error); }
    );
    }
    else{
      this.supporters = this.globals.donors;
      this.status = false;
      this.contentLoaded = true;
    }
  }

  ngOnInit() {
    this.showPatrons()
  }
}
