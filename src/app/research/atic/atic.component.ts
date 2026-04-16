import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-atic',
  standalone: false,
  templateUrl: './atic.component.html',
  styleUrls: ['./atic.component.scss']
})
export class AticComponent {

  bannerImg:string=environment.PhotoUrl + 'Extension-ATIC_banner.jpg';
}
