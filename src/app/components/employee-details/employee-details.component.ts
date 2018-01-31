import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {
    id: string;
    employee: Employee;

    constructor(
      private employeeService: EmployeeService,
      private router: Router,
      private route: ActivatedRoute
    ) { }

    ngOnInit() {
      // get id from url
      this.id = this.route.snapshot.params['id'];
      // get employee
      this.employeeService.getEmployee(this.id).subscribe(employee => {
        this.employee = employee;
        console.log(employee);
      });
    }

    onDeleteClick(id) {
      if (confirm('Are you sure?')) {
        console.log(id + ' will be deleted');
        this.employeeService.deleteEmployee(id);
        this.router.navigate(['/employees']);
      }
    }

  }
