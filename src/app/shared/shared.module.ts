import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [NavbarComponent, LoadingComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, LoadingComponent, CardComponent]
})
export class SharedModule { }
