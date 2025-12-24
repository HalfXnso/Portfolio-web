import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {

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
}



export interface Certifiport {

  title: string,
  img: string
  date: string,

}

export interface Idiomas {
  icono: string,

  name: string,
  nivel: string
}

