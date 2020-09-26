import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonajesService } from '../../providers/personajes.service';
import { CharacterResponse, Result } from '../../models/personajes.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  personajes: Observable<CharacterResponse> = new Observable();
  cantidad: number;
  result: Result[];
  loading = false;
  personaje1: Result;
  constructor(private personajesService: PersonajesService) {
    this.personajes = this.personajesService.obtenerPersonajes();
    this.loading = true;
    this.personajes.subscribe(({ info, results }) => {
      this.loading = false;
      console.log(info, results);
      this.cantidad = info.count;
      this.result = results;
    });
  }

  ngOnInit(): void {}
}
