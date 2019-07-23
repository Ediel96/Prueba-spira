import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';

import {UsuariosServices} from "./servicios/usuarios.service";

@NgModule({
  declarations: [
    AppComponent,
    ListUsuariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UsuariosServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
