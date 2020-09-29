import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { CardComponent } from './components/card/card.component';
import { PersonajesModule } from '../pages/personajes/personajes.module';
import { CollpaseComponent } from './components/collpase/collpase.component';



@NgModule({
  declarations: [NavbarComponent, LoadingComponent, CardComponent, CollpaseComponent],
  imports: [
    CommonModule,
    RouterModule
    //PersonajesModule
  ],
  exports: [NavbarComponent, LoadingComponent, CardComponent, CollpaseComponent]
})
export class SharedModule { }
