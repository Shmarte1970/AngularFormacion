import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';
import { Dato } from '../models/datos';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  datos: Dato[] = [];
 
  constructor(public datosService: DatosService) {

  }

  ngOnInit(): void {

    this.datosService.getDatos()
    .subscribe (datos => {

      console.log(datos);
      this.datos = datos;

    }
    , err => console.log(err))

   
    
  }

}
