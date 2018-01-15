import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services/applicant.service';
import { Applicant } from '../../models/applicant';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-applicant',
  templateUrl: './add-applicant.component.html',
  styleUrls: ['./add-applicant.component.css']
})
export class AddApplicantComponent implements OnInit {

  applicant: Applicant = {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    addressLineOne: '',
    addressLineTwo: '',
    city: '',
    state: '',
    zipCode: null,
    monthsExp: null,
    notes: '',
    registrationDate: ''
  };
  constructor(
    private router: Router,
    private applicantService: ApplicantService
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Applicant, valid: boolean}) {

    if (!valid) {
      this.router.navigate(['/applicants/new']);
    } else {
      // Add new client
      this.applicantService.newApplicant(value);
      this.router.navigate(['/applicants']);
    }
  }
}
