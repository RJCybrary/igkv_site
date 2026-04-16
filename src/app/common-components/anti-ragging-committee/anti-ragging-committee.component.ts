import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-anti-ragging-committee',
  standalone: false,
  templateUrl: './anti-ragging-committee.component.html',
  styleUrls: ['./anti-ragging-committee.component.scss']
})
export class AntiRaggingCommitteeComponent {

  bannerImg:any=environment.PhotoUrl + 'anti-ragging.jpg';
  English_Circular:any=environment.PhotoUrl + 'Anti_Ragging_Circular_English.pdf';
  Hindi_Circular:any=environment.PhotoUrl + 'Anti_Ragging_Circular_Hindi.pdf';
}
