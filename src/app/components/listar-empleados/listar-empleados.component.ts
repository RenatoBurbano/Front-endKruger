import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  listEmpleados: Empleado[] = [];

  constructor(private _empleadoService: EmpleadoService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this._empleadoService.getEmpleados().forEach(data => {
      this.listEmpleados = data;
    }).catch(() => console.log('Error al obtener empleados'))
  }

  eliminarEmpleado(id: any){
    this._empleadoService.deleteEmpleado(id).forEach(data => {
      this.toastr.error('El empleado fue eliminado con exito', 'Empleado Eliminado');
      this.obtenerEmpleados();
    }).catch(() => console.log('Error al eliminar empleado'))
  }

  obtenerEmpleado(id: string){
    this._empleadoService.getEmpleado(id).forEach(data => {

    }).catch(() => console.log('Error al obtener empleado'))
  }
}
