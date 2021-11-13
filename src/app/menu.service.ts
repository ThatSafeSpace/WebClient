import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { Globals, Statement } from './entry';
import { SortByPipe } from './sort-by.pipe';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  show_menu = true;
  show_languages = false;
  options = true;
  search = false;
  filter = false;
  sort = false;
  object = {
    "start": true,

    //options parameters
    "options": false,
    "optionSelected": false,
    //add entry parameters
    "addEntry": false,

    //filter language parameters
    "filter": false,
    "filterSelected": false,
    "filterLang": false,
    "filterLanguageSelected": false,
    "filterLanguageEnglish": false,
    "filterLanguageGerman": false,
    "filterLanguageResetDisabled": true,
    "filterLanguageText": "",

    //filter amount/number parameters
    "filterNumber": false,
    "filterNumberSelected": true,
    "filterNumberValue": 10,
    "filterNumberReset": null,

    //sorting parameters
    "sort": false,
    "sortSelected": false,
    "sortByDate": false,
    "sortByLength": false,
    "sortByVotes": false,
    "sortResetDisabled": true,
    "sortDescending": null,
    //search parameters
    "searchbar": false,
    "searchbarActive": false,
    "searchbarText": "",

    "current_text": "",
    "current_tags": "",
    "current_id": 0
  }


  private searchBarActive$ = new BehaviorSubject(this.object)
  currentSearchBarActiveObject = this.searchBarActive$.asObservable()



  constructor(public apiService: ApiService, public globals: Globals) { }

  toggleOptions() {
    this.searchBarActive$.getValue().start = !this.searchBarActive$.getValue().start
    this.searchBarActive$.getValue().options = !this.searchBarActive$.getValue().options

  }

  toggleAddNewEntryMenu() {
    this.searchBarActive$.getValue().addEntry = !this.searchBarActive$.getValue().addEntry
    this.searchBarActive$.getValue().start = true
    //this.searchBarActive$.getValue().start = !this.searchBarActive$.getValue().start
  }

  toggleFilterSettingsLanguage() {
    this.searchBarActive$.getValue().filter = !this.searchBarActive$.getValue().filter
    this.searchBarActive$.getValue().filterLang = !this.searchBarActive$.getValue().filterLang
  }

  toggleFilterSettingsNumber() {
    this.searchBarActive$.getValue().filter = !this.searchBarActive$.getValue().filter
    this.searchBarActive$.getValue().filterNumber = !this.searchBarActive$.getValue().filterNumber

  }

  toggleSearchBar() {
    
    this.searchBarActive$.getValue().searchbar = !this.searchBarActive$.getValue().searchbar
    this.searchBarActive$.getValue().start = !this.searchBarActive$.getValue().start
  }

  toggleFilterLanguageOrSortSettings() {
    this.searchBarActive$.getValue().options = !this.searchBarActive$.getValue().options
    this.searchBarActive$.getValue().filter = !this.searchBarActive$.getValue().filter
  }

  toggleSortSettings() {
    this.searchBarActive$.getValue().options = !this.searchBarActive$.getValue().options
    this.searchBarActive$.getValue().sort = !this.searchBarActive$.getValue().sort
  }


  

  //
  filterLanguage(lang: string) {
    this.object.filterLanguageText = lang;
    this.filterLanguageMenuActiveFor(lang)
  }

  filterLanguageMenuActiveFor(lang: string) {
    //DETERMINE THE LANGUAGE OF THE FILTER
    switch (lang) {
      case 'english':
        console.log("english");
        this.searchBarActive$.getValue().filterLanguageEnglish = true;
        this.searchBarActive$.getValue().filterLanguageGerman = false;
        break;

      case 'german':
        console.log("german");
        this.searchBarActive$.getValue().filterLanguageEnglish = false;
        this.searchBarActive$.getValue().filterLanguageGerman = true;
        break;

      default:
        break;
    }

    //STYLE THE MENU BUTTONS ALL THE WAY THOUGHOUT THE MENU
    this.searchBarActive$.getValue().filterLanguageResetDisabled = false;
    this.searchBarActive$.getValue().filterLanguageSelected = true;
    this.searchBarActive$.getValue().filterLang = true;
    this.searchBarActive$.getValue().filterSelected = true;
    this.searchBarActive$.getValue().optionSelected = true;
  }

  filterLanguageReset() {
    this.searchBarActive$.getValue().filterLanguageResetDisabled = true;
    this.searchBarActive$.getValue().filterLanguageEnglish = false;
    this.searchBarActive$.getValue().filterLanguageGerman = false;

    this.searchBarActive$.getValue().filterLanguageSelected = false;
    if (this.searchBarActive$.getValue().filterNumberSelected) {
      this.searchBarActive$.getValue().optionSelected = false;
      this.searchBarActive$.getValue().filterSelected = false;
    }
    this.object.filterLanguageText = "";

  }

  changeNumber(int) {
    this.searchBarActive$.getValue().filterNumberValue += int
  }
  maxNumberOfEntries() {
    this.searchBarActive$.getValue().filterNumberValue = this.globals.all_entries.length
  }



  sortByDate() {
    this.searchBarActive$.getValue().sortSelected = true
    this.searchBarActive$.getValue().sortByDate = true
    this.searchBarActive$.getValue().sortByLength = false
    this.searchBarActive$.getValue().sortByVotes = false
    this.searchBarActive$.getValue().sortResetDisabled = false
    this.searchBarActive$.getValue().sortDescending = !this.searchBarActive$.getValue().sortDescending
    this.searchBarActive$.getValue().optionSelected = true;

    this.globals.sortOrder = this.searchBarActive$.getValue().sortDescending ? "desc" : "asc"
    this.globals.sortKey = "id";

  }

  sortByLength() {
    this.searchBarActive$.getValue().sortSelected = true
    this.searchBarActive$.getValue().sortByDate = false
    this.searchBarActive$.getValue().sortByLength = true
    this.searchBarActive$.getValue().sortByVotes = false
    this.searchBarActive$.getValue().sortResetDisabled = false
    this.searchBarActive$.getValue().sortDescending = !this.searchBarActive$.getValue().sortDescending
    this.searchBarActive$.getValue().optionSelected = true;

    this.globals.sortOrder = this.searchBarActive$.getValue().sortDescending ? "desc" : "asc"
    this.globals.sortKey = "phrase.length";

  }

  sortByVotes() {
    this.searchBarActive$.getValue().sortSelected = true
    this.searchBarActive$.getValue().sortByDate = false
    this.searchBarActive$.getValue().sortByLength = false
    this.searchBarActive$.getValue().sortByVotes = true
    this.searchBarActive$.getValue().sortResetDisabled = false
    this.searchBarActive$.getValue().sortDescending = !this.searchBarActive$.getValue().sortDescending
    this.searchBarActive$.getValue().optionSelected = true;

    this.globals.sortOrder = this.searchBarActive$.getValue().sortDescending ? "desc" : "asc"
    this.globals.sortKey = "agreeTotal";
  }

  sortReset() {
    this.searchBarActive$.getValue().sortSelected = false
    this.searchBarActive$.getValue().sortByDate = false
    this.searchBarActive$.getValue().sortByLength = false
    this.searchBarActive$.getValue().sortByVotes = false
    this.searchBarActive$.getValue().sortResetDisabled = true
    this.searchBarActive$.getValue().sortDescending = null

      this.searchBarActive$.getValue().optionSelected = false;
      this.searchBarActive$.getValue().filterSelected = false;
  

    this.globals.sortOrder = ""
  }

  

}