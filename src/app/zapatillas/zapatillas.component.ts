import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
  selector: "zapatillas",
  templateUrl: "./zapatillas.component.html"
})
export class ZapatillasComponent {
  public titulo: string = "Componente de zapatillas";
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];
  public color: string;
  public miMarca: string;

  constructor() {
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla("Nike Airmax", "Nike", "Rojas", 40, true),
      new Zapatilla("Rebook Classic", "Reebok", "Blanco", 80, true),
      new Zapatilla("Rebook Spartan", "Reebok", "Negra", 180, true),
      new Zapatilla("Nikke Runner MD", "Nike", "Negras", 60, true),
      new Zapatilla("Adidas Yezzy", "Adidas", "Gris", 180, false),
      new Zapatilla("Bombon rallado", "Bombon", "Gris", 190, false)
    ];
    this.color = "yellow";
  }

  ngOnInit() {
    console.log(this.zapatillas);
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

  onBlur(){
    alert('has salido del input');
  }

  mostrarPalabra(){
    alert(this.miMarca);
  }
}
