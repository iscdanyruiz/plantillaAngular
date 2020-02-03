import { Component, OnInit } from "@angular/core";
import { PeticionesService } from "../services/peticiones.service";
import { Pokemon } from "../models/pokemon";

@Component({
  selector: "app-seleccionar-pokemon",
  templateUrl: "./seleccionar-pokemon.component.html",
  styleUrls: ["./seleccionar-pokemon.component.css"],
  providers: [PeticionesService]
})
export class SeleccionarPokemonComponent implements OnInit {
  public pokemons: Pokemon[];
  public selectedPokeId = "1";

  constructor(private _peticionesService: PeticionesService) {}

  ngOnInit() {
    this.cargarPokemon();
  }

  cargarPokemon() {
    this._peticionesService.getPokemons().subscribe(
      pokemon => {
        this.pokemons = new Array();
        this.pokemons.push(new Pokemon(2, 'Pikachu'));
        this.pokemons.push(new Pokemon(3, 'Snorlax'));
        this.pokemons.push(new Pokemon(pokemon.id, pokemon.name));
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
