import { Component } from '@angular/core';
import { Configuracion } from "./models/configuracion";
import { NgSelectConfig } from '@ng-select/ng-select';

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

  constructor(
    private configSelect: NgSelectConfig
  ) {
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;


    this.configSelect.notFoundText = 'No se han encontrado datos';
    //this.configSelect.appendTo = 'body';
    // set the bindValue to global config when you use the same 
    // bindValue in most of the place. 
    // You can also override bindValue for the specified template 
    // by defining `bindValue` as property
    // Eg : <ng-select bindValue="some-new-value"></ng-select>
    //this.configSelect.bindValue = 'value';
  }

  ocultarVideojuegos(value) {
    this.mostrar_videojuegos = value;
  }
}
