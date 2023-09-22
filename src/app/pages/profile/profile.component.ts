import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { PositionsData } from 'src/app/models/positionsData';
import { ResidenceLocationData } from 'src/app/models/residenceLocations';
import { DataService } from 'src/app/services/data.service';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {

  positionsDataset: PositionsData[] = [];
  locationsDataset: ResidenceLocationData[] = [];

  constructor(private dataService: DataService) {
    dataService.getEmployees.subscribe(employees => {
      this.countPositions(employees);
      this.countResidences(employees);
    })
  }

  countPositions(employees: Employee[]) {
    let desarrolladorAmnt = 0;
    let desarrolladorJrAmnt = 0;
    let contabilidadAmnt = 0;
    let disenadorAmnt = 0;
    let recursosAmnt = 0;
    employees.forEach(item => {
      switch (item.position) {
        case 'Desarrollador':
          desarrolladorAmnt++;
          break;
        case 'Contabilidad': 
          contabilidadAmnt++;
          break;
        case 'Diseñador':
          disenadorAmnt++;
          break;
        case 'Desarrollador Jr':
          desarrolladorJrAmnt++;
          break;
        case 'Recursos Humanos':
          recursosAmnt++;
          break;
      }
    });
    this.positionsDataset.push({position: 'Desarrollador', amount: desarrolladorAmnt});
    this.positionsDataset.push({position: 'Desarrollador Jr', amount: desarrolladorJrAmnt});
    this.positionsDataset.push({position: 'Diseñador', amount: disenadorAmnt});
    this.positionsDataset.push({position: 'Contabilidad', amount: contabilidadAmnt});
    this.positionsDataset.push({position: 'Recursos Humanos', amount: recursosAmnt});
  }

  countResidences(employees: Employee[]) {
    let spsAmnt = 0;
    let tegusAmnt = 0;
    let villanuevaAmnt = 0;
    let staBarbaraAmnt = 0;
    let copanAmnt = 0;
    let lempiraAmnt = 0;
    let telaAmnt = 0;
    employees.forEach(item => {
      switch (item.residenceLocation) {
        case 'San Pedro Sula':
          spsAmnt++;
          break;
        case 'Tegucigalpa': 
          villanuevaAmnt++;
          break;
        case 'Villanueva':
          staBarbaraAmnt++;
          break;
        case 'Santa Barbara':
          tegusAmnt++;
          break;
        case 'Copán':
          copanAmnt++;
          break;
        case 'Lempira':
          lempiraAmnt++;
          break;
        case 'Tela':
          telaAmnt++;
          break;
      }
    });
    this.locationsDataset.push({location: 'San Pedro Sula', amount: spsAmnt});
    this.locationsDataset.push({location: 'Tegucigalpa', amount: tegusAmnt});
    this.locationsDataset.push({location: 'Villanueva', amount: staBarbaraAmnt});
    this.locationsDataset.push({location: 'Santa Barbara', amount: villanuevaAmnt});
    this.locationsDataset.push({location: 'Copán', amount: copanAmnt});
    this.locationsDataset.push({location: "Lempira", amount: lempiraAmnt});
    this.locationsDataset.push({location: "Tela", amount: telaAmnt});
  }

}
