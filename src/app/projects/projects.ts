import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as Plyr from 'plyr';
import { Project, Tecnologias } from '../interfaces/interfaces';
import { Techs } from '../services/techs';

@Component({
  selector: 'app-projects',
  imports: [],
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
      name: 'voltpath',
      src: './thumbnails/Voltpath.jpg',
      background_class: 'voltpath-background',
      descripcion: 'Proyecto de cargadores eléctricos para todo el mundo',
      url: 'zSXKfdeja-Q',
      startTime: 0,
      techs: ['angular', 'spring-boot', 'mysql']
    },
    {
      name: 'genesis',
      src: './thumbnails/Genesis.png',
      background_class: 'genesis-background',
      descripcion: 'Organización de evento en valencia.',
      url: 'IVcwZL_f8HU',
      startTime: 10,
      techs: ['angular', 'mysql']
    },
    {
      name: 'genesis',
      src: './thumbnails/Genesis.png',
      background_class: 'genesis-background',
      descripcion: 'aaaa',
      url: 'IVcwZL_f8HU',
      startTime: 0,
      techs: ['angular', 'spring-boot', 'mysql']
    },
    {
      name: 'genesis',
      src: './thumbnails/Genesis.png',
      background_class: 'genesis-background',
      descripcion: '',
      url: 'IVcwZL_f8HU',
      startTime: 0,
      techs: ['angular', 'spring-boot', 'mysql']
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
        'progress',
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

    // Limpiar el array primero
    this.usedTechs = [];

    // Buscar y añadir las URLs de las tecnologías
    project.techs.forEach(techName => {

      const tecnologia = this.techs.find(t => t.name === techName);
      if (tecnologia) {
        this.usedTechs.push(tecnologia.url);
      }

    });

  }

}



