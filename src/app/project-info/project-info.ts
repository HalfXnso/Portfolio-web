import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-project-info',
  imports: [],
  templateUrl: './project-info.html',
  styleUrl: './project-info.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectInfo {
  @Input() projectName?: string;
  @Input() projectDesc?: string;

}
