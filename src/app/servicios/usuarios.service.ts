import {Injectable} from '@angular/core';

@Injectable()
export class UsuariosServices {

    private usuarios:Usuario [] = [
        {
          nombre: "Camilo",
          correo: "Camilo@gmail.com"
        },
        {
          nombre: "Juan",
          correo: "Juan@gmail.com"
        },
        {
          nombre: "Andres",
          correo: "Andres@gmail.com"
        },
        {
          nombre: "Camila",
          correo: "Camila@gmail.com"
        },
        {
          nombre: "Sebastian",
          correo: "Sebastian@gmail.com"
        },
        {
          nombre: "Santiago",
          correo: "Santiago@gmail.com"
        },
        {
          nombre: "Pedro",
          correo: "Pedro@gmail.com"
        }
      ];


    constructor (){
        console.log("Servicios listo para usar!!");
    }

    getHeroes ():Usuario[]{
        return this.usuarios;
    }

    getHeroe (idx: string){
      return this.usuarios[idx];
    }

}

export interface Usuario {
    nombre: string;
    correo: string;
}