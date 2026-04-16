import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-int-post-arrival',
  standalone: false,
  templateUrl: './int-post-arrival.component.html',
  styleUrls: ['./int-post-arrival.component.scss']
})
export class IntPostArrivalComponent {
  bannerImg:string=environment.PhotoUrl + 'International-PreArrivalInformation.jpg';
}
