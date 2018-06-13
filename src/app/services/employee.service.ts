import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee';



@Injectable()
export class EmployeeService {
  employeesRef: AngularFireList<any>;
  employees: Observable<any[]>;
  employee: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.employeesRef = this.db.list('employees');
    this.employees = this.employeesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()
      }));
    });
   }

  getEmployees() {
    return this.employees;
  }

  getEmployee(id: string) {
  this.employee = this.db.object('/employees/' + id).valueChanges();
  return this.employee;
}

  newEmployee(employee: Employee) {
    this.employeesRef.push(employee);
  }

  updateEmployee(id: string, employee: Employee) {
    return this.employeesRef.update(id, employee);
  }

  deleteEmployee(id: string) {
    return this.employeesRef.remove(id);
  }

}
