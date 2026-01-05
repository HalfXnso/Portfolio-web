import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as d3 from 'd3';
import { BubbleNode, Tecnologias } from '../interfaces/interfaces';
import { Techs } from '../services/techs';
@Component({
  selector: 'app-known-techs',
  imports: [CommonModule, FormsModule],
  templateUrl: './known-techs.html',
  styleUrl: './known-techs.css',
})

export class KnownTechs implements OnInit {

  @ViewChild('techModal') modalRef!: ElementRef<HTMLDialogElement>;
  usedTech: Tecnologias | null = null;
  tecnologias: Tecnologias[] = [];
  tecnologiasFiltradas: Tecnologias[] = [];
  nodes: BubbleNode[] = [];
  strokeSize = 1;
  categoriaSeleccionada = 'todos';
  categorias = [
    { titulo: 'Frontend', tipo: 'Frontend' },
    { titulo: 'Backend', tipo: 'Backend' },
    { titulo: 'Extra', tipo: 'Game Dev.' },
    { titulo: 'IDE', tipo: 'IDE' },
    { titulo: 'Others', tipo: 'Others' },
  ];
  /* Colores de la gráfica, cambiar cuando sea necesario */
  colors = [
    'text-pink-400/40',
    'text-violet-500/40',
    'text-lime-500/40',
    'text-sky-400/40',
    'text-orange-400/40',
  ];

  constructor(private techService: Techs) { }

  ngOnInit(): void {
    this.getTechs();
  }

  openModal(tech: any) {

    this.tecnologias.forEach(tecnologia => {
      if (tecnologia.name == tech.name) {
        this.usedTech = tecnologia;
      }
    });

    this.modalRef.nativeElement.showModal();

  }

  closeModal() {
    this.usedTech = null;
    this.modalRef.nativeElement.close();
    console.log(this.usedTech);
  }

  getTechs() {
    this.tecnologias = this.techService.getTechs();
    this.tecnologiasFiltradas = this.tecnologias;
    this.createChart();
  }

  private createChart(): void {
    const color = d3.scaleOrdinal<string>()
      .domain(['Frontend', 'Backend', 'DB', 'Game Dev.', 'IDE', 'Others'])
      .range([
        'frontend',
        'backend',
        'db',
        'game-dev',
        'ide',
        'version-control'
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


