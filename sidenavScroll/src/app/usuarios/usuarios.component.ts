import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';
import { Dato } from '../models/datos';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  datos: Dato[] = [];

 
 
  constructor(public datosService: DatosService, private toastr:ToastrService) {

  }

  ngOnInit(): void {

    this.datosService.getDatos()
    .subscribe (datos => {

      console.log(datos);
      this.datos = datos;

    }
    , err => console.log(err))   
    
  }
  
  btnBorrar(){
    this.toastr.warning('Pulsastes Borrar 😒');
  }

  btnNewUsuarios(){
     this.toastr.success('Añadir un usuario 😄')
    }

  btnEditUsuario(){
    this.toastr.info('Editar Usuario 😎')

  }
    
}
 

