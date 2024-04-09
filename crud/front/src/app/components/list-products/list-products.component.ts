import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Products [] = [
    {name:'Coca Cola', description: 'Soda Cola', price:80.90, stock:200 },
    {name:'Alitas de Pollo', description: 'Alitas de Pollo', price:10.20, stock:150},
    {name:'Cava Don Rios', description: 'Cava Don Rios', price:2.99, stock:75},
    {name:'Pipas Gigantes Saladas', description: 'Pipas Gigantes Saladas', price:2.50, stock:500}

  ]

  constructor() {}

  ngOnInit(): void {
      
  }

}
