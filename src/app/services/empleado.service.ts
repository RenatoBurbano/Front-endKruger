import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  url = 'http://localhost:4000/api/empleados/';

  constructor(private http: HttpClient) { }

  loginUsuario(usuario: Usuario): Observable<any> {
    return this.http.post("http://localhost:4000/api/empleados/login", usuario);
  }

  getEmpleados(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteEmpleado(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  addEmpelado(empleado: Empleado): Observable<any> {
    return this.http.post(this.url, empleado);
  }

  getEmpleado(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editEmpleado(id: string, empleado: Empleado): Observable<any> {
    return this.http.put(this.url + id, empleado);
  }
}
