export class Zapatilla {
    /*
    public color: string;
    public marca: string;
    public nombre: string;
    public precio: number;
    public stock: boolean;

    constructor(nombre, marca, color, precio, stock) {
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }*/

    constructor(
        public nombre: string,
        public marca: string,  
        public color: string,      
        public precio: number,
        public stock: boolean
        ) { }
}