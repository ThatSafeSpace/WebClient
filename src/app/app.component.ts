//imports for Component and Router
import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
//importing services for API, Translation and Menu
import { ApiService } from './api.service';
import { MenuService } from './menu.service';
import { TranslateService } from '@ngx-translate/core';

//imports for icons
import { faLanguage, faShareAltSquare, faDonate, faChevronLeft, faAward } from '@fortawesome/free-solid-svg-icons';
import { Globals } from './entry';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import $ from 'jquery'
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class AppComponent implements OnInit{
  //relevant icons
  faLanguage = faLanguage;
  faShareAltSquare = faShareAltSquare;
  faDonate = faDonate;
  faChevronLeft = faChevronLeft;
  faAward = faAward;

  //menuObject: little debug variable 
  menuObject: any
  currentID: any;
  id: number;

  isStatementRoute(value: string){
    if(/^\/list(\/)[0-9]*/.test(value)) return true
  }
  
  ngOnInit(){

    

    this.titleService.setTitle('ThatSafeSpace²: Offend Yourself');
    this.metaService.addTags([
      {name: 'theme-color', content:'#22223B'},
      {name: 'keywords', content:'ThatSafeSpace, Free Speech, Censorship'},
      {name: 'description', content:'ThatSafeSpace²: offend yourself'},
      {name: 'robots', content:'index, follow'}
    ]);
  }

  constructor(public globals: Globals, private route: ActivatedRoute, @Inject(DOCUMENT) document, public menuService: MenuService, public apiService: ApiService,
    public translateService: TranslateService, public router: Router, public location: Location,
    private titleService: Title, private metaService: Meta) {


    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('en');

    //subscribes to Menu Service and listenes to changes
    menuService.currentSearchBarActiveObject.subscribe(
      serviceData => this.menuObject = serviceData
    )



    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;


    var checkScroll = function () {

      /*
      ** Find the direction of scroll
      ** 0 - initial, 1 - up, 2 - down
      */

      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) {
        //scrolled up
        if (prevScroll == 0) {
          direction = 1;
        }
        else {
          direction = 2;
        }
      }
      else if (curScroll < prevScroll) {
        //scrolled down
        direction = 1;
      }

      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }

      prevScroll = curScroll;
    };

    var toggleHeader = function (direction, curScroll) {
      if (direction === 2 && curScroll > 50) {
        //replace 52 with the height of your header in px
        $('#site-header').addClass('scroll-down').removeClass('scroll-up');
        prevDirection = direction;
      }
      else if (direction === 1) {
        $('#site-header').removeClass('scroll-down').addClass('scroll-up');
        prevDirection = direction;
      }
    };

    window.addEventListener('scroll', checkScroll);


  }



  //change Language Settings
  languageSelection = false;
  showUpperLanguageMenu = true;
  toggleLanguageSettings() {
    this.languageSelection = !this.languageSelection
    this.showUpperLanguageMenu = !this.showUpperLanguageMenu
  };


}