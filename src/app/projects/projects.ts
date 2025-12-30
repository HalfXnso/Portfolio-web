import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Tecnologias } from '../known-techs/known-techs';
import * as Plyr from 'plyr';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  proyectos: Project[] = [
    {
      name: 'voltpath',
      src: './thumbnails/Voltpath.jpg',
      background_class: 'voltpath-background',
      descripcion: '',
      url: 'zSXKfdeja-Q',
      startTime: 0,
    },
    {
      name: 'genesis',
      src: './thumbnails/Genesis.png',
      background_class: 'genesis-background',
      descripcion: '',
      url: 'IVcwZL_f8HU',
      startTime: 40,
    },
    {
      name: 'genesis',
      src: './thumbnails/Genesis.png',
      background_class: 'genesis-background',
      descripcion: '',
      url: 'IVcwZL_f8HU',
      startTime: 0,
    },
    {
      name: 'genesis',
      src: './thumbnails/Genesis.png',
      background_class: 'genesis-background',
      descripcion: '',
      url: 'IVcwZL_f8HU',
      startTime: 0,
    },
  ]
  @ViewChild('player') playerRef!: ElementRef;
  @ViewChild('modal') modalRef!: ElementRef<HTMLDialogElement>;


  @HostListener('document:keydown.escape')
  onEscapePressed() {
    this.close();
  }

  player!: Plyr;
  currentVideo: any = null;

  async ngAfterViewInit() {
    const PlyrModule = await import('plyr');
    const Plyr = (PlyrModule as any).default ?? PlyrModule;
    this.player = new Plyr(this.playerRef.nativeElement, {
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

  openModal(video: any) {
    this.currentVideo = video;

    // Para que Plyr detecte el nuevo vídeo
    setTimeout(() => {
      this.player.source = {
        type: 'video',
        sources: [
          { src: video.url, provider: 'youtube' }
        ]
      };

    }, 50);

    this.player.currentTime = video.startTime || 0;
    this.player.autoplay = true;

    this.modalRef.nativeElement.showModal();
  }



  close() {
    this.player.muted = true;
    this.player.stop(); // reinicia el vídeo
    this.modalRef.nativeElement.close();
  }

}


export interface Project {
  name: string,
  src: string,
  background_class: string,
  descripcion: string,
  url: string,
  startTime: number,
}
