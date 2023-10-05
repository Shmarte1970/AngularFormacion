import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listaTareas: Tarea[] = []
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  agregarTarea() {  

    const tarea: Tarea ={
      nombre: this.nombreTarea,
      estado: false
    }
    this.listaTareas.push(tarea);
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void{
    this.listaTareas.splice(index, 1);
  }

  cambiarEstado(index: number, tarea: Tarea): void{
    this.listaTareas[index].estado =!this.listaTareas[index].estado;
  }

}
