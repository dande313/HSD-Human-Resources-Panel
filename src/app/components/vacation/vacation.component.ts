import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {
  id: string;
  employee: Employee;
  vacations: any;
  remainingDays: number;
  vacationQuote: string;

  // form values
  startDate: any;
  endDate: any;
  daysTaken: any;
  yearFromStart: any;

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
      this.vacations = employee.vacations;
      let daysTaken = 0;
      employee.vacations.forEach(function(vacation) {
        daysTaken += vacation.length;
      });
      this.remainingDays = employee.vacationAllotment - daysTaken;
    });
  }

  addVacation() {
    const startDate = (this.startDate.substr(5, 9) + '-' + this.startDate.substr(0, 4));
    const endDate = (this.endDate.substr(5, 9) + '-' + this.endDate.substr(0, 4));
    const daysTaken = this.daysTaken;
    const employee = this.employee;
    const vacation = {'endDate': endDate, 'length': daysTaken, 'startDate': startDate};
    let duplicateCheck = false;
    let vacations = this.employee.vacations.slice();
    for (let i = 0; i < vacations.length; i++) {
      if (vacations[i].startDate === vacation.startDate && vacations[i].endDate === vacation.endDate) {
        console.log(vacations[i] + ' equals ' + vacation);
        console.log(`It's a duplicate!`);
        duplicateCheck = true;
        break;
      }
    }
    if (!duplicateCheck) {
      vacations = vacations.concat(vacation);
      employee.vacations = vacations;
      console.log(vacations);
      this.employeeService.updateEmployee(this.id, employee);
    }
    this.startDate = '';
    this.endDate = '';
    this.daysTaken = '';
  }

  editVacation(event) {
    event.preventDefault();
    console.log('Editing!');
  }

  deleteVacation(event, startDate, endDate) {
    event.preventDefault();
    const employee = this.employee;
    let vacations = this.employee.vacations.slice();
    vacations = vacations.filter( vacation => vacation.startDate !== startDate && vacation.endDate !== endDate);
    employee.vacations = vacations;
    this.employeeService.updateEmployee(this.id, employee);
  }

  // Prevent having more than a year vacation straight
  startDateChange(event) {
    const startDate = new Date(this.startDate.replace(/-/g, '\/'));
    this.yearFromStart = startDate.getFullYear() + 1 + '-' + (('0' + (startDate.getMonth() + 1)).slice(-2)) + '-' + (('0' + startDate.getDate()).slice(-2));
  }

  // Calculate vacation days used (not counting weekends or holidays)
  endDateChange(event) {
    const startDate = new Date(this.startDate.replace(/-/g, '\/'));
    const endDate = new Date(this.endDate.replace(/-/g, '\/'));
    this.daysTaken = this.workingDaysBetweenDates(startDate, endDate);
  }

  workingDaysBetweenDates(startDate, endDate) {

    // Validate input
    if (endDate < startDate) {
      return 0;
    }
    // Calculate days between dates
    const millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    startDate.setHours(0, 0, 0, 1);  // Start just after midnight
    endDate.setHours(23, 59, 59, 999);  // End just before midnight
    const diff = endDate - startDate;  // Milliseconds between datetime objects
    let days = Math.ceil(diff / millisecondsPerDay);

    // Subtract two weekend days for every week in between
    const weeks = Math.floor(days / 7);
    days = days - (weeks * 2);

    // Handle special cases
    const startDay = startDate.getDay();
    const endDay = endDate.getDay();

    // Remove weekend not previously removed.
    if (startDay - endDay > 1) {
      days = days - 2;
    }

    // Remove start day if span starts on Sunday but ends before Saturday
    if (startDay === 0 && endDay !== 6) {
        days = days - 1;
    }

    // Remove end day if span ends on Saturday but starts after Sunday
    if (endDay === 6 && startDay !== 0) {
        days = days - 1;
    }


    // Remove Holidays

    const christmasDay = new Date(startDate.getFullYear(), 11, 25);
    const thisNewYearsDay = new Date(startDate.getFullYear(), 0 , 1);
    const nextNewYearsDay = new Date(startDate.getFullYear() + 1, 0 , 1);
    const IndependanceDay = new Date(startDate.getFullYear(), 6, 4);
    const memorialDay = getMemorialDay(startDate.getFullYear());
    const laborDay = getLaborDay(startDate.getFullYear());
    const thanksgivingDay = getThanksgiving(startDate.getFullYear());

    function getThanksgiving(year) {
      const first = new Date(year, 10, 1);
      const firstDoW = first.getDay();
      return new Date(year, 10, (22 + (11 - firstDoW) % 7));
    }

    function getMemorialDay(year) {
      const first = new Date(year, 4, 1);
      const firstDoW = first.getDay();
      return new Date(year, 4, (30 - firstDoW));
    }

    function getLaborDay(year) {
      const first = new Date(year, 8, 1);
      const firstDoW = first.getDay();
      return new Date(year, 8, (9 - firstDoW));
    }

    // iterate through holidays
    function holidayIterate(holidayArr) {
      for (let i = 0; i < holidayArr.length; i++) {
        if (startDate <= holidayArr[i] && endDate >= holidayArr[i]) {
          days -= 1;
        }
      }
    }
    holidayIterate([christmasDay, thisNewYearsDay, nextNewYearsDay, IndependanceDay, thanksgivingDay, memorialDay, laborDay]);


    // return
    return days;
  }
}
