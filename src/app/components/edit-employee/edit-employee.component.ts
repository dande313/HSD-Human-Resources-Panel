import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id: string;
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
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // get employee
    this.employeeService.getEmployee(this.id).subscribe(employee => {
      this.employee = employee;
    });
  }

  onSubmit({value, valid}: {value: Employee, valid: boolean}) {
    if (!valid) {
      this.router.navigate(['/employees/' + this.id + '/edit']);
    } else {
      // Add new position
      this.employeeService.updateEmployee(this.id, value);
      this.router.navigate(['/employees/' + this.id]);
    }
  }

}
