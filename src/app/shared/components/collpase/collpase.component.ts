import { Component, Input, OnInit } from '@angular/core';
import { ResultLocation } from 'src/app/pages/locaciones/models/locaciones.model';
import { Result } from 'src/app/pages/personajes/models/personajes.model';


@Component({
  selector: 'app-collpase',
  templateUrl: './collpase.component.html',
  styleUrls: ['./collpase.component.css']
})
export class CollpaseComponent implements OnInit {
  @Input() locacion: ResultLocation;

  constructor() { }

  ngOnInit(): void {
  }

}
