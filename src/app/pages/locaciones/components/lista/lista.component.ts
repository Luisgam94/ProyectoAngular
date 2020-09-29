import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocacionesService } from '../../providers/locaciones.service';
import { LocationResponse, ResultLocation } from '../../models/locaciones.model';
import { CharacterResponse, Result } from 'src/app/pages/personajes/models/personajes.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  locaciones: Observable<LocationResponse> = new Observable();
  cantidad: number;
  result: ResultLocation[];
  loading = false;  
  //personaje1: Result;
  constructor(private locacionesService: LocacionesService) {  
    
    this.locaciones = this.locacionesService.obtenerLocaciones();
    this.loading = true;
    this.locaciones.subscribe(({ info, results }) => {
      this.loading = false;
      console.log(info, results);
      this.cantidad = info.count;
      this.result = results;      
    });

    

  }

  ngOnInit(): void {
  }

}
