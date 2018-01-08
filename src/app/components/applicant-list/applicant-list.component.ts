import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services/applicant.service';
import { Applicant } from '../../models/applicant';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {
  applicants: any[];

  constructor(private applicantService: ApplicantService) { }

  ngOnInit() {
    this.applicantService.getApplicants().subscribe(applicants => {
      console.log(applicants);
      console.log('Applicant data should appear');
      this.applicants = applicants;
    });
  }

}
