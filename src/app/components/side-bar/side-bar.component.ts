import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatCheckboxModule,
  MatSidenavModule
} from '@angular/material';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
