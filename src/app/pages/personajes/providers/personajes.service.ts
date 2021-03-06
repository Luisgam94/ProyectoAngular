import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CharacterResponse, Result } from '../models/personajes.model';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  obtenerPersonajes() {
    const url = environment.baseurl + environment.endpoints.character;
    return this.http.get<CharacterResponse>(url);
  }

  obtenerPersonaje(id: string) {
    const { baseurl, endpoints} = environment;
    const url = `${baseurl}${endpoints.character}/${id}`;
    return this.http.get<Result>(url);
  }

}
