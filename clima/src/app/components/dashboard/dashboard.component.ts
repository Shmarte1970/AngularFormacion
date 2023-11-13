import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlImagen = "https://cdn-icons-png.flaticon.com/512/1116/1116453.png";
  ciudad: string;

  constructor(){
    this.ciudad='';


  }

  ngOnInit(): void {
    
    }

}
