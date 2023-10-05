import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listaTareas: Tarea[] = []



  ngOnInit(): void {

  }

}
