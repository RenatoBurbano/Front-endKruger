# KrugerReto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

El proyecto se construyó en Angular, de el se desprenden cuadro componentes que pretenden resolver el reto de un sistema de registro de vacunación, de los cuales solamente se ha presentado tres:
  login: Componente enfocado al inicio de sesión y principal diferenciador entre los tipos de rol 'admin y 'empleado'
  listar-empleados: Destinado a ser la pantalla principal del rol 'admin' donde podrá visualizar a sus empleados, actualizar su información principal o eliminarlos.
  crea-empleado: Componente encargado de recoger la información necesaria para crear un empleado, también actua como pantalla para actualizar su información.
  
El cuarto componente iría destinado a la actualización de información personal donde podría agregar el registro de vacunación.

Para el estilo CSS del Front-end se utilizó bootstrap en su versión 5.2.0-beta1
Otro componente importante Toastr con su versión 14.3.0 que permite emitir cuadros de notificaciónes sobre acciones que cometa el usuario en el sistema.

Para la validación unicamente he alcanzado hacer que los formularios tanto de Login como crear Empleado sean obligatorios.

para correr la aplicación web descargar las dependencias anteriormente comentadas y ejecutar ng serve -o para que se abra en su navegador predeterminado, además podría revisar la páginca web una vez ejecutada la aplicación en la dirección http://localhost:4200/ en caso de preferirlo.
