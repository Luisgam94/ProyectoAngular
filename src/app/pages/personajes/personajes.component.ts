import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse, Result } from './models/personajes.model';
import { PersonajesService } from './providers/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {}
}
