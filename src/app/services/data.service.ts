import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private today: Date = new Date();

  private employees: BehaviorSubject<Employee[]> = new BehaviorSubject([
    {id: "1", firstName: "Juan", lastName: "García", birthday: new Date("1970/01/10"),position: "Diseñador", residenceLocation: "San Pedro Sula", hireDate: new Date("1995/05/10")},
    {id: "2", firstName: "María", lastName: "Martínez", birthday: new Date("1995/12/05"), position: "Recursos Humanos", residenceLocation: "San Pedro Sula", hireDate: new Date("2019/01/03")},
    {id: "3", firstName: "Carlos", lastName: "Hernandez", birthday: new Date("1984/02/05"), position: "Gerente", residenceLocation: "San Pedro Sula", hireDate: new Date("2005/04/01")},
    {id: "4", firstName: "Andrea", lastName: "Perez", birthday: new Date("1995/01/06"), position: "Gerente", residenceLocation: "Tegucigalpa", hireDate: new Date("2020/02/21")},
    {id: "5", firstName: "José", lastName: "García", birthday: new Date("1992/05/04"), position: "Desarrollador", residenceLocation: "Villanueva", hireDate: new Date("2010/03/09")},
    {id: "6", firstName: "Marcos", lastName: "Reyes", birthday: new Date("1997/05/03"), position: "Diseñador", residenceLocation: "Santa Barbara", hireDate: new Date("2021/12/10")},
    {id: "7", firstName: "Ana", lastName: "Rodríguez", birthday: new Date("1996/05/08"), position: "Desarrollador", residenceLocation: "Villanueva", hireDate: new Date("2019/01/12")},
    {id: "8", firstName: "Jennifer", lastName: "Suazo", birthday: new Date("1989/10/12"), position: "Recursos Humanos", residenceLocation: "Tegucigalpa", hireDate: new Date("2009/11/03")},
    {id: "9", firstName: "Andrea", lastName: "Martínez", birthday: new Date("1990/03/12"), position: "Contabilidad", residenceLocation: "Santa Barbara", hireDate: new Date("2010/09/25")},
    {id: "10", firstName: "Juan", lastName: "Fernandez", birthday: new Date("2000/07/11"), position: "Desarrollador Jr", residenceLocation: "San Pedro Sula", hireDate: new Date("2022/07/19")},
  ])

  getEmployees = this.employees.asObservable();

  addEmployee(employee: Employee) {
    const currentValue = this.employees.value;
    const updatedValue = [...currentValue, employee];
    this.employees.next(updatedValue);
  }

  updateEmployeesList(employees: Employee[]) {
    this.employees.next(employees);
  }

  constructor() { }
}
