import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({ selector: 'zapatillas', templateUrl: './zapatillas.component.html' })

export class ZapatillasComponent {
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    constructor() {
        this.zapatillas = [
            new Zapatilla('Rebook Classic', 'Reebok', 'Blanco', 80, true),
            new Zapatilla('Nikke Runner MD', 'Nike', 'Negras', 60, true),
            new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false)
        ];
    }

    ngOnInit() {
        console.log(this.zapatillas);
    }
}