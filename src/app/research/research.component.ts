import { Component } from '@angular/core';

@Component({
  selector: 'app-research',
  standalone: false,
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent {
  onActivate(){
    window.scrollTo(0, 0);
  }
}
