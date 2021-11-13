import { Injectable, Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entry, Statement, Globals } from './entry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  

  searchText: string;
  filter: boolean;
  sort: boolean;
  search: boolean;
  search_select: boolean;
  filter_ger: boolean;
  filter_en: boolean;
  filter_select: boolean;
  reverse: boolean;
  disableBtn: boolean = true;
  constructor(public httpClient: HttpClient, public globals: Globals) { }

  clearSearchBar() {
    console.log("searchbar clear");
    this.searchText = ""
  }

  //reloading the list of Entries
  shuffleEntries() {
      this.globals.all_entries = this.randomise(this.globals.all_entries);
    }




  randomise(array){
    for (let index = array.length - 1; index > 0; index--) {
      const newIndex = Math.floor(Math.random() * (index + 1));
      [array[index], array[newIndex]] = [array[newIndex], array[index]];
    }
  
    return array;
  }


  PHP_API_SERVER = "https://thatsafespace.net";
  
  ////          ENTRIES API
  getAllEntries(): Observable<Statement[]> {
    return this.randomise(this.httpClient.get<Statement[]>(`${this.PHP_API_SERVER}/backend/api/getAllEntries.php`));
  }

  getVotesOnID(id): Observable<Statement> {
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}/backend/api/getVotesOnID.php`, id,
      { responseType: 'json' });
  }

  getSpecificEntry(id): Observable<Statement> {
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}/backend/api/specificPhrase.php`, id,
      { responseType: 'json' });
  }

  postNewEntry(entry): Observable<any> {
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}/backend/api/postNewEntry.php`, JSON.stringify(entry));
  }

  putVoteOnID(payload): Observable<any> {
    return this.httpClient.put<any>(`${this.PHP_API_SERVER}/backend/api/putVoteOnID.php`, JSON.stringify(payload));
  }

  sendNewEntryNotificationMail(entry): Observable<any> {
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}/backend/api/sendNewEntryNotificationMail.php`, JSON.stringify(entry));
  }



  ////          MEDIATHEK API
  getAllVideos(): Observable<any> {
    return this.httpClient.get<any>(`${this.PHP_API_SERVER}/backend/api/getAllVideos.php`);
  }

  getAllImages(): Observable<any> {
    return this.httpClient.get<any>(`${this.PHP_API_SERVER}/backend/api/getAllImages.php`);
  }


  ////          LIBRARY API
  getLibrary(): Observable<any> {
    return this.httpClient.get<any>(`${this.PHP_API_SERVER}/backend/api/getLibrary.php`);
  }



  //                SUPPORTER API
  getPatrons(): Observable<any> {
    return this.httpClient.get<any>(`${this.PHP_API_SERVER}/backend/api/getPatrons.php`, { responseType: 'json' });
  }

  getDonors(): Observable<any> {
    return this.httpClient.get<any>(`${this.PHP_API_SERVER}/backend/api/getDonors.php`, { responseType: 'json' });
  }

}
