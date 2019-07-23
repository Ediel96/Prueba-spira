import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';

//Angular Material 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatListModule} from '@angular/material/list'; 



import {UsuariosServices} from "./servicios/usuarios.service";

@NgModule({
  declarations: [
    AppComponent,
    ListUsuariosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatListModule
  ],
  providers: [
    UsuariosServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
