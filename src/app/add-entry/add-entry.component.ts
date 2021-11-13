import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { faAt, faHashtag, faPen } from '@fortawesome/free-solid-svg-icons';

import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Globals } from '../entry';
@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  constructor(public apiService: ApiService, public menuService: MenuService, public globals: Globals) { }

  //icons
  faAt = faAt
  faHashtag = faHashtag
  faPen = faPen

  //variable
  showNewEntryForm = true
  showRules = false
  showThanks = false

  //define behavior when new entry is sent off
  register(form: NgForm) {
    let entryFormContent = {
      'language': form.controls['language'].value,
      'tags': form.controls['tags'].value,
      'text': form.controls['text'].value,
      'email': form.controls['email'].value
    }
    //console.log(entryFormContent);
    this.apiService.postNewEntry(entryFormContent).subscribe();
    this.apiService.sendNewEntryNotificationMail(entryFormContent).subscribe();
    form.resetForm();
    this.globals.activateCooldownTimer = true;
    this.showNewEntryForm = false;
    this.showThanks = true;
  }

  //switch between rules and entry form
  toggleRules() {
    this.showRules = !this.showRules;
    this.showNewEntryForm = !this.showNewEntryForm;
  }

  ngOnInit(): void {
    this.menuService.object.addEntry = true
  }
}