import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {

  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto: string;


  ngOnInit(): void {

  }


  constructor(private _presupuestoService: PresupuestoService){
    this.nombreGasto='';
    this.cantidad = 0;
    this.formularioIncorrecto=false;
    this.textIncorrecto ='';
  }

  agregarGasto(){

    if(this.cantidad > this._presupuestoService.restante ) {
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Te falta pasta';
      return;
    }

    if(this.nombreGasto === '' || this.cantidad <=0){
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Nombre del gtos o cantidad incorrecta';
    }else{

      // Creamos el Objeto 

      const GASTO = {
        nombre:this.nombreGasto,
        cantidad: this.cantidad
      }

      // Envio del Objeto a los suscriptores via subjet
      this._presupuestoService.agregarGasto(GASTO);


      // Resetemaos formulario

      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }

 
}
