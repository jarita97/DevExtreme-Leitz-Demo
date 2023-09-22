import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { Appointment } from 'src/app/models/appointment';
import { Employee } from 'src/app/models/employee';
import { DataService } from 'src/app/services/data.service';

@Component({
  templateUrl: 'tasks.component.html'
})

export class TasksComponent {
  dataSource: any;
  employees!: Employee[];
  appointments: Appointment[] = [];
  currentDate = new Date();

  constructor(private dataService: DataService) {
    dataService.getEmployees.subscribe(d => this.employees = d);
    this.getBirthdays();
  }

  getBirthdays() {
    this.employees.forEach(item => {
      this.appointments.push(
        {
          title: `Cumpleaños de ${item.firstName} ${item.lastName}`,
          startDate: new Date(this.currentDate.getFullYear(), item.birthday.getMonth(), item.birthday.getDate(), 0, 0, 0),
          endDate: new Date(this.currentDate.getFullYear(), item.birthday.getMonth(), item.birthday.getDate(), 23, 59, 59),
          dayLong: true,
          recurrence: "FREQ=YEARLY", 
        }
      )
    })
  }
}
