import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMe } from "./about-me/about-me";
import { Experiences } from "./experiences/experiences";
import { KnownTechs } from "./known-techs/known-techs";
import { Projects } from "./projects/projects";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutMe, Experiences, KnownTechs, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'project';

  downloadCV() {
    const link = document.createElement('a');
    link.href = './CV Alfonso Gaitán Pérez.pdf';
    link.download = 'CV Alfonso Gaitán Pérez.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  @ViewChild('cardElement') card!: ElementRef<HTMLElement>;

  onMouseMove(e: MouseEvent) {
    const rect = this.card.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const el = this.card.nativeElement;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
    el.style.setProperty('--opacity', '1'); // Encendemos la luz
  }

  onMouseLeave() {
    // Apagamos la luz al salir
    this.card.nativeElement.style.setProperty('--opacity', '0');
  }
  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

