import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista/lista.component';
import { PersonajesRoutingModule } from './personajes.routing';
import { DetalleComponent } from './components/detalle/detalle.component';
import { RouterModule } from '@angular/router';
import { PersonajesComponent } from './personajes.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ListaComponent, DetalleComponent, PersonajesComponent],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    SharedModule,
    //RouterModule
  ],
  exports: [ListaComponent, DetalleComponent, PersonajesComponent]
})
export class PersonajesModule { }
