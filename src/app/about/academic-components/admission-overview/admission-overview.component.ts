import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admission-overview',
  standalone: false,
  templateUrl: './admission-overview.component.html',
  styleUrls: ['./admission-overview.component.scss']
})
export class AdmissionOverviewComponent {

  bannerImg:string=environment.PhotoUrl + 'academic-college-banner.jpg';
}
