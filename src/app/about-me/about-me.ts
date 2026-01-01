import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from "@angular/router";
import { Certifiport, Idiomas, Tecnologias } from '../interfaces/interfaces';
import { Techs } from '../services/techs';

@Component({
  selector: 'app-about-me',
  imports: [RouterLinkActive],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe implements OnInit {


  constructor(private techService: Techs) { }
  ngOnInit() {
    this.techService.setTechs(this.tecnologias);
  }


  certificados: Certifiport[] = [
    { title: "IT Specialist - Databases", img: "./certiport-badges/it-specialist-databases.png", date: "(6/2024)" },
    { title: "IT Specialist - HTML and CSS", img: "./certiport-badges/it-specialist-databases.png", date: "(6/2024)" },
    { title: "IT Specialist - Java", img: "./certiport-badges/it-specialist-databases.png", date: "(6/2024)" },
    { title: "NDG Linux Essentials", img: "", date: "(5/2024)" },
  ];

  idiomas: Idiomas[] = [
    { name: 'Español', nivel: 'Nativo', icono: './spain.svg' },
    { name: 'Inglés', nivel: 'B1', icono: './uk.svg' }
  ]


  tecnologias: Tecnologias[] = [
    // Frontend
    { id: 1, name: 'html-5', url: './techs/html-5.svg', tipo: 'Frontend', value: 90, descripcion: '' },
    { id: 2, name: 'css3', url: './techs/css3.svg', tipo: 'Frontend', value: 78, descripcion: '' },
    { id: 3, name: 'javascript', url: './techs/javascript.svg', tipo: 'Frontend', value: 45, descripcion: '' },
    { id: 4, name: 'typescript', url: './techs/typescript.svg', tipo: 'Frontend', value: 72, descripcion: '' },
    { id: 5, name: 'angular', url: './techs/angular.svg', tipo: 'Frontend', value: 70, descripcion: '' },
    { id: 6, name: 'react', url: './techs/react.svg', tipo: 'Frontend', value: 32, descripcion: '' },
    { id: 7, name: 'bootstrap', url: './techs/bootstrap.svg', tipo: 'Frontend', value: 30, descripcion: '' },
    { id: 8, name: 'tailwind', url: './techs/tailwind.svg', tipo: 'Frontend', value: 86, descripcion: '' },
    { id: 9, name: 'figma', url: './techs/figma.svg', tipo: 'Frontend', value: 68, descripcion: '' },

    // Backend
    { id: 10, name: 'java', url: './techs/java.svg', tipo: 'Backend', value: 80, descripcion: '' },
    { id: 11, name: 'spring-boot', url: './techs/spring-boot.svg', tipo: 'Backend', value: 70, descripcion: '' },

    // DB
    { id: 12, name: 'mysql', url: './techs/mysql.svg', tipo: 'DB', value: 70, descripcion: '' },
    { id: 13, name: 'postgresql', url: './techs/postgresql.svg', tipo: 'DB', value: 70, descripcion: '' },
    { id: 14, name: 'oracle', url: './techs/oracle-svgrepo-com.svg', tipo: 'DB', value: 65, descripcion: '' },

    // Game Dev.
    { id: 15, name: 'c--', url: './techs/c--.svg', tipo: 'Game Dev.', value: 40, descripcion: '' },
    { id: 16, name: 'unity', url: './techs/unity-svgrepo-com.svg', tipo: 'Game Dev.', value: 40, descripcion: '' },

    // IDE
    { id: 17, name: 'visual-studio', url: './techs/visual-studio-code-svgrepo-com.svg', tipo: 'IDE', value: 80, descripcion: '' },
    { id: 18, name: 'apache-netbeans', url: './techs/apache-netbeans.svg', tipo: 'IDE', value: 50, descripcion: '' },
    { id: 19, name: 'git', url: './techs/git.svg', tipo: 'Version Control', value: 90, descripcion: '' },

  ];



}





