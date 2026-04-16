import { Component,Input,AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-guest-house',
  standalone: false,
  templateUrl: './guest-house.component.html',
  styleUrls: ['./guest-house.component.scss']
})
export class GuestHouseComponent {
  guest_house_img_url: string = environment.PhotoUrl + 'about-Guest-House-banner.jpg';
  office_name:string='Guest House';
  imagenotFound:string=environment.PhotoUrl+'Img_notFound.png';
  Incharge_image:string=environment.PhotoUrl+'Incharge_guest_house.jpg';
  

  onErrorImage(event: any) {
    event.target.src = this.imagenotFound;
  }

  
  @ViewChild('bannerVideo') bannerVideo!: ElementRef<HTMLVideoElement>;
  @Input() banner_video: string=environment.VideoUrl + '';
  @Input() banner_heading: string="Boys Hostel";

  Guest_House_1 = [
    { src: environment.PhotoUrl + 'StudentWelfare-Facility&Infra-Highlights-GuestHouse-1.jpg', description: 'Guest House 1' },
    { src: environment.PhotoUrl + 'StudentWelfare-Facility&Infra-Highlights-GuestHouse-2.jpg', description: 'Guest House 1' },
    // Add more images as needed
  ];

  Guest_House_2 = [
    { src: environment.PhotoUrl + 'StudentWelfare-Facility&Infra-Highlights-GuestHouse-3.jpg', description: 'Guest House 2' },
    { src: environment.PhotoUrl + 'StudentWelfare-Facility&Infra-Highlights-GuestHouse-4.jpg', description: 'Guest House 2' },
    // Add more images as needed
  ];
  Guest_House_3 = [
    { src: environment.PhotoUrl + 'StudentWelfare-Facility&Infra-Highlights-GuestHouse-2.jpg', description: 'Guest House 3' },
    { src: environment.PhotoUrl + '', description: 'Guest House 3' },
    // Add more images as needed
  ];
  Guest_House_4 = [
    { src: environment.PhotoUrl + 'StudentWelfare-Facility&Infra-Highlights-GuestHouse-4.jpg', description: 'Guest House 4' },
    { src: environment.PhotoUrl + '', description: 'Guest House 4' },
    // Add more images as needed
  ];

  ContactImg:string=environment.PhotoUrl + 'StudentWelfare-Facility&Infra-Highlights-GuestHouse-1.jpg';

  GalleryImg1:string=environment.PhotoUrl + 'StudentWelfare-Facility&Infra-Highlights-GuestHouse-1.jpg'; 
  GalleryImg2:string=environment.PhotoUrl + 'StudentWelfare-Facility&Infra-Highlights-GuestHouse-2.jpg';
  GalleryImg3:string=environment.PhotoUrl + 'StudentWelfare-Facility&Infra-Highlights-GuestHouse-3.jpg';
  GalleryImg4:string=environment.PhotoUrl + 'StudentWelfare-Facility&Infra-Highlights-GuestHouse-4.jpg';
  GalleryImg5:string=environment.PhotoUrl + 'guest_house_5.jpg';
  GalleryImg6:string=environment.PhotoUrl + 'guest_house_6.jpg';
  GalleryImg7:string=environment.PhotoUrl + 'guest_house_7.jpg';
  GalleryImg8:string=environment.PhotoUrl + 'guest_house_8.jpg';
  

  currentSlide = 0;

  constructor( private activateroute:ActivatedRoute,private route:Router){}

}
