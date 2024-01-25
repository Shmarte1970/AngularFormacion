import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'bussines', nombre: 'Negocios'},
    {value: 'sport', nombre: 'Deportes'},
  ];


  paises: any[] = [
    {value: 'Cat', nombre: 'Catalunya'},
    {value: 'Deu', nombre: 'Argentina'},
    {value: 'Cl', nombre: 'Chile'},
  ];

  constructor() {
   
   }

  ngOnInit(): void {
      
  }

}
