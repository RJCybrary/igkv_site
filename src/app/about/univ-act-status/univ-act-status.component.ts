import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-univ-act-status',
  standalone: false,
  templateUrl: './univ-act-status.component.html',
  styleUrls: ['./univ-act-status.component.scss']
})
export class UnivActStatusComponent {

  BannerImg:String=environment.PhotoUrl + 'about-university-acts-banner.jpg';
}
