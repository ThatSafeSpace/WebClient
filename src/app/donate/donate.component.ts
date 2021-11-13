import { Component } from '@angular/core';
import { faHeart, faAward, faStar, } from '@fortawesome/free-solid-svg-icons';
import {} from "@fortawesome/fontawesome-svg-core";
import { faPatreon, faPaypal, } from '@fortawesome/free-brands-svg-icons'
import { BackService } from '../back.service';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {
  constructor(public backService: BackService, public apiService: ApiService) { }

  //icons
  faHeart = faHeart
  faAward = faAward
  faPatreon = faPatreon
  faPaypal = faPaypal
  faStar = faStar
}
