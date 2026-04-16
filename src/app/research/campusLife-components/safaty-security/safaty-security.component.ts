import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-safaty-security',
  standalone: false,
  templateUrl: './safaty-security.component.html',
  styleUrls: ['./safaty-security.component.scss']
})
export class SafatySecurityComponent {

  bannerImg:String=environment.PhotoUrl + 'StudentWelfare-SafetySecurity-banner.jpeg';
  AccessControlImg:String=environment.PhotoUrl +'Camera_001.jpg';
  univ_survellance:String=environment.PhotoUrl + 'Camera_001.jpg';
  SurvellanceImg:String=environment.PhotoUrl + 'StudentWelfare-SafetySecurity-camera_monitoring_img.jpg';
  SecurityOfc:String=environment.PhotoUrl +'StudentWelfare-SafetySecurity-Office.JPG';
  Security24hrs:String=environment.PhotoUrl + 'StudentWelfare-SafetySecurity-24-hours.png';
  Fire_Extinguisher_Image:string=environment.PhotoUrl + 'Fire_extinguisher.jpg';
  Main_gate_igkv:string= environment.PhotoUrl + 'igkv_gate_image.jpg';
  security_1:any=environment.PhotoUrl + 'Security_1.JPG';
  security_2:any=environment.PhotoUrl + 'Security_2.JPG';
  security_3:any=environment.PhotoUrl + 'Security_3.JPG';
  

  Friendly_Images = [
    { src: environment.PhotoUrl + 'Security_3.JPG', },
  ];

  Committed_Images = [
    { src: environment.PhotoUrl + 'Security_1.JPG', },
  ];

  CCTV_Images = [
    { src:environment.PhotoUrl + 'Camera_1.jpg', },
  ];

  Available_Images = [
    { src: environment.PhotoUrl + 'Security_2.JPG', },

  ];

  currentSlide = 0;

  ngOnInit() {

    setInterval(() => this.nextSlide(), 3000);

  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.CCTV_Images.length;
  }

}
