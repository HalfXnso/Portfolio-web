import { Injectable } from '@angular/core';
import { Tecnologias } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class Techs {
  techs : Tecnologias[] | null = null;
  getTechs(): Tecnologias[]{
    return this.techs || [];
  }
  setTechs(techs: Tecnologias[]){
    this.techs = techs;
  }
}
