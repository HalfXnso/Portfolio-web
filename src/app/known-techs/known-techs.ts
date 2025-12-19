import { Component } from '@angular/core';

@Component({
  selector: 'app-known-techs',
  imports: [],
  templateUrl: './known-techs.html',
  styleUrl: './known-techs.css',
})
export class KnownTechs {

  tecnologias: Tecnologias[] = [
    // Frontend
    { id: 1, name: 'html-5', url: './techs/html-5.svg', tipo: 'Frontend' },
    { id: 2, name: 'css3', url: './techs/css3.svg', tipo: 'Frontend' },
    { id: 3, name: 'javascript', url: './techs/javascript.svg', tipo: 'Frontend' },
    { id: 4, name: 'typescript', url: './techs/typescript.svg', tipo: 'Frontend' },
    { id: 5, name: 'angular', url: './techs/angular.svg', tipo: 'Frontend' },
    { id: 6, name: 'react', url: './techs/react.svg', tipo: 'Frontend' },
    { id: 7, name: 'bootstrap', url: './techs/bootstrap.svg', tipo: 'Frontend' },
    { id: 8, name: 'tailwind', url: './techs/tailwind.svg', tipo: 'Frontend' },

    // Backend
    { id: 9, name: 'java', url: './techs/java.svg', tipo: 'Backend' },
    { id: 10, name: 'spring-boot', url: './techs/spring-boot.svg', tipo: 'Backend' },

    // DB
    { id: 11, name: 'mysql', url: './techs/mysql.svg', tipo: 'DB' },
    { id: 12, name: 'postgresql', url: './techs/postgresql.svg', tipo: 'DB' },
    { id: 13, name: 'oracle', url: './techs/oracle-svgrepo-com.svg', tipo: 'DB' },

    // Game Dev.
    { id: 14, name: 'c--', url: './techs/c--.svg', tipo: 'Game Dev.' },
    { id: 15, name: 'unity', url: './techs/unity-svgrepo-com.svg', tipo: 'Game Dev.' },

    // IDE
    { id: 16, name: 'visual-studio', url: './techs/visual-studio-code-svgrepo-com.svg', tipo: 'IDE' },
    { id: 17, name: 'apache-netbeans', url: './techs/apache-netbeans.svg', tipo: 'IDE' },
  ];
}
export interface Tecnologias {
  id: number,
  name: string,
  url: string,
  tipo: string,

}
