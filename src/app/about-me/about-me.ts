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
    {
      id: 1, name: 'Html 5', url: './techs/html-5.svg', tipo: 'Frontend', value: 90, descripcion: '<p><b>HTML5</b> es una de las tecnologías que más he trabajado desde mi etapa formativa. Utilizo una estructura semántica correcta para mejorar la accesibilidad, el SEO técnico y la mantenibilidad del código.</p><p>He aplicado buenas prácticas de accesibilidad orientadas a personas con visibilidad reducida, cuidando el uso adecuado de etiquetas, atributos <b>alt</b>, <b>labels</b> y elementos interactivos.</p><p>En mis proyectos y prácticas profesionales he maquetado interfaces a partir de diseños creados en Figma, incluyendo landing pages enfocadas en posicionamiento SEO y experiencia de usuario, como en el caso de proyectos realizados para Lladró S.A.</p>'
    },
    {
      id: 2, name: 'Css 3', url: './techs/css3.svg', tipo: 'Frontend', value: 78, descripcion: '<p><b>CSS3</b> es una tecnología que utilizo de forma constante desde el inicio de mi etapa formativa. Trabajo con <b>Flexbox</b> y <b>Grid</b> para construir layouts complejos, responsive y bien estructurados, aplicando tanto enfoques mobile-first como adaptativos según el proyecto.</p><p>Aunque actualmente me siento más cómodo utilizando <b>Tailwind CSS</b> por la rapidez que ofrece, tengo claro qué reglas y propiedades CSS hay detrás de cada clase, lo que me permite trabajar sin depender exclusivamente de frameworks.</p><p>He aplicado transiciones, animaciones y efectos visuales para mejorar la experiencia de usuario, así como estilos más elaborados y profesionales, utilizando recursos como gradientes en textos y fondos para lograr interfaces más sólidas y atractivas.</p>'
    },
    {
      id: 3, name: 'JavaScript', url: './techs/javascript.svg', tipo: 'Frontend', value: 45, descripcion: '<b>JavaScript</b> es un lenguaje que he utilizado principalmente para crear eventos dinámicos y funcionalidades interactivas en mis páginas web. Aunque mi experiencia más profunda en frontend se centra en Angular y TypeScript, tengo conocimientos sólidos de JavaScript puro, incluyendo el manejo de arrays con <b>map</b>, <b>filter</b> y <b>reduce</b>, así como el uso de funciones <b>async/await</b> para trabajar con operaciones asíncronas. Estas habilidades me permiten integrar lógica compleja y mejorar la experiencia de usuario de forma efectiva.'
    },
    {
      id: 4, name: 'TypeScript', url: './techs/typescript.svg', tipo: 'Frontend', value: 72, descripcion: '<b>TypeScript</b> es la tecnología que utilizo habitualmente para tipar componentes, funciones y servicios en Angular, asegurando un código más seguro y mantenible. Trabajo con <b>interfaces</b> para estructurar objetos de proyectos, tecnologías y datos dinámicos, y utilizo <b>clases</b> y <b>enums</b> para manejar información de forma escalable y eficiente. Además, he trabajado con <b>APIs</b>, tanto externas como propias, tipando las respuestas y manipulando los datos según las necesidades del proyecto.'
    },
    {
      id: 5, name: 'Angular 18+', url: './techs/angular.svg', tipo: 'Frontend', value: 70, descripcion: '<b>Angular</b> es el framework que utilizo para construir aplicaciones web completas, incluyendo componentes, servicios, rutas, formularios y autenticación. Me siento cómodo trabajando con <b>RxJS</b> y <b>Observables</b> para consumir APIs y manejar datos de forma reactiva. Hasta la fecha he realizado varios proyectos donde el frontend se comunica con el backend y gestiono el estado local de manera eficiente. Además, integro librerías de UI como <b>Tailwind</b>, <b>Bootstrap</b>, <b>PrimeNG</b> y <b>DaisyUI</b> para crear interfaces funcionales y estéticamente consistentes.'
    },
    {
      id: 6, name: 'React', url: './techs/react.svg', tipo: 'Frontend', value: 35, descripcion: '<b>React</b> es una tecnología que he utilizado en un entorno real durante mi formación dual, trabajando con <b>PrimeReact</b> para desarrollar pantallas que conectaban el frontend con el backend y la base de datos. Tengo conocimientos del uso de componentes funcionales, <b>useState</b> y <b>useEffect</b>, así como del flujo de trabajo básico de una aplicación React. Aunque no es la herramienta que más utilizo actualmente, comprendo su funcionamiento y me siento cómodo aprendiendo y adaptándome a ella cuando el proyecto lo requiere.'
    },
    {
      id: 7, name: 'Bootstrap', url: './techs/bootstrap.svg', tipo: 'Frontend', value: 35, descripcion: '<b>Bootstrap</b> es una librería de estilos que he utilizado para maquetar interfaces de forma rápida, haciendo uso de su sistema de grid, componentes predefinidos y clases utility. He trabajado con elementos como navbars, cards, modals y botones, integrándolos en distintos proyectos. Aunque conozco su funcionamiento y puedo utilizarlo sin problema, no suelo personalizarlo en profundidad y actualmente prefiero alternativas como <b>Tailwind CSS</b>, que me ofrecen mayor flexibilidad y control sobre el diseño.'
    },
    {
      id: 8, name: 'Tailwind css', url: './techs/tailwind.svg', tipo: 'Frontend', value: 86, descripcion: '<b>Tailwind CSS</b> es la librería de estilos que utilizo como base principal en la mayoría de mis proyectos. Tengo mucha práctica trabajando con su sistema de clases utility, gestionando diseño responsive, estados interactivos y dark mode. He utilizado Tailwind de forma intensiva tanto en proyectos personales como durante mis prácticas y FCT, integrándolo con librerías como <b>DaisyUI</b>. Aunque no siempre he necesitado construir componentes completos desde cero, conozco cómo hacerlo y valoro especialmente la flexibilidad y el control que ofrece frente a otras alternativas.'
    },
    {
      id: 9, name: 'Figma', url: './techs/figma.svg', tipo: 'Frontend', value: 78, descripcion: '<b>Figma</b> es la herramienta que utilizo para planificar y definir el diseño de las interfaces antes de comenzar el desarrollo. Trabajo creando y siguiendo layouts completos, respetando guías de color, tipografías, espaciados y versiones responsive. Durante mis prácticas y FCT he utilizado Figma en entornos profesionales, donde recibía los diseños y debía maquetar las páginas fielmente a partir de ellos, asegurando coherencia visual y una correcta experiencia de usuario.'
    },

    // Backend
    {
      id: 10, name: 'Java', url: './techs/java.svg', tipo: 'Backend', value: 80, descripcion: '<b>Java</b> ha sido la asignatura troncal de mi ciclo superior de DAM, donde he trabajado de forma intensiva con el lenguaje en distintos contextos. He desarrollado aplicaciones utilizando conceptos de programación orientada a objetos como herencia y polimorfismo, así como conexiones con bases de datos mediante <b>JDBC</b>. Además, he realizado pruebas unitarias con <b>JUnit</b> y trabajado con tecnologías como <b>WebSockets</b>, lo que me ha permitido adquirir una base sólida y versátil en desarrollo backend con Java.'
    },
    {
      id: 11, name: 'Spring Boot', url: './techs/spring-boot.svg', tipo: 'Backend', value: 70, descripcion: '<b>Spring Boot</b> es el framework que utilizo para desarrollar APIs y aplicaciones backend en Java. He trabajado creando <b>APIs REST</b> con controllers, services y repositories, integrando <b>JPA/Hibernate</b> para la conexión a bases de datos y manejando la comunicación con frontend, principalmente Angular. También he implementado autenticación y seguridad básica en varios proyectos. Actualmente estoy aplicando los <b>principios de DDD y arquitectura Hexagonal</b> en proyectos en curso, organizando la aplicación en capas como <i>domain, application e infrastructure</i>, lo que me permite profundizar en buenas prácticas y mantener un código más limpio y escalable, aprovechando mi sólida base en Java y mi experiencia con Spring Boot.'
    },
    {
      id: 21, name: 'PHP', url: './techs/php.svg', tipo: 'Backend', value: 70, descripcion: '<b>PHP</b> es uno de los lenguajes que he utilizado en entorno profesional para el desarrollo y mantenimiento de aplicaciones web. He trabajado realizando modificaciones y mejoras en proyectos basados en <b>Magento 2</b>, implementando funcionalidades en PHP y gestionando configuraciones mediante <b>XML</b>. También he trabajado sobre arquitecturas basadas en <b>MVC</b> utilizando frameworks como <b>Phalcon</b>, desarrollando lógica de negocio, conectando con bases de datos y participando en la implementación de nuevas funcionalidades dentro del proyecto. Esta experiencia me ha permitido comprender mejor el funcionamiento de aplicaciones backend en producción y trabajar con código existente en entornos reales.'
    },

    // DB
    {
      id: 12, name: 'MySQL', url: './techs/mysql.svg', tipo: 'DB', value: 70, descripcion: '<b>MySQL</b> es una base de datos relacional con la que he trabajado principalmente durante mi formación dual, donde ya se encontraba integrada en los proyectos. Aunque no la he utilizado de forma extensiva en proyectos personales, tengo un conocimiento sólido del <b>lenguaje SQL</b>, lo que me permite adaptarme sin dificultad al uso de MySQL u otros motores relacionales. He trabajado con consultas complejas que incluyen subconsultas, filtros, agregaciones y expresiones condicionales como <b>CASE</b>, aplicando los mismos principios que en bases de datos como PostgreSQL.'

    },
    {
      id: 13, name: 'PostgreSQL', url: './techs/postgresql.svg', tipo: 'DB', value: 75, descripcion: '<b>PostgreSQL</b> es la base de datos relacional que utilizo como principal en mis proyectos personales. La he integrado con <b>Java y Spring Boot</b> mediante <b>Spring Data JPA</b>, utilizando repositorios para consultas básicas y anotaciones <b>@Query</b> para consultas más complejas. He diseñado los modelos de datos y trabajado con consultas SQL avanzadas, aplicando subconsultas, joins, filtros y agregaciones. Esta experiencia me permite manejar PostgreSQL con soltura dentro de aplicaciones backend completas y bien estructuradas.'
    },
    {
      id: 14, name: 'Oracle database', url: './techs/oracle-svgrepo-com.svg', tipo: 'DB', value: 65, descripcion: '<b>Oracle Database</b> es una base de datos relacional con la que he trabajado durante mi etapa formativa. Aunque no la he utilizado en entornos profesionales reales, tengo una base sólida del <b>lenguaje SQL</b> y de los principios comunes a las bases de datos relacionales, lo que me permite adaptarme con facilidad a Oracle y a otros motores similares. Conozco las particularidades básicas de Oracle y sus diferencias respecto a otras bases de datos como MySQL o PostgreSQL.'
    },

    // Game Dev.
    {
      id: 15, name: 'C#', url: './techs/c--.svg', tipo: 'Game Dev.', value: 40, descripcion: '<b>C#</b> es un lenguaje que he utilizado principalmente en el desarrollo de proyectos con <b>Unity</b> durante mi etapa formativa. He creado scripts para controlar movimientos, gestionar inventarios, trabajar con bucles y lógica de juego básica. Aunque actualmente no es un lenguaje que utilice de forma habitual ni es mi especialidad, tengo una conocimiento sobre su funcionamiento y comprendo su uso dentro del desarrollo de proyectos multimedia interactivos.'
    },
    {
      id: 16, name: 'Unity', url: './techs/unity-svgrepo-com.svg', tipo: 'Game Dev.', value: 40, descripcion: '<b>Unity</b> es el motor de desarrollo que he utilizado durante mi etapa formativa para crear proyectos básicos multimedia. He trabajado con la creación de entornos, animaciones y elementos físicos como <b>Rigidbody</b> y <b>Collider</b>, así como con la integración de scripts en C# para dar comportamiento a los objetos. Aunque no es una tecnología que utilice de forma habitual ni en la que me considere experto, conozco su flujo de trabajo y sus conceptos fundamentales.'
    },

    // IDE
    {
      id: 17, name: 'Visual Studio Code', url: './techs/visual-studio-code-svgrepo-com.svg', tipo: 'IDE', value: 80, descripcion: '<b>Visual Studio Code</b> es el IDE con el que más cómodo me siento y que utilizo de forma habitual tanto en proyectos frontend como backend. He configurado perfiles personalizados con extensiones, temas y atajos según el tipo de proyecto (Angular o Java), lo que me permite optimizar mi flujo de trabajo. Utilizo sus herramientas de <b>debugging</b>, terminal integrada y snippets, y gestiono el <b>control de versiones con Git</b> directamente desde el IDE para subir, actualizar o realizar cualquier acción en mis repositorios.'
    },
    {
      id: 18, name: 'Apache Netbeans', url: './techs/apache-netbeans.svg', tipo: 'IDE', value: 50, descripcion: '<b>Apache NetBeans</b> es el IDE que utilicé durante mi etapa formativa para aprender Java y sentar las bases de la programación. Trabajé con pruebas unitarias, gestión de librerías y conexiones básicas dentro del IDE. Aunque ya no lo utilizo para proyectos actuales y prefiero <b>Visual Studio Code</b>, me permitió adquirir los conocimientos iniciales necesarios para desarrollar en Java de manera estructurada.'
    },
    {
      id: 19, name: 'Git', url: './techs/git.svg', tipo: 'Others', value: 90, descripcion: '<b>Git</b> es la herramienta de control de versiones que utilizo de forma habitual en todos mis proyectos. Manejo operaciones avanzadas como branching, merge, pull requests y resolución de conflictos, integrando Git tanto desde la terminal como directamente desde IDEs como <b>Visual Studio Code</b>. Esta experiencia me permite mantener un flujo de trabajo organizado, seguro y colaborativo en proyectos individuales y en equipo.'
    },
    {
      id: 20, name: 'Dialogflow', url: './techs/dialogflow.svg', tipo: 'Others', value: 60, descripcion: '<b>Dialogflow</b> es una herramienta de procesamiento de lenguaje natural de Google que utilicé en mi PFC para complementar un sistema de reconocimiento de voz. Permitía interpretar la intención detrás de los comandos hablados, entendiendo distintas formas de expresar lo mismo y ejecutando correctamente las acciones correspondientes. Aunque adquirí experiencia práctica en este proyecto, aún no soy un experto y me gustaría seguir profundizando en el futuro para crear interfaces conversacionales más avanzadas.'
    },
  ];



}





