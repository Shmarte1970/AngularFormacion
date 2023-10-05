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

}
