import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as d3 from 'd3';
@Component({
  selector: 'app-known-techs',
  imports: [CommonModule, FormsModule],
  templateUrl: './known-techs.html',
  styleUrl: './known-techs.css',
})

export class KnownTechs implements OnInit {



  ngOnInit(): void {
    this.tecnologiasFiltradas = this.tecnologias;
    this.createChart();
  }

  tecnologiasFiltradas: Tecnologias[] = [];


  categoriaSeleccionada = 'todos';

  categorias = [
    { titulo: 'Frontend', tipo: 'Frontend' },
    { titulo: 'Backend', tipo: 'Backend' },
    { titulo: 'Extra', tipo: 'Game Dev.' },
    { titulo: 'IDE', tipo: 'IDE' }
  ];


  tecnologias: Tecnologias[] = [
    // Frontend
    { id: 1, name: 'html-5', url: './techs/html-5.svg', tipo: 'Frontend', value: 40, descripcion: '' },
    { id: 2, name: 'css3', url: './techs/css3.svg', tipo: 'Frontend', value: 38, descripcion: '' },
    { id: 3, name: 'javascript', url: './techs/javascript.svg', tipo: 'Frontend', value: 45, descripcion: '' },
    { id: 4, name: 'typescript', url: './techs/typescript.svg', tipo: 'Frontend', value: 42, descripcion: '' },
    { id: 5, name: 'angular', url: './techs/angular.svg', tipo: 'Frontend', value: 50, descripcion: '' },
    { id: 6, name: 'react', url: './techs/react.svg', tipo: 'Frontend', value: 32, descripcion: '' },
    { id: 7, name: 'bootstrap', url: './techs/bootstrap.svg', tipo: 'Frontend', value: 30, descripcion: '' },
    { id: 8, name: 'tailwind', url: './techs/tailwind.svg', tipo: 'Frontend', value: 36, descripcion: '' },
    { id: 9, name: 'figma', url: './techs/figma.svg', tipo: 'Frontend', value: 28, descripcion: '' },

    // Backend
    { id: 10, name: 'java', url: './techs/java.svg', tipo: 'Backend', value: 80, descripcion: '' },
    { id: 11, name: 'spring-boot', url: './techs/spring-boot.svg', tipo: 'Backend', value: 38, descripcion: '' },

    // DB
    { id: 12, name: 'mysql', url: './techs/mysql.svg', tipo: 'DB', value: 35, descripcion: '' },
    { id: 13, name: 'postgresql', url: './techs/postgresql.svg', tipo: 'DB', value: 33, descripcion: '' },
    { id: 14, name: 'oracle', url: './techs/oracle-svgrepo-com.svg', tipo: 'DB', value: 26, descripcion: '' },

    // Game Dev.
    { id: 15, name: 'c--', url: './techs/c--.svg', tipo: 'Game Dev.', value: 22, descripcion: '' },
    { id: 16, name: 'unity', url: './techs/unity-svgrepo-com.svg', tipo: 'Game Dev.', value: 24, descripcion: '' },

    // IDE
    { id: 17, name: 'visual-studio', url: './techs/visual-studio-code-svgrepo-com.svg', tipo: 'IDE', value: 45, descripcion: '' },
    { id: 18, name: 'apache-netbeans', url: './techs/apache-netbeans.svg', tipo: 'IDE', value: 30, descripcion: '' },
  ];



  colors = [
    'text-pink-400/40',
    'text-violet-500/40',
    'text-lime-500/40',
    'text-sky-400/40',
    'text-orange-400/40',
  ];

  nodes: BubbleNode[] = [];
  strokeSize = 1;


  private createChart(): void {
    const color = d3.scaleOrdinal<string>()
      .domain(['Frontend', 'Backend', 'DB', 'Game Dev.', 'IDE'])
      .range([
        'text-sky-400',
        'text-lime-400',
        'text-orange-400',
        'text-pink-400',
        'text-violet-400',
      ]);

    const pack = d3
      .pack<any>()
      .size([1000, 1000])
      .padding(12);

    const root = pack(
      d3
        .hierarchy({ children: this.tecnologiasFiltradas })
        .sum((d: any) => d.value)
    );

    this.nodes = root.leaves().map((d: any) => ({
      x: d.x,
      y: d.y,
      r: d.r,
      fill: color(d.data.tipo) as string,
      name: d.data.name,
      url: d.data.url,
      tipo: d.data.tipo,
    }));

  }


  getTechByTipo(tipo: string) {
    if (tipo === 'todos') return this.tecnologias;
    return this.tecnologias.filter(tech => tech.tipo === tipo);
  }
  onCategoriaChange(tipo: string) {
    this.tecnologiasFiltradas = this.getTechByTipo(tipo);

    this.nodes = [];
    setTimeout(() => this.createChart(), 0);
  }
}
export interface Tecnologias {
  id: number;
  name: string;
  url: string;
  tipo: string;
  value: number; // 1–5 o 1–10
  descripcion: string;
}




interface BubbleNode {
  x: number;
  y: number;
  r: number;
  fill: string;
  name: string;
  url: string;
  tipo: string;
}
