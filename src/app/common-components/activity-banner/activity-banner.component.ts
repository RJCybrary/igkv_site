import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-activity-banner',
  standalone: false,
  templateUrl: './activity-banner.component.html',
  styleUrls: ['./activity-banner.component.scss']
})
export class ActivityBannerComponent {

  @Input() banner_img:any=0;
  @Input() banner_heading:any=0;
  @Input() catTitle1:any=0;


  catId:any;
  lastroute:any;

}
