import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillasService {
    public zapatillas: Array<Zapatilla>;
    
    constructor() {
        this.zapatillas = [
            new Zapatilla("Adidas Yezzy", "Adidas", "Gris", 180, false),
            new Zapatilla("Bombon rallado", "Bombon", "Gris", 190, false),
            new Zapatilla("Nike Airmax", "Nike", "Rojas", 40, true),
            new Zapatilla("Nikke Runner MD", "Nike", "Negras", 60, true),
            new Zapatilla("Rebook Classic", "Reebok", "Blanco", 80, true),
            new Zapatilla("Rebook Spartan", "Reebok", "Negra", 180, true)
        ];
    }

    getTexto() {
        return "Hola Mundo desde un servicio";
    }
    
    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}
