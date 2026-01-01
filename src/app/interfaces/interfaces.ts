export interface Certifiport {

  title: string,
  img: string
  date: string,

}

export interface Idiomas {
  icono: string,

  name: string,
  nivel: string
}

  export interface Project {
    name: string,
    src: string,
    background_class: string,
    descripcion: string,
    url: string,
    startTime: number,
    techs: string[]
  }

export interface Tecnologias {
  id: number;
  name: string;
  url: string;
  tipo: string;
  value: number;
  descripcion: string;
}


export interface BubbleNode {
  x: number;
  y: number;
  r: number;
  fill: string;
  name: string;
  url: string;
  tipo: string;
}
