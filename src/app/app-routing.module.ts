import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImpressumComponent} from './impressum/impressum.component';
import {DsgvoComponent} from './dsgvo/dsgvo.component';
import {ListComponent} from './list/list.component';
import { DonateComponent } from './donate/donate.component';
import { InfoComponent } from './info/info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatementComponent } from './statement/statement.component';
import { RulesComponent } from './rules/rules.component';
import { ShareComponent } from './share/share.component';
import { SupportersComponent } from './supporters/supporters.component';
import { ThanksComponent } from './thanks/thanks.component';
import { SyllabusFallaciesComponent } from './syllabus-fallacies/syllabus-fallacies.component';
import { SyllabusBiasesComponent } from './syllabus-biases/syllabus-biases.component';
import { SyllabusRazorsComponent } from './syllabus-razors/syllabus-razors.component';
import { HubComponent } from './hub/hub.component';
import { MediathekComponent } from './mediathek/mediathek.component';
import { LibraryComponent } from './library/library.component';
import { SyllabusDisclaimerComponent } from './syllabus-disclaimer/syllabus-disclaimer.component';
import { AddEntryComponent } from './add-entry/add-entry.component';

const routes: Routes = [
  { path: 'add-entry', component: AddEntryComponent},
  { path: 'support', component: DonateComponent },
  { path: 'dsgvo', component: DsgvoComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '', component: InfoComponent },
  { path: 'list', component: ListComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'contact', component: ShareComponent },
  
  { path: 'entry/:id', component: StatementComponent},
  { path: 'list/:id', component: StatementComponent},
  { path: 'fallacies', component: SyllabusFallaciesComponent},
  { path: 'syllabus', component: SyllabusDisclaimerComponent},
  { path: 'biases', component: SyllabusBiasesComponent},
  { path: 'razors', component: SyllabusRazorsComponent},
  { path: 'hub', component: HubComponent},
  { path: 'mediathek', component: MediathekComponent},
  { path: 'library', component: LibraryComponent},


  { path: 'WallOfFame', component: SupportersComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
