import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppComponent } from './app.component';
import { BackService } from '../app/back.service';
import { ApiService } from './api.service';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';


// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ImpressumComponent } from './impressum/impressum.component';
import { DsgvoComponent } from './dsgvo/dsgvo.component';
import { ListComponent } from './list/list.component';
import { DonateComponent } from './donate/donate.component';
import { InfoComponent } from './info/info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatementComponent } from './statement/statement.component';
import { ThanksComponent } from './thanks/thanks.component';
import { RulesComponent } from './rules/rules.component';
import { ShareComponent } from './share/share.component';
import { SupportersComponent } from './supporters/supporters.component';
import {ClipboardModule} from '@angular/cdk/clipboard';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { Globals } from './entry';
import { MenuSearchComponent } from './menu-search/menu-search.component';
import { MenuFilterComponent } from './menu-filter/menu-filter.component';
import { MenuSortComponent } from './menu-sort/menu-sort.component';
import { MenuComponent } from './menu/menu.component';
import { MenuStartComponent } from './menu-start/menu-start.component';
import { MenuFilterLanguageComponent } from './menu-filter-language/menu-filter-language.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { MenuAddEntryComponent } from './menu-add-entry/menu-add-entry.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { SyllabusMenuComponent } from './syllabus-menu/syllabus-menu.component';
import { SyllabusFallaciesComponent } from './syllabus-fallacies/syllabus-fallacies.component';
import { SyllabusBiasesComponent } from './syllabus-biases/syllabus-biases.component';
import { SyllabusRazorsComponent } from './syllabus-razors/syllabus-razors.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MediathekComponent } from './mediathek/mediathek.component';
import { HubComponent } from './hub/hub.component';
import { LibraryComponent } from './library/library.component';
import { SyllabusDisclaimerComponent } from './syllabus-disclaimer/syllabus-disclaimer.component';

import { CountdownModule } from 'ngx-countdown';
import { NgxSpinnerModule } from "ngx-spinner";
import { SortByPipe } from './sort-by.pipe';

import { MenuFilterNumberComponent } from './menu-filter-number/menu-filter-number.component';
import { MenuStatementComponent } from './menu-statement/menu-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
    DsgvoComponent,
    ListComponent,
    DonateComponent,
    InfoComponent,
    PageNotFoundComponent,
    StatementComponent,
    ThanksComponent,
    RulesComponent,
    ShareComponent,
    SupportersComponent,
    MenuSearchComponent,
    MenuFilterComponent,
    MenuSortComponent,
    MenuComponent,
    MenuStartComponent,
    MenuFilterLanguageComponent,
    AddEntryComponent,
    MenuAddEntryComponent,
    SyllabusMenuComponent,
    SyllabusFallaciesComponent,
    SyllabusBiasesComponent,
    SyllabusRazorsComponent,
    MediathekComponent,
    HubComponent,
    LibraryComponent,
    SyllabusDisclaimerComponent,
    SortByPipe,
    MenuFilterNumberComponent,
    MenuStatementComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    // ngx-translate and the loader module
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatTabsModule,
    MatStepperModule,
    MatInputModule,
    MatRadioModule,
    MatButtonToggleModule,
    ClipboardModule,
    MatSnackBarModule,
    VirtualScrollerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => { return new TranslateHttpLoader(http, "./assets/i18n/", ".json"); },
        deps: [HttpClient]
      },
      isolate: true
    }),
    BrowserAnimationsModule,
    FontAwesomeModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    CountdownModule,
    NgxSpinnerModule,
    ScrollingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [BackService, ApiService, Globals, ListComponent, MenuSearchComponent,StatementComponent, MenuStatementComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private apiService: ApiService) { }
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

