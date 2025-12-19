import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMe } from "./about-me/about-me";
import { ContactMe } from "./contact-me/contact-me";
import { DownloadCv } from "./download-cv/download-cv";
import { Experiences } from "./experiences/experiences";
import { KnownTechs } from "./known-techs/known-techs";
import { Projects } from "./projects/projects";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutMe, ContactMe, DownloadCv, Experiences, KnownTechs, Projects],
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
}

