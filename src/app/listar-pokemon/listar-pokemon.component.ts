import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { PeticionesService } from "../services/peticiones.service";
import { Pokemon } from "../models/pokemon";
import { Subject } from "rxjs";
import { DataTableDirective } from "angular-datatables";
import { Humano } from "../models/humano";
import { PrepareDataTableControls } from "../services/prepareDataTableControls.service";

@Component({
  selector: "app-listar-pokemon",
  templateUrl: "./listar-pokemon.component.html",
  styleUrls: ["./listar-pokemon.component.css"],
  providers: [PrepareDataTableControls ,DataTableDirective, PeticionesService]
})
export class ListarPokemonComponent implements OnInit {
  public pokemons: Pokemon[] = new Array();
  public humanos: Humano[] = new Array();
  public selectedPokeId = "1";

  @ViewChildren(DataTableDirective)
  dtElements: QueryList<any>;
  dtTrigger: Subject<any> = new Subject();
  dtTrigger2: Subject<any> = new Subject();
  dtOptions: any[] = [];
  
  constructor(
    private prepareDataTableControls:PrepareDataTableControls,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this.prepareDataTableControls.onStartOptions();
    this.dtOptions = this.prepareDataTableControls.dtOptions;
    this.cargarPokemon();
    this.cargarSeresHumanos();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    this.dtTrigger2.unsubscribe();
  }

  cargarPokemon() {
    this._peticionesService.getPokemons().subscribe(
      pokemon => {
        this.pokemons = new Array();
        this.pokemons.push(new Pokemon(2, "Pikachu"));
        this.pokemons.push(new Pokemon(3, "Snorlax"));
        this.pokemons.push(new Pokemon(pokemon.id, pokemon.name));
        this.cargarSeresHumanos();
        this.rerender();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  cargarSeresHumanos() {
    this._peticionesService.getUsers().subscribe(
      (humanos: any) => {
        this.humanos = new Array();
        humanos.data.map(humano => {
          this.humanos.push(humano);
        });
        this.rerender();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  rerender(): void {
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (typeof dtElement.dtInstance !== "undefined")
        dtElement.dtInstance.then((dtInstance: any) => {
          console.log(
            `The DataTable ${index} instance ID is: ${
            dtInstance.table().node().id
            }`
          );
          dtInstance.destroy();
          this.dtTrigger.next();
          this.dtTrigger2.next();
        });
      this.dtTrigger.next();
      this.dtTrigger2.next();
    });
  }

}
