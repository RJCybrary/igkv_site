import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-int-visa-guidline',
  standalone: false,
  templateUrl: './int-visa-guidline.component.html',
  styleUrls: ['./int-visa-guidline.component.scss']
})
export class IntVisaGuidlineComponent {
  bannerImg:string=environment.PhotoUrl + 'International-Guidlinesforvisa.jpg';

}
