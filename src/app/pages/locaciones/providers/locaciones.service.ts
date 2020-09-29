import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocationResponse, ResultLocation } from '../models/locaciones.model';
import { Result } from '../../personajes/models/personajes.model';

@Injectable({
  providedIn: 'root'
})
export class LocacionesService {

  constructor(private http: HttpClient) { }

  obtenerLocaciones() {
    const url = environment.baseurl + environment.endpoints.location;
    return this.http.get<LocationResponse>(url);
  }

}
