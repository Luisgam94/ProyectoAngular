import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/pages/personajes/models/personajes.model';
//import { ResultLocation } from 'src/app/pages/locaciones/models/locaciones.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() personaje: Result;
  //@Input() locacion: ResultLocation;
  constructor() { }

  ngOnInit(): void {
  }

}
