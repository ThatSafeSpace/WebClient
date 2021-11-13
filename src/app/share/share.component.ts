import { Component, OnInit } from '@angular/core';
import { faTwitter, faYoutube, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { BackService} from '../back.service'
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent{

  faTwitter = faTwitter
  faYoutube = faYoutube
  faEnvelope = faEnvelope
  faDiscord = faDiscord
  faInstagram = faInstagram

  faExternalLinkAlt = faExternalLinkAlt
  constructor(public backService:BackService, public translateService: TranslateService){}

}
