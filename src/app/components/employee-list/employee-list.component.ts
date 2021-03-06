import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
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
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.temp = [...employees];
      this.rows = employees;
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

