import { Component, OnInit } from '@angular/core';
import { misNumeros } from 'src/app/interface/misNumeros';




const listNumeros: misNumeros[] = [
  {misNumeros: parseInt('1'), fecha: new Date() },
 

];

@Component({
  selector: 'app-list-numeros',
  templateUrl: './list-numeros.component.html',
  styleUrls: ['./list-numeros.component.css']
})


export class ListNumerosComponent implements OnInit {
  displayedColumns: string[] = ['Numero', 'Fecha Sorteo'];
  dataSource = listNumeros;

  constructor(){}

  ngOnInit(): void {

  }

}


