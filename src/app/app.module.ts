import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { routing, appRoutingProviders } from "./app.routing";
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { NgSelectModule } from '@ng-select/ng-select';
import { SeleccionarPokemonComponent } from './seleccionar-pokemon/seleccionar-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    ContactoComponent,
    SeleccionarPokemonComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
