import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listEstudiantes: any[] = [
    {nombre: 'Estrella Paris', estado:'Baja'},
    {nombre: 'Nuria Tarradellas', estado:'Pendiente'},
    {nombre: 'Katasan Terrasa', estado:'Suspendida'},
    {nombre: 'Barbara SantFruitos', estado:'Aprovada'},
  ]
}
