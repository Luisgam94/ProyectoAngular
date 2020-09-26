import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../../models/personajes.model';
import { PersonajesService } from '../../providers/personajes.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id: string;
  result: Result;
  constructor(private activatedRoute: ActivatedRoute, private perServ: PersonajesService) {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'].toString();
      console.log(this.id);
      this.perServ.obtenerPersonaje(this.id)
      .subscribe( result  => this.result = result);
    })
   }

  ngOnInit(): void {
  }

}
