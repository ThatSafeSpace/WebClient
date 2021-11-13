import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  //Timer Variable
  activateCooldownTimer:boolean = false
  
  //list data arrays
  all_entries: any[] = [];
  rated_entries: any[] = [];
  current_entry: Entry= new Entry();

  //pipe
  sortOrder=""
  sortKey=""

  //mediathek data arrays
  videos: any[] = [];
  images: any[] = [];

  //library data array
  library: any[] = [];

  //supporters data arrays
  patrons: any[] = [];
  donors: any[] = [];
  currentID: any;
  startVoting: boolean;

}

export  class  Entry {
    id: number;
    tags: string;
    phrase:  string;
    language:string;
    agreeTotal: number;
    date: string;
    hasBeenRated: boolean;
}



export  class  Statement {
    agreeN: number;
    agreeY: number;
    approved: number;
    date: string;
    death: number;
    fine: number;
    harm: number;
    id: number;
    jail: number;
    language: string;
    offendedN: number;
    offendedY: number;
    phrase: string;
    punishN: number;
    punishY: number;
    agreeTotal: number;
    tags: string;
    hasBeenRated: boolean;
}