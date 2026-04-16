import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admission-faq',
  standalone: false,
  templateUrl: './admission-faq.component.html',
  styleUrls: ['./admission-faq.component.scss'],
})
export class AdmissionFaqComponent {
  panelOpenState = false;
  bannerImg:string=environment.PhotoUrl + 'academic-FAQ_banner.jpg';
}
