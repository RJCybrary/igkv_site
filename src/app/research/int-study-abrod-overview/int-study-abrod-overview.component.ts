import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-int-study-abrod-overview',
  standalone: false,
  templateUrl: './int-study-abrod-overview.component.html',
  styleUrls: ['./int-study-abrod-overview.component.scss']
})
export class IntStudyAbrodOverviewComponent {
  bannerImg:string=environment.PhotoUrl + 'International-PreArrivalInformation.jpg';
}
