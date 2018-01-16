import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services/applicant.service';
import { Applicant } from '../../models/applicant';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.css']
})
export class ApplicantDetailsComponent implements OnInit {
  id: string;
  applicant: Applicant;

  constructor(
    private applicantService: ApplicantService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // get id from url
    this.id = this.route.snapshot.params['id'];
    // get applicant
    this.applicantService.getApplicant(this.id).subscribe(applicant => {
      this.applicant = applicant;
      console.log(applicant);
    });
  }

  onDeleteClick(id) {
    if (confirm('Are you sure?')) {
      console.log(id + ' will be deleted');
      this.applicantService.deleteApplicant(id);
      this.router.navigate(['/applicants']);
    }
  }

}
