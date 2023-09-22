import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Employee } from 'src/app/models/employee';
import { DataService } from 'src/app/services/data.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
employees!: Employee[];
positions = ["Contabilidad", "Diseñador", "Desarrollador", "Desarrollador Jr", "Recursos Humanos"];
locations = ["San Pedro Sula", "Tegucigalpa", "Villanueva", "Santa Barbara", "Copán", "Lempira", "Tela"];

constructor(private dataService: DataService) 
{
  this.dataService.getEmployees.subscribe(employees => this.employees = employees);
}

save(event: any) {
  console.log("Saved object", event.changes[0].data);
  this.dataService.updateEmployeesList(this.employees);
}
}
