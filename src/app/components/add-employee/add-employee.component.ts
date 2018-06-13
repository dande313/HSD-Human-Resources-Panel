import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  employee: Employee = {
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
    notes: '',
    startDate: '',
  };
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Employee, valid: boolean}) {

    if (!valid) {
      this.router.navigate(['/employees/new']);
    } else {
      // Add new client
      this.employeeService.newEmployee(value);
      this.router.navigate(['/employees']);
    }
  }
}
