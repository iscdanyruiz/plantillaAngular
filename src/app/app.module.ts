import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule,  OwlNativeDateTimeModule,  OWL_DATE_TIME_FORMATS} from 'ng-pick-datetime';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material';
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
import { DataTablesModule } from 'angular-datatables';
import { OficinaComponent } from "./oficina/oficina.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

declare var $: any;

export const MY_NATIVE_FORMATS = {
  fullPickerInput: {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  },
  datePickerInput: 'YYYY-MM-DD hh:mm:ss',
  timePickerInput: {
    hour: 'numeric',
    minute: 'numeric'
  },
  monthYearLabel: {
    year: 'numeric',
    month: 'short'
  },
  dateA11yLabel: {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  },
  monthYearA11yLabel: {
    year: 'numeric',
    month: 'long'
  },
};

export const MY_MOMENT_FORMATS = {
  fullPickerInput: 'YYYY-MM-DD HH:mm:ss',
  parseInput: 'YYYY-MM-DD HH:mm:ss',
  datePickerInput: 'YYYY-MM-DD HH:mm:ss',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY'
};

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    ContactoComponent,
    OficinaComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DataTablesModule,
    DataTablesModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    NgSelectModule,
    NgbModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    routing,
  ],
  providers: [
    appRoutingProviders,
    {
      provide: OWL_DATE_TIME_FORMATS,
      useValue: MY_NATIVE_FORMATS
    },],
  bootstrap: [AppComponent]
})
export class AppModule {}
