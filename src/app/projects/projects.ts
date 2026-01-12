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
      descripcion: 'Aplicación web para usuarios de vehículos eléctricos que permite localizar puntos de recarga, consultar sus detalles y planificar paradas a lo largo de una ruta.',
      url: 'zSXKfdeja-Q',
      startTime: 8,
      techs: ['Angular 18+', 'Java', 'Html 5', 'Css 3']
    },
    {
      name: 'Genesis',
      src: './thumbnails/Genesis.png',
      background_class: 'genesis-background',
      descripcion: 'Aplicación web para descubrir y gestionar eventos en Valencia, donde los usuarios pueden inscribirse, valorar y dejar opiniones, además de organizar sus eventos en un calendario personal.',
      url: 'IVcwZL_f8HU',
      startTime: 6,
      techs: ['Angular 18+', 'Spring Boot', 'PostgreSQL', 'Java', 'Html 5', 'Css 3', 'Tailwind css']
    },
    {
      name: 'Scriptable Objects',
      src: './thumbnails/ScriptableObjects.png',
      background_class: 'pokemon-background',
      descripcion: 'Proyecto realizado durante mi etapa formativa sobre una de las características de Unity. El objetivo era escoger un tema de los que nos ofrecían (en este caso Scriptable Objects), investigar sobre él y realizar un proyecto utilizando ese mismo tema para explicarlo a los demás compañeros.',
      url: 'dcESeDcvjyw',
      startTime: 0,
      techs: ['C#', 'Unity']
    },
    {
      name: 'Voltpath v2',
      src: './in-progress.gif',
      background_class: 'in-progress',
      descripcion: 'Voltpath v2 es la evolución individual del proyecto original, orientada a aplicar un enfoque de <b>desarrollo full stack</b> más profesional. El frontend se desarrolla con <b>Angular 20</b>, construyendo una aplicación modular y mantenible mediante la gestión de rutas, servicios y estado de la aplicación, además de la integración de mapas interactivos para el cálculo de rutas y paradas.<p>En el backend se implementa una <b>API REST</b> con <b>Spring Boot</b>, centrada en la gestión de usuarios, autenticación y persistencia de datos, aplicando buenas prácticas como la separación por capas y el uso de <b>JPA/Hibernate</b>.</p><p><b>Objetivo principal:</b> comprender el flujo completo entre frontend y backend, la protección de recursos mediante autenticación basada en tokens y el diseño de una arquitectura escalable sobre la que seguir incorporando funcionalidades.</p>',
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
    setTimeout(() => {
      this.player.source = {
        type: 'video',
        sources: [
          { src: project.url, provider: 'youtube' }
        ]
      };
      this.updateUsedTechs(project);
      this.player.once('ready', () => {
        this.player.currentTime = project.startTime;
        this.player.autoplay = true;

      });
    }, 50);


    this.modalRef.nativeElement.showModal();


  }


  close() {
    this.player.muted = true;
    this.player.stop();
    this.modalRef.nativeElement.close();
  }

  updateUsedTechs(project: Project): void {

    this.usedTechs = [];

    project.techs.forEach(techName => {

      const tecnologia = this.techs.find(t => t.name === techName);
      if (tecnologia) {
        this.usedTechs.push(tecnologia.url);
      }
    });

  }

}



