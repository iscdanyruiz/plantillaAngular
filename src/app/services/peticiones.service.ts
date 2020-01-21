import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

//API REST de pruebas: reqres.in
@Injectable()
export class PeticionesService {
  public url: string;
  constructor(public _http: HttpClient) {
    this.url = "https://reqres.in/";
  }
  getUser(userId: any): Observable<any> {
    return this._http.get(this.url + "api/users/" + userId);
  }

  addUser(user): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.url + "api/useres", params, {
      headers: headers
    });
  }
}
