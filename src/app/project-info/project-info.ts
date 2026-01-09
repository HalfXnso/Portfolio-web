import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-info',
  imports: [],
  templateUrl: './project-info.html',
  styleUrl: './project-info.css',
})
export class ProjectInfo {
  @Input() projectName?: string;
  @Input() projectDesc?: string;

}
