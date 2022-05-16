import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  empleadoForm: FormGroup;
  titulo = 'Crear Empleado'
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _empleadoService: EmpleadoService,
              private aRouter: ActivatedRoute) {
    this.empleadoForm = this.fb.group({
      cedula: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar()
  }

  crearEmpleado(){

    const EMPLEADO: Empleado = {
      cedula : this.empleadoForm.get('cedula')?.value,
      nombres : this.empleadoForm.get('nombres')?.value,
      apellidos : this.empleadoForm.get('apellidos')?.value,
      email: this.empleadoForm.get('email')?.value,
    }

    if(this.id != null) {
      this._empleadoService.editEmpleado(this.id, EMPLEADO).forEach(data => {
        this.toastr.info('El empleado se ha actualizado con exito', 'Empleado Actualizaco');
        this.router.navigate(['/listar-empleados']);
      }).catch(() => {
        console.log('Error al ingresar un nuevo empleado');
      })
    }else{
        this._empleadoService.addEmpelado(EMPLEADO).forEach(data => {
        this.toastr.success('El nuevo empleado se ha registrado con exito', 'Empleado Agregado');
        this.router.navigate(['/listar-empleados']);
      }).catch(() => {
        console.log('Error al ingresar un nuevo empleado');
        this.empleadoForm.reset();
      })
    }
  }

  esEditar(){
    if(this.id != null){
      this.titulo = 'Editar Empleado';
      this._empleadoService.getEmpleado(this.id).forEach(data => {
        this.empleadoForm.setValue({
          cedula: data.cedula,
          nombres: data.nombres,
          apellidos: data.apellidos,
          email: data.email
        })
      }).catch(() => {
      console.log('Error al ingresar un nuevo empleado');
      this.empleadoForm.reset();
    })

    }
  }
}
