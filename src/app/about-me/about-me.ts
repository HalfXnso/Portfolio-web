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
    { id: 1, name: 'Html 5', url: './techs/html-5.svg', tipo: 'Frontend', value: 90, descripcion: "HTML5 es una de las tecnologías que más he trabajado desde mi etapa formativa. Utilizo una estructura semántica correcta para mejorar la accesibilidad, el SEO técnico y la mantenibilidad del código. He aplicado buenas prácticas de accesibilidad orientadas a personas con visibilidad reducida, cuidando el uso adecuado de etiquetas, atributos alt, labels y elementos interactivos. En mis proyectos y prácticas profesionales he maquetado interfaces a partir de diseños creados en Figma, incluyendo landing pages enfocadas en posicionamiento SEO y experiencia de usuario, como en el caso de proyectos realizados para Lladró S.A." },
    { id: 2, name: 'Css 3', url: './techs/css3.svg', tipo: 'Frontend', value: 78, descripcion: '<b>CSS3</b> es una tecnología que utilizo de forma constante desde el inicio de mi etapa formativa. Trabajo con Flexbox y Grid para construir layouts complejos, responsive y bien estructurados, aplicando tanto enfoques mobile-first como adaptativos según el proyecto.Aunque actualmente me siento más cómodo utilizando Tailwind CSS por la rapidez que ofrece, tengo claro qué reglas y propiedades CSS hay detrás de cada clase, lo que me permite trabajar sin depender exclusivamente de frameworks.He aplicado transiciones, animaciones y efectos visuales para mejorar la experiencia de usuario, así como estilos más elaborados y profesionales, utilizando recursos como gradientes en textos y fondos para lograr interfaces más sólidas y atractivas.' },
    {
      id: 3, name: 'JavaScript', url: './techs/javascript.svg', tipo: 'Frontend', value: 45, descripcion: '<b>JavaScript</b> es un lenguaje que he utilizado principalmente para crear eventos dinámicos y funcionalidades interactivas en mis páginas web. Aunque mi experiencia más profunda en frontend se centra en Angular y TypeScript, tengo conocimientos sólidos de JavaScript puro, incluyendo el manejo de arrays con <b>map</b>, <b>filter</b> y <b>reduce</b>, así como el uso de funciones <b>async/await</b> para trabajar con operaciones asíncronas. Estas habilidades me permiten integrar lógica compleja y mejorar la experiencia de usuario de forma efectiva.'
    },
    {
      id: 4, name: 'TypeScript', url: './techs/typescript.svg', tipo: 'Frontend', value: 72, descripcion: '<b>TypeScript</b> es la tecnología que utilizo habitualmente para tipar componentes, funciones y servicios en Angular, asegurando un código más seguro y mantenible. Trabajo con <b>interfaces</b> para estructurar objetos de proyectos, tecnologías y datos dinámicos, y utilizo <b>clases</b> y <b>enums</b> para manejar información de forma escalable y eficiente. Además, he trabajado con <b>APIs</b>, tanto externas como propias, tipando las respuestas y manipulando los datos según las necesidades del proyecto.'
    },
    { id: 5, name: 'Angular', url: './techs/angular.svg', tipo: 'Frontend', value: 70, descripcion: '<b>Angular</b> es el framework que utilizo para construir aplicaciones web completas, incluyendo componentes, servicios, rutas, formularios y autenticación. Me siento cómodo trabajando con <b>RxJS</b> y <b>Observables</b> para consumir APIs y manejar datos de forma reactiva. Hasta la fecha he realizado varios proyectos donde el frontend se comunica con el backend y gestiono el estado local de manera eficiente. Además, integro librerías de UI como <b>Tailwind</b>, <b>Bootstrap</b>, <b>PrimeNG</b> y <b>DaisyUI</b> para crear interfaces funcionales y estéticamente consistentes.'
 },
    { id: 6, name: 'React', url: './techs/react.svg', tipo: 'Frontend', value: 32, descripcion: '' },
    { id: 7, name: 'Bootstrap', url: './techs/bootstrap.svg', tipo: 'Frontend', value: 30, descripcion: '' },
    { id: 8, name: 'Tailwind css', url: './techs/tailwind.svg', tipo: 'Frontend', value: 86, descripcion: '' },
    { id: 9, name: 'Figma', url: './techs/figma.svg', tipo: 'Frontend', value: 68, descripcion: '' },

    // Backend
    { id: 10, name: 'Java', url: './techs/java.svg', tipo: 'Backend', value: 80, descripcion: '' },
    { id: 11, name: 'Spring Boot', url: './techs/spring-boot.svg', tipo: 'Backend', value: 70, descripcion: '' },

    // DB
    { id: 12, name: 'MySQL', url: './techs/mysql.svg', tipo: 'DB', value: 70, descripcion: '' },
    { id: 13, name: 'PostgreSQL', url: './techs/postgresql.svg', tipo: 'DB', value: 70, descripcion: '' },
    { id: 14, name: 'Oracle database', url: './techs/oracle-svgrepo-com.svg', tipo: 'DB', value: 65, descripcion: '' },

    // Game Dev.
    { id: 15, name: 'C#', url: './techs/c--.svg', tipo: 'Game Dev.', value: 40, descripcion: '' },
    { id: 16, name: 'Unity', url: './techs/unity-svgrepo-com.svg', tipo: 'Game Dev.', value: 40, descripcion: '' },

    // IDE
    { id: 17, name: 'Visual Studio Code', url: './techs/visual-studio-code-svgrepo-com.svg', tipo: 'IDE', value: 80, descripcion: '' },
    { id: 18, name: 'Apache Netbeans', url: './techs/apache-netbeans.svg', tipo: 'IDE', value: 50, descripcion: '' },
    { id: 19, name: 'Git', url: './techs/git.svg', tipo: 'Others', value: 90, descripcion: '' },
    { id: 20, name: 'Dialogflow', url: './techs/dialogflow.svg', tipo: 'Others', value: 60, descripcion: '' },
  ];



}





