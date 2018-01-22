import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services/applicant.service';
import { Applicant } from '../../models/applicant';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-applicant',
  templateUrl: './edit-applicant.component.html',
  styleUrls: ['./edit-applicant.component.css']
})
export class EditApplicantComponent implements OnInit {
  id: string;
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
    private applicantService: ApplicantService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // get applicant
    this.applicantService.getApplicant(this.id).subscribe(applicant => {
      this.applicant = applicant;
    });
  }

  onSubmit({value, valid}: {value: Applicant, valid: boolean}) {
    if (!valid) {
      this.router.navigate(['/applicants/' + this.id + '/edit']);
    } else {
      // Add new position
      this.applicantService.updateApplicant(this.id, value);
      this.router.navigate(['/applicants/' + this.id]);
    }
  }

}
