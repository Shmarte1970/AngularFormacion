import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rol } from '../models/roles';


@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  getRoles(){
    return this.http.get<Rol[]>('https://jsonplaceholder.typicode.com/todos?')
  }

}

