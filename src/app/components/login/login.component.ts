import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioForm : FormGroup;
  //rol: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _empleadoService: EmpleadoService) {
    this.usuarioForm = this.fb.group({
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  loginUsuario(){

    const USUARIO: Usuario = {
      usuario : this.usuarioForm.get('usuario')?.value,
      contrasenia : this.usuarioForm.get('contrasenia')?.value
    }

    this._empleadoService.loginUsuario(USUARIO).forEach(data => {
      if(data.rol == 'empleado'){
        console.log('Empleado');
        this.toastr.info('Bienvenido al sistema de informe de vacunación', 'Ingreso Exitoso');
      }else if(data.rol == 'admin'){
        this.toastr.info('Bienvenido al sistema de informe de vacunación', 'Ingreso Exitoso');
        this.router.navigate(['/listar-empleados']);
      }else{
        console.log('Rol no definido');
      }
    }).catch(() => {
      this.toastr.error('El usuario o la contraseña son incorrectos', 'Acceso Incorrecto');
    })

  }

}
