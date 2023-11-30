import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Dato } from '../models/datos';

@Injectable({
  providedIn: 'root'
})

export class DatosService {

  constructor(private http: HttpClient) { }

  getDatos(){
    return this.http.get<Dato[]>('https://jsonplaceholder.typicode.com/users?_limit=8');
  }
}
