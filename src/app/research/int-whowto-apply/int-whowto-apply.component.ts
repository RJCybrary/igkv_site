import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-int-whowto-apply',
  standalone: false,
  templateUrl: './int-whowto-apply.component.html',
  styleUrls: ['./int-whowto-apply.component.scss']
})
export class IntWhowtoApplyComponent {
  bannerImg:string=environment.PhotoUrl + 'international-how-to-apply.jpg';
}
