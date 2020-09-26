import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ListaComponent } from './components/lista/lista.component';
import { PersonajesComponent } from './personajes.component';

const routes: Routes = [
  {path: '', component: PersonajesComponent,
    children: [
        {path: 'lista', component: ListaComponent},
        {path: 'detalle/:id', component: DetalleComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
