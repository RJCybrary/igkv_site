import { Component,Input, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-activity-common',
  standalone: false,
  templateUrl: './activity-common.component.html',
  styleUrls: ['./activity-common.component.scss']
})
export class ActivityCommonComponent implements OnInit{
  
@ Input() activity_details:any;
errorImage: any=environment.PhotoUrl + 'no_preview_image.png';

ngOnInit(): void {
}

OnErrorImage(event: any) {
  event.target.src = this.errorImage;
}
}
