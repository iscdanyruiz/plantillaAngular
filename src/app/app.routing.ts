//Importar modulos del reouter de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//importar
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from './contacto/contacto.component';
import { SeleccionarPokemonComponent } from './seleccionar-pokemon/seleccionar-pokemon.component';
import { ListarPokemonComponent } from './listar-pokemon/listar-pokemon.component';

//Array de rutas
const appRoutes: Routes = [
  { path: "contacto", component: ContactoComponent },
  { path: "cursos/", component: CursosComponent },
  { path: "cursos/:nombre/:followers", component: CursosComponent },
  { path: "externo", component: ExternoComponent },
  { path: "home", component: HomeComponent },
  { path: "pokemon", component: SeleccionarPokemonComponent },
  { path: "videojuego", component: VideojuegoComponent },
  { path: "zapatillas", component: ZapatillasComponent },
  { path: "pokemon/lista", component: ListarPokemonComponent },
];

//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
