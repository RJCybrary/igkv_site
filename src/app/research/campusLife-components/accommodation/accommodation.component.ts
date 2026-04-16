import { Component, Input} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accommodation',
  standalone: false,
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent   {

  bannerImg:string=environment.PhotoUrl + 'StudentStudentWelfare-Accomodation-banner.jpg';

  VisionImg1:string=environment.PhotoUrl + 'StudentStudentWelfare-Accomodation-Vission-1.JPG';
  VisionImg2:string=environment.PhotoUrl + 'StudentStudentWelfare-Accomodation-Vission-2.JPG';
  VisionImg3:string=environment.PhotoUrl + 'StudentStudentWelfare-Accomodation-Vission-3.JPG';
  VisionImg4:string=environment.PhotoUrl + 'StudentStudentWelfare-Accomodation-Vission-4.JPG';

  GirlsHostelImage:string=environment.PhotoUrl + 'StudentStudentWelfare-Accomodation-OurHostel-Girl_Hostel_front_Image.JPG';
  BoysHostelImage:string=environment.PhotoUrl + 'StudentWelfare-Accomodation-OurHostel-BoysHostelFront_Image.jpg';
  @Input() banner_video: string=environment.VideoUrl + '';
  @Input() banner_heading: string="Our Hostels";



}
