import { Component,Input} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clg-activities',
  standalone: false,
  templateUrl: './clg-activities.component.html',
  styleUrls: ['./clg-activities.component.scss']
})
export class ClgActivitiesComponent {

  @ Input() activity_details:any;
  errorImage: any=environment.PhotoUrl + 'no_image_available_1.jpg';

  onErrorImage(event: any) {
    event.target.src = this.errorImage;
  }
}
