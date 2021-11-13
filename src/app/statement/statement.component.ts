import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../api.service';
import { Statement } from '../entry';
import { BackService } from '../back.service';
import { Location } from '@angular/common';
import { Globals } from '../entry'
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import domtoimage from 'dom-to-image-more';
import { Clipboard } from '@angular/cdk/clipboard';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class StatementComponent extends BackService implements OnInit {
  faChevronLeft = faChevronLeft
  textCopied = false
  constructor(private clipboard: Clipboard, public router: Router, public globals: Globals, private apiService: ApiService, private route: ActivatedRoute, location: Location, public backService: BackService) {
    super(location);
  }

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;


  statement: Statement;
  id: number;

  statementLoaded: Promise<boolean>;
  showAgreeForm = true;
  showOffendedForm = false;
  showPunishForm = false;
  showPunishmentForm = false;
  showResults = false;

  voteForPunishment = false;


  //get the route parameter of ID
  sub = this.route.params.subscribe(params => {
    this.id = +params['id']
  });



  async takeScreenshot(id) {
    const scale = 2
    const node = document.getElementById("screenshot")

    const style = {
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left',
      width: node.offsetWidth + "px",
      height: node.offsetHeight + "px",
      background: "linear-gradient(180deg, rgba(34, 34, 59, 1) 0%, rgba(74, 78, 105, 1) 100%)"
    }

    const param = {
      height: node.offsetHeight * scale,
      width: node.offsetWidth * scale,
      quality: 1,
      style
    }

    domtoimage.toJpeg(node, param).then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'ThatSafeSpace' + id + '.jpeg';
      link.href = dataUrl;
      link.click();
    })


  }







  submit(form) {
    this.statement.hasBeenRated = true

    //Check if index exists in array
    if(!this.globals.rated_entries.includes(this.id)){
      this.globals.rated_entries.push(this.id)
    }
    

    
    let voteFormContent = {
      'id': this.id,
      'vote': form.controls['vote'].value
    }

    if (voteFormContent.vote == 'punishY') {
      this.voteForPunishment = true
    }

    this.apiService.putVoteOnID(voteFormContent).subscribe()
    this.loadVotes(this.id, this.statement)


  }

  loadVotes(id, curObj) {
    return this.apiService.getVotesOnID(id).subscribe(arg => {
      curObj.agreeY = arg.agreeY,
        curObj.agreeN = arg.agreeN,
        curObj.offendedY = arg.offendedY,
        curObj.offendedN = arg.offendedN,
        curObj.punishY = arg.punishY,
        curObj.punishN = arg.punishN,
        curObj.fine = arg.fine,
        curObj.jail = arg.jail,
        curObj.harm = arg.harm,
        curObj.death = arg.death,
        curObj.agreeTotal = arg.agreeTotal
    });
  }


  copyText() {

    if (this.globals.current_entry.phrase != undefined) {
      var content =
        `Text:
${this.globals.current_entry.phrase}

Link:
https://ThatSafeSpace.net/entry/${this.globals.current_entry.id}`

if(this.globals.current_entry.tags!=""){
  content +=
`

Tags:
${this.globals.current_entry.tags}`
}


      this.clipboard.copy(content);
    }
  }



  ngOnInit() {
    if (this.globals.all_entries.length == 0) {
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']
        this.globals.currentID = +params['id']
        this.apiService.getSpecificEntry(this.id).subscribe(
          (statement) => {
            this.statement = statement
            this.globals.current_entry = statement
            this.statement['hasBeenRated'] = false

            this.statementLoaded = Promise.resolve(true); // Setting the Promise as resolved after I have the needed data
          },
          (err) => {
            console.log(err)
          }
        )
      });
    }
    else {
      this.statement = this.globals.all_entries.find(o => o.id === this.id);
      this.globals.currentID = this.statement.id
      this.globals.current_entry = this.statement

      this.statementLoaded = Promise.resolve(true);
    }
  }


}
