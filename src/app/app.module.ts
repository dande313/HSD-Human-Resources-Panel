import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OpenPositionsListComponent } from './components/open-positions-list/open-positions-list.component';
import { OpenPositionsComponent } from './components/open-positions/open-positions.component';
import { HomeComponent } from './components/home/home.component';
import { AddPositionComponent } from './components/add-position/add-position.component';
import { EditPositionComponent } from './components/edit-position/edit-position.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ApplicantListComponent } from './components/applicant-list/applicant-list.component';
import { ApplicantDetailsComponent } from './components/applicant-details/applicant-details.component';

import { PositionService } from './services/position.service';
import { ApplicantsListComponent } from './components/applicants-list/applicants-list.component';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { AddApplicantComponent } from './components/add-applicant/add-applicant.component';
import { EditApplicantComponent } from './components/edit-applicant/edit-applicant.component'

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'positions', component: OpenPositionsListComponent},
  {path: 'positions/:id', component: OpenPositionsComponent},
  {path: 'positions/new', component: AddPositionComponent},
  {path: 'positions/:id/edit', component: EditPositionComponent},
  {path: 'applicants', component: ApplicantsListComponent},
  {path: 'applicants/:id', component: ApplicantsComponent},
  {path: 'applicants/new', component: AddApplicantComponent},
  {path: 'applicants/:id/edit', component: EditApplicantComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OpenPositionsListComponent,
    OpenPositionsComponent,
    HomeComponent,
    AddPositionComponent,
    EditPositionComponent,
    PageNotFoundComponent,
    NavBarComponent,
    SideBarComponent,
    ApplicantListComponent,
    ApplicantDetailsComponent,
    ApplicantsListComponent,
    ApplicantsComponent,
    AddApplicantComponent,
    EditApplicantComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'hsd-hr-panel'),
    AngularFireAuthModule
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    PositionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
