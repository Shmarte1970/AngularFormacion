import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})

export class ConvertidorComponent implements OnInit {

  tengo = 'USD';
  quiero = 'EUR';
  total = 0.00;
  cantidad = 0.00;
  
  monedas: string [] = ['USD','EUR','GBP']

  constructor() { }

  ngOnInit(): void {
      
  }

  cambiarMoneda(){
    switch (this.tengo){
      case 'USD':      
        if (this.quiero === 'USD'){
          this.total = this.cantidad;
        }else if (this.quiero === 'EUR'){
          this.total = this.cantidad * 0.95;
        }else{
          this.total = this.cantidad * 0.82;
        }
        break;
      case 'EUR':
        if (this.quiero === 'USD'){
          this.total = this.cantidad * 1.05;
        }else if (this.quiero === 'EUR'){
          this.total = this.cantidad;
        }else{
          this.total = this.cantidad * 0.87;
        }  
        break;
      case 'GBP':
        if (this.quiero === 'USD'){
          this.total = this.cantidad * 1.21;
        }else if (this.quiero === 'EUR'){
          this.total = this.cantidad * 1.15;
        }else{
          this.total = this.cantidad;
        }  
        break;
      default:
     }
  }
}  
