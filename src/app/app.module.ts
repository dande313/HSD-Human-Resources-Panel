import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// layout components, etc
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';


// Positions Components
import { PositionsListComponent } from './components/positions-list/positions-list.component';
import { PositionsComponent } from './components/positions/positions.component';
import { AddPositionComponent } from './components/add-position/add-position.component';
import { EditPositionComponent } from './components/edit-position/edit-position.component';

// Applicant Components
import { ApplicantListComponent } from './components/applicant-list/applicant-list.component';
import { ApplicantDetailsComponent } from './components/applicant-details/applicant-details.component';
import { AddApplicantComponent } from './components/add-applicant/add-applicant.component';
import { EditApplicantComponent } from './components/edit-applicant/edit-applicant.component';

// Services
import { PositionService } from './services/position.service';
import { ApplicantService} from './services/applicant.service';

// Materials

import { MaterialModule } from '../material.module';

// Authentication
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'positions', component: PositionsListComponent},
  {path: 'positions/new', component: AddPositionComponent},
  {path: 'positions/:id', component: PositionsComponent},
  {path: 'positions/:id/edit', component: EditPositionComponent},
  {path: 'applicants', component: ApplicantListComponent},
  {path: 'applicants/new', component: AddApplicantComponent},
  {path: 'applicants/:id', component: ApplicantDetailsComponent},
  {path: 'applicants/:id/edit', component: EditApplicantComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PositionsListComponent,
    PositionsComponent,
    HomeComponent,
    AddPositionComponent,
    EditPositionComponent,
    PageNotFoundComponent,
    NavBarComponent,
    SideBarComponent,
    ApplicantListComponent,
    ApplicantDetailsComponent,
    AddApplicantComponent,
    EditApplicantComponent,
    LoginComponent
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'hsd-hr-panel'),
    AngularFireAuthModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    NgxDatatableModule
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    PositionService,
    ApplicantService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
