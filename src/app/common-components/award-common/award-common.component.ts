import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-award-common',
  standalone: false,
  templateUrl: './award-common.component.html',
  styleUrls: ['./award-common.component.scss']
})
export class AwardCommonComponent {
  @Input() award_data: any;
  errorImage:any=environment.PhotoUrl + 'no_image_available.jpg';


  OnErrorImage(event:any){
    event.target.src=this.errorImage;
  }
}
