import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as Plyr from 'plyr';
import { Project, Tecnologias } from '../interfaces/interfaces';
import { Techs } from '../services/techs';
import { ProjectInfo } from "../project-info/project-info";

@Component({
  selector: 'app-projects',
  imports: [ProjectInfo],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {

  constructor(private techService: Techs) { }
  techs: Tecnologias[] = [];
  usedProject: Project | null = null;
  usedTechs: string[] = [];
  player!: Plyr;
  currentVideo: any = null;
  proyectos: Project[] = [
    {
      name: 'Voltpath',
      src: './thumbnails/Voltpath.jpg',
      background_class: 'voltpath-background',
      descripcion: 'Aplicación web orientada a usuarios de vehículos eléctricos, permitiendoles visualizar distintos puntos de recarga, así como consultar información detallada sobre cada cargador. <p> Además, ofrece la posibilidad de mostrar los puntos de carga cercanos a una ruta concreta, permitiendo al usuario añadir y seleccionar diferentes paradas según sus necesidades.</p>',
      url: 'zSXKfdeja-Q',
      startTime: 8,
      techs: ['Angular 18+', 'Java', 'Html 5', 'Css 3']
    },
    {
      name: 'Genesis',
      src: './thumbnails/Genesis.png',
      background_class: 'genesis-background',
      descripcion: 'Aplicación web orientada a la gestión y descubrimiento de eventos en la ciudad de Valencia. La aplicación permite a los usuarios descubrir eventos creados por otras personas o empresas, inscribirse en ellos, dejar opiniones, aportar feedback y valorar los eventos mediante likes y dislikes. <p>Además, incluye un <b>calendario dinámico</b> donde cada usuario puede visualizar los eventos a los que está apuntado, facilitando la organización y evitando olvidos.</p>',
      url: 'IVcwZL_f8HU',
      startTime: 6,
      techs: ['Angular 18+', 'Spring Boot', 'PostgreSQL', 'Java', 'Html 5', 'Css 3', 'Tailwind css']
    },
    {
      name: 'Scriptable Objects',
      src: './thumbnails/ScriptableObjects.png',
      background_class: 'pokemon-background',
      descripcion: 'Proyecto hecho durante mi etapa formativa con el objetivo de explicar los Scriptable Objects de Unity',
      url: 'dcESeDcvjyw',
      startTime: 0,
      techs: ['C#', 'Unity']
    },
    {
      name: 'Voltpath v2',
      src: './in-progress.gif',
      background_class: 'in-progress',
      descripcion: 'Voltpath v2 es la evolución individual del proyecto original, orientada a aprender y aplicar un <b>desarrollo full stack</b> más profesional. En el frontend estoy trabajando con <b>Angular 20</b> para construir una aplicación modular y mantenible, gestionando rutas, servicios y estado de la aplicación, además de la integración con mapas interactivos para el cálculo de rutas y paradas. En el backend estoy desarrollando una <b>API REST</b> con <b>Spring Boot</b>, enfocada en la gestión de usuarios, autenticación y persistencia de datos, aplicando buenas prácticas como separación por capas (controller, service, repository) y uso de JPA/Hibernate. El objetivo principal del proyecto es comprender el flujo completo entre frontend y backend, la protección de recursos mediante autenticación basada en tokens y el diseño de una arquitectura escalable sobre la que seguir incorporando funcionalidades.',
      url: 'MzEFeIRJ0eQ',
      startTime: 0,
      techs: ['Angular 18+', 'Spring Boot', 'PostgreSQL', 'Java', 'Html 5', 'Css 3', 'Tailwind css']
    },

  ]


  @ViewChild('player') playerRef!: ElementRef;
  @ViewChild('modal') modalRef!: ElementRef<HTMLDialogElement>;
  @HostListener('document:keydown.escape')

  ngOnInit(): void {
    setTimeout(() => {

      this.getTechs();

    }, 50)
  }
  async getTechs() {
    this.techs = await this.techService.getTechs();

  }

  onEscapePressed() {
    this.close();
  }

  async ngAfterViewInit() {
    const PlyrModule = await import('plyr');
    const Plyr = (PlyrModule as any).default ?? PlyrModule;
    this.player = new Plyr(this.playerRef.nativeElement, {

      loop: { active: true },
      youtube: {
        noCookie: true,
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      // Opciones generales
      controls: [
        'play',
        'mute',
      ],
      keyboard: { focused: true, global: false },
      tooltips: { controls: true, seek: true },
      muted: true,

    });
  }

  openModal(project: any) {

    this.usedProject = project;
    // Para que Plyr detecte el nuevo vídeo
    setTimeout(() => {
      this.player.source = {
        type: 'video',
        sources: [
          { src: project.url, provider: 'youtube' }
        ]
      };
      this.updateUsedTechs(project);
      this.player.once('ready', () => {
        // Ahora sí puedes establecer el tiempo
        this.player.currentTime = project.startTime;
        this.player.autoplay = true;

      });
    }, 50);


    this.modalRef.nativeElement.showModal();


  }


  close() {
    this.player.muted = true;
    this.player.stop(); // reinicia el vídeo
    this.modalRef.nativeElement.close();
  }

  updateUsedTechs(project: Project): void {

    this.usedTechs = [];

    project.techs.forEach(techName => {

      const tecnologia = this.techs.find(t => t.name === techName, console.log(techName, "GG"));
      if (tecnologia) {
        this.usedTechs.push(tecnologia.url);
        console.log(this.usedTechs);
      }

    });
    console.log(this.usedTechs);

  }

}



