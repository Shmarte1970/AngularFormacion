import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleados';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleados: Empleado[] = [
    {legajo:1, nombre: 'Estrella', apellido:'Paris', sexo: 'Femenino', salario:18000},
    {legajo:2, nombre: 'Barbara', apellido:'Fruitos', sexo: 'Femenino', salario:18000},
    {legajo:3, nombre: 'Armando', apellido:'Bronca', sexo: 'Masculino', salario:18000},
    {legajo:4, nombre: 'Fernando', apellido:'Trunollosa', sexo: 'Masculino', salario:18000}
  ];

  constructor(){

  }

  ngOnInit(): void{

  }

}
