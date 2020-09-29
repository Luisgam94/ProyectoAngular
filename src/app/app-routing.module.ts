import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'personajes', loadChildren: () => import('./pages/personajes/personajes.module').then((m) => m.PersonajesModule) },
  { path: 'locaciones', loadChildren: () => import('./pages/locaciones/locaciones.module').then((m) => m.LocacionesModule) },

  //{ path: 'personajes/:id', loadChildren: () => import('./pages/personajes/components/detalle/detalle.module').then((m) => m.DetalleModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
