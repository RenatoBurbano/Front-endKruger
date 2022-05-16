export class Empleado {
  _id? : string;
  cedula : string;
  nombres : string;
  apellidos : string;
  email : string;
  fechaNacimiento? : string;
  dirDomicilio? : string;
  telMovil? : string;
  rol? : string

  constructor(_id : string, cedula : string, nombres : string, apellidos : string, email : string){
    this._id = _id;
    this.cedula = cedula;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.email = email;
  }

}
