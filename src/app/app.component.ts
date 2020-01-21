import { Component } from '@angular/core';
import { Configuracion } from "./models/configuracion";
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Master de JavaScript y Angular';
  public listado = 'Vamos aprender Angular juntos';
  public mostrar_videojuegos: boolean = true;
  public descripcion: String;
  public config;

  constructor() {
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  ocultarVideojuegos(value) {
    this.mostrar_videojuegos = value;
  }
}
