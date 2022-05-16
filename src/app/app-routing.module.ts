import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listar-empleados', component: ListarEmpleadosComponent },
  { path: 'crear-empleado', component: CrearEmpleadoComponent},
  { path: 'editar-empleado/:id', component: CrearEmpleadoComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
