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
import { HttpModule } from '@angular/http';

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

// Employee Components
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { AddVacationComponent } from './components/add-vacation/add-vacation.component';

// Services
import { PositionService } from './services/position.service';
import { ApplicantService} from './services/applicant.service';
import { EmployeeService } from './services/employee.service';
import { WeatherService} from './components/home/services/weather.service';
import { TodoService } from './components/home/services/todo.service';

// Materials

import { MaterialModule } from '../material.module';

// Authentication
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

// Home Page Components
import { WeatherComponent } from './components/home/weather/weather.component';
import { DailyQuoteComponent } from './components/home/daily-quote/daily-quote.component';
import { ToDoListComponent } from './components/home/to-do-list/to-do-list.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'applicants', component: ApplicantListComponent, canActivate: [AuthGuard]},
  {path: 'applicants/new', component: AddApplicantComponent, canActivate: [AuthGuard]},
  {path: 'applicants/:id', component: ApplicantDetailsComponent, canActivate: [AuthGuard]},
  {path: 'applicants/:id/edit', component: EditApplicantComponent, canActivate: [AuthGuard]},
  {path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard]},
  {path: 'employees/new', component: AddEmployeeComponent, canActivate: [AuthGuard]},
  {path: 'employees/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuard]},
  {path: 'employees/:id/edit', component: EditEmployeeComponent, canActivate: [AuthGuard]},
  {path: 'employees/:id/vacation', component: VacationComponent, canActivate: [AuthGuard]},
  {path: 'employees/:id/vacation/new', component: AddVacationComponent, canActivate: [AuthGuard]},
  {path: 'positions', component: PositionsListComponent, canActivate: [AuthGuard]},
  {path: 'positions/new', component: AddPositionComponent, canActivate: [AuthGuard]},
  {path: 'positions/:id', component: PositionsComponent, canActivate: [AuthGuard]},
  {path: 'positions/:id/edit', component: EditPositionComponent, canActivate: [AuthGuard]},
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
    LoginComponent,
    WeatherComponent,
    DailyQuoteComponent,
    ToDoListComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    VacationComponent,
    AddVacationComponent
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
    NgxDatatableModule,
    HttpModule
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    PositionService,
    ApplicantService,
    EmployeeService,
    AuthService,
    WeatherService,
    TodoService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
