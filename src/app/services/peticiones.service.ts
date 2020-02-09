import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

//API REST de pruebas: reqres.in
@Injectable()
export class PeticionesService {
  public url: string;
  public pokeUrl: string;

  constructor(public _http: HttpClient) {
    this.url = "https://reqres.in/";
    this.pokeUrl = "https://pokeapi.co/api/v2/";
  }

  getUsers(): Observable<any> {
    return this._http.get(this.url + "api/users?page=2");
  }
  
  getUser(userId: any): Observable<any> {
    return this._http.get(this.url + "api/users/" + userId);
  }

  getPokemons(): Observable<any> {
    return this._http.get(this.pokeUrl + "pokemon/1/");
  }

  addUser(user): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.url + "api/useres", params, {
      headers: headers
    });
  }
}
