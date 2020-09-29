import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { LocacionesComponent } from './locaciones.component';

const routes: Routes = [
  {path: '', component: LocacionesComponent,
    children: [
        {path: 'lista', component: ListaComponent},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocacionesRoutingModule { }
