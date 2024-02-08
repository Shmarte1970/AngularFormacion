import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada= 'sport';
  paisSeleccionado = 'Cat';

  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'bussines', nombre: 'Negocios'},
    {value: 'sport', nombre: 'Deportes'},
  ];


  paises: any[] = [
    {value: 'Cat', nombre: 'Catalunya'},
    {value: 'Deu', nombre: 'Alemania'},
    {value: 'Cl', nombre: 'Chile'},
  ];

  

  constructor() {
   
   }



  ngOnInit(): void {
      
  }

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS);

  }

}
