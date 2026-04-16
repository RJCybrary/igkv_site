import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-int-pre-arrival',
  standalone: false,
  templateUrl: './int-pre-arrival.component.html',
  styleUrls: ['./int-pre-arrival.component.scss']
})
export class IntPreArrivalComponent {
  bannerImg:string=environment.PhotoUrl + 'International-PreArrivalInformation.jpg';
}
