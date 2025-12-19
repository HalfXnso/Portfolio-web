import { Component } from '@angular/core';

@Component({
  selector: 'app-known-techs',
  imports: [],
  templateUrl: './known-techs.html',
  styleUrl: './known-techs.css',
})
export class KnownTechs {

  tecnologias: Tecnologias[] = [
    { id: 1, name: 'angular', url: './techs/angular.svg', tipo: 'Frontend' },
    { id: 2, name: 'apache-netbeans', url: './techs/apache-netbeans.svg', tipo: 'IDE' },
    { id: 3, name: 'bootstrap', url: './techs/bootstrap.svg', tipo: 'Frontend' },
    { id: 4, name: 'c--', url: './techs/c--.svg', tipo: 'Game Dev.' },
    { id: 5, name: 'css3', url: './techs/css3.svg', tipo: 'Frontend' },
    { id: 6, name: 'html-5', url: './techs/html-5.svg', tipo: 'Frontend' },
    { id: 7, name: 'java', url: './techs/java.svg', tipo: 'Backend' },
    { id: 8, name: 'javascript', url: './techs/javascript.svg', tipo: 'Frontend' },
    { id: 9, name: 'mysql', url: './techs/mysql.svg', tipo: 'DB' },
    { id: 10, name: 'oracle-svgrepo-com', url: './techs/oracle-svgrepo-com.svg', tipo: 'DB' },
    { id: 11, name: 'postgresql', url: './techs/postgresql.svg', tipo: 'DB' },
    { id: 12, name: 'react', url: './techs/react.svg', tipo: 'Frontend' },
    { id: 13, name: 'spring-boot', url: './techs/spring-boot.svg', tipo: 'Backend' },
    { id: 14, name: 'tailwind', url: './techs/tailwind.svg', tipo: 'Frontend' },
    { id: 15, name: 'typescript', url: './techs/typescript.svg', tipo: 'Frontend' },
    { id: 16, name: 'unity-svgrepo-com', url: './techs/unity-svgrepo-com.svg', tipo: 'Game Dev.' },
    { id: 17, name: 'visual-studio-code-svgrepo-com', url: './techs/visual-studio-code-svgrepo-com.svg', tipo: 'IDE' },
  ];

}
export interface Tecnologias{
id: number,
name: string,
url: string,
tipo: string,

}
