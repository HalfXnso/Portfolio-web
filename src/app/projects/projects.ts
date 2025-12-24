import { Component } from '@angular/core';
import { Tecnologias } from '../known-techs/known-techs';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  proyectos: Project[] = [
    {
      url: './thumbnails/Voltpath.jpg',
      background_class: 'voltpath-background',
      descripcion:''
    },
    {
      url: './thumbnails/Genesis.png',
      background_class: 'genesis-background',
      descripcion:''
    },
     {
      url: './thumbnails/Genesis.png',
      background_class: 'genesis-background',
      descripcion:''
    },
  ]
}


export interface Project {
  url: string,
  background_class: string,
  descripcion: string,
}
