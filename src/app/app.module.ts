import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';


import { AppComponent } from './app.component';
import { OpenPositionsListComponent } from './components/open-positions-list/open-positions-list.component';
import { OpenPositionsComponent } from './components/open-positions/open-positions.component';
import { HomeComponent } from './components/home/home.component';
import { AddPositionComponent } from './components/add-position/add-position.component';
import { EditPositionComponent } from './components/edit-position/edit-position.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'positions', component: OpenPositionsListComponent},
  {path: 'positions/:id', component: OpenPositionsComponent},
  {path: 'positions/new', component: AddPositionComponent},
  {path: 'positions/:id/edit', component: EditPositionComponent},
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
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
