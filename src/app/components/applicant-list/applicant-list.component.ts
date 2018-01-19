import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services/applicant.service';
import { Applicant } from '../../models/applicant';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MatTableDataSource, MatSort} from '@angular/material';


@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {
  dataSource: any;
  rows = [];
  temp = [];
  filterType: any;
  columns = [
    { name: 'Name', prop: 'name' },
    { name: 'Department', prop: 'department' },
    { name: 'Date Posted', prop: 'postDate' }
  ];

  constructor(
    private applicantService: ApplicantService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.applicantService.getApplicants().subscribe(applicants => {
      this.temp = [...applicants];
      this.rows = applicants;
      this.filterType = 'name';
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const filterType = this.filterType;
    // filter our data
    const temp = this.temp.filter(function(d) {
      switch (filterType) {
        case 'name':
          return (d.lastName + d.firstName).toLowerCase().indexOf(val) !== -1 || !val;
        case 'email':
          return (d.email).toLowerCase().indexOf(val) !== -1 || !val;
        case 'phone':
          return (d.phone).indexOf(val) !== -1 || !val;
        case 'location':
          return (d.city + d.state).toLowerCase().indexOf(val) !== -1 || !val;
        default :
          return (d.lastName + d.firstName).toLowerCase().indexOf(val) !== -1 || !val;
      }
    });
    // update the rows
    this.rows = temp;
  }

  updateFilterType(event) {
    this.filterType = event.target.value;
  }
}
