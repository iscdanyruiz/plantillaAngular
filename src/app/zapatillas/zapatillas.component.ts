import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillasService } from '../services/zapatilla.service';

@Component({
  selector: "zapatillas",
  templateUrl: "./zapatillas.component.html",
  providers: [ZapatillasService]
})

export class ZapatillasComponent implements OnInit {
  public color: string;
  public marcas: string[];
  public miMarca: string;
  public titulo: string = "Componente de zapatillas";
  public zapatillas: Array<Zapatilla>;

  constructor(private _zapatillaService: ZapatillasService) {
    this.miMarca = "Fila";
    this.color = "yellow";
    this.marcas = new Array();
  }

  ngOnInit() {
    this.zapatillas = this._zapatillaService.getZapatillas();
    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0)
        this.marcas.push(zapatilla.marca);
      console.log(index);
    });
    console.log(this.marcas);
  }

  getMarca() {
    alert(this.miMarca);
  }

  setMarca() {
    this.marcas.push(this.miMarca);
  }

  borrarMarca(index) {
    //delete this.marcas[index];
    this.marcas.splice(index, 1);
  }

  onBlur() {
    alert('has salido del input');
  }

  mostrarPalabra() {
    alert(this.miMarca);
  }
}
