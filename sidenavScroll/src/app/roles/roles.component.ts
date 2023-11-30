import { Component, OnInit } from '@angular/core';
import { RolesService } from '../services/roles.service';
import { Rol } from '../models/roles';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Rol[] = [];

  constructor(public rolesService:RolesService, private toastr:ToastrService) {}

  ngOnInit(): void {

      this.rolesService.getRoles()
      .subscribe(roles =>{
        this.roles = roles;

      },
      err => console.log(err));

  
  }

  btnBorrar(){
    this.toastr.warning('Pulsastes Borrar 😒');
  }

  btnNewUsuarios(){
     this.toastr.success('Añadir un Rol 😄')
    }

  btnEditUsuario(){
    this.toastr.info('Editar Rol 😎')

  }
    

}
