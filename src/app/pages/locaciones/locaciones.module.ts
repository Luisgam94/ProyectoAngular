import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista/lista.component';
import { LocacionesRoutingModule } from './locaciones.routing';
import { LocacionesComponent } from './locaciones.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ListaComponent,LocacionesComponent],
  imports: [
    CommonModule,
    LocacionesRoutingModule,
    SharedModule,
    //RouterModule
  ],
  exports: [ListaComponent,LocacionesComponent]
})
export class LocacionesModule { }
