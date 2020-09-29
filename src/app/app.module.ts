import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { PersonajesModule } from './pages/personajes/personajes.module';
//import { ListaComponent } from './pages/locaciones/components/lista/lista.component';
//import { LocacionesComponent } from './pages/locaciones/locaciones.component';

@NgModule({
  declarations: [
    AppComponent
    //ListaComponent,
    //LocacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    //PersonajesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
