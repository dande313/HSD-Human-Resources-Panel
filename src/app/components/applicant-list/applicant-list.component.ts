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
      console.log(applicants);
      this.rows = applicants;
    });
  }
}
