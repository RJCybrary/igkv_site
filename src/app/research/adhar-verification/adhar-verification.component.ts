import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-adhar-verification',
  standalone: false,
  templateUrl: './adhar-verification.component.html',
  styleUrls: ['./adhar-verification.component.scss']
})
export class AdharVerificationComponent {
bannerIMG:String=environment.PhotoUrl +'about-overview-banner.jpg';
}
