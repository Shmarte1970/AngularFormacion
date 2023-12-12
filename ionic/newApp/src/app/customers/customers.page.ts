import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DatosService} from '../services/datos.service';
import { Dato } from '../models/datos';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})


export class CustomersPage implements OnInit {

  datos: Dato[] = [];

  constructor(private router: Router, public datosService: DatosService) { }

  ngOnInit():void {
    this.datosService.getDatos()
    .subscribe(datos =>{
      console.log(datos);
      this.datos = datos;
    }
    , err => console.log(err))
  }

  goTohome(){
    this.router.navigate(['/home']);


  }

}
