import { Component, OnInit } from '@angular/core';
import {UsuariosServices, Usuario} from '../../app/servicios/usuarios.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})

export class ListUsuariosComponent implements OnInit {


  usuarios:Usuario  [] = [];

  constructor( private _usuarioService: UsuariosServices) { }

  ngOnInit() {

    this.usuarios = this._usuarioService.getHeroes();

  }

}
