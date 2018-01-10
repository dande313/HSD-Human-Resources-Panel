import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services/applicant.service';
import { Applicant } from '../../models/applicant';
import {MatTableDataSource, MatSort} from '@angular/material';


@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {
  dataSource: any;
  displayedColumns = ['name', 'email', 'phone', 'details'];

  constructor(private applicantService: ApplicantService) { }

  ngOnInit() {
    this.applicantService.getApplicants().subscribe(applicants => {
      console.log(applicants);
      this.dataSource = new MatTableDataSource<Applicant>(applicants);
    });
  }

}
