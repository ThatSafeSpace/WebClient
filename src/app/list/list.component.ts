import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Globals } from "../entry";
import {
  faTimes,
  faThumbsDown,
  faThumbsUp,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { MenuService } from "../menu.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  constructor(
    private vps: ViewportScroller,
    public apiService: ApiService,
    public globals: Globals,
    public menuService: MenuService,
    private spinner: NgxSpinnerService
  ) {}
  //variables
  displayResults = [];

  //icons
  faTimes = faTimes;
  faThumbsDown = faThumbsDown;
  faThumbsUp = faThumbsUp;
  faStarHalfAlt = faStarHalfAlt;

  //trackByID
  public trackByFunction(item) {
    if (!item) return null;
    return item.id;
  }

  loadVotes(id, curObj) {
    return this.apiService.getVotesOnID(id).subscribe((arg) => {
      (curObj.agreeY = arg.agreeY),
        (curObj.agreeN = arg.agreeN),
        (curObj.offendedY = arg.offendedY),
        (curObj.offendedN = arg.offendedN),
        (curObj.punishY = arg.punishY),
        (curObj.punishN = arg.punishN),
        (curObj.fine = arg.fine),
        (curObj.jail = arg.jail),
        (curObj.harm = arg.harm),
        (curObj.death = arg.death),
        (curObj.agreeTotal = arg.agreeTotal);
    });
  }

  getVotesOnID(id, curObj) {
    console.log(curObj);
    if (curObj.hasBeenRated || !curObj.agreeY) {
      return this.loadVotes(id, curObj);
    }
  }

  showFiveMoreEntries() {
    this.menuService.object.filterNumberValue =
      +this.menuService.object.filterNumberValue + +5;
  }

  approvedEntries = [];
  //load all entries and disable rated ones
  ngOnInit() {
    if (this.globals.all_entries.length == 0) {
      this.spinner.show();
      this.apiService.getAllEntries().subscribe((arg) => {
        arg.forEach((element) => {
          if (this.globals.rated_entries.includes(element.id)) {
            element["hasBeenRated"] = true;
            this.displayResults[element.id] = true;
            this.loadVotes(element.id, element);
          } else {
            element["hasBeenRated"] = false;
          }
          this.approvedEntries.push(element);
        });

        this.globals.all_entries = this.apiService.randomise(arg);

        if (this.globals.currentID) {
          var recentEntry = this.globals.all_entries.find(
            (e) => e.id === this.globals.currentID
          );
          var recentEntryPlacement =
            this.globals.all_entries.indexOf(recentEntry);
          //remove recent entry from the set of entries
          this.globals.all_entries.splice(recentEntryPlacement, 1);
          //prepend recent entry to the set of entries
          this.globals.all_entries.unshift(recentEntry);
        }
      });
    } else {
      this.globals.all_entries.forEach((element) => {
        if (this.globals.rated_entries.includes(element.id)) {
          element["hasBeenRated"] = true;
          this.displayResults[element.id] = true;
          this.loadVotes(element.id, element);
        } else {
          element["hasBeenRated"] = false;
        }
        this.approvedEntries.push(element);
      });
    }
  }

  ngAfterViewInit() {
    var element = document.querySelector("#item-" + this.globals.currentID);
    if (element) element.scrollIntoView({ behavior: "auto", block: "center" });
  }

  onScroll() {
    this.showFiveMoreEntries();
  }
}
