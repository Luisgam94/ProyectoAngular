import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse, Result } from './models/personajes.model';
import { PersonajesService } from './providers/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  personajes: Observable<CharacterResponse> = new Observable();
  cantidad: number;
  result: Result[];
  loading = false;
  personaje1: Result;
  constructor(private personajesService: PersonajesService) {
    this.personajes = this.personajesService.obtenerPersonajes();
    this.loading = true;
    this.personajes.subscribe( ({info, results}) => {
      setTimeout( () => {
        this.loading = false;
        console.log(info, results);
      this.cantidad = info.count;
      this.result = results;
      this.personaje1 = results[0];
      }, 3000)
    });
  }

  ngOnInit(): void {
  }

}
