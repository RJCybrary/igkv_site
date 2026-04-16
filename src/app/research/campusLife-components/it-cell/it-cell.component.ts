import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-it-cell',
  standalone: false,
  templateUrl: './it-cell.component.html',
  styleUrls: ['./it-cell.component.scss']
})
export class ItCellComponent  {

  bannerImg:string=environment.PhotoUrl + 'StudentWelfare-IT-Cell-banner.jpg';
  headImg:string=environment.PhotoUrl + 'research-KTRC-HEAD-img.jpg';

  Media_Control_Room = [
    { src: environment.PhotoUrl + 'research-KTRC-media-control-room-img-1.jpeg', description:'Media Control Room'},
    { src: environment.PhotoUrl + 'Media-Control-Room.jpg', description:'Media Control Room'},   
    { src: environment.PhotoUrl + 'research-KTRC-media-control-room-img-1.jpeg', description:'Media Control Room'},
    { src: environment.PhotoUrl + 'Media-Control-Room.jpg', description:'Media Control Room'},   

    // Add more images as needed
  ];

  Developer_Room = [
    { src: environment.PhotoUrl + 'developer-room.jpg', description:'Software Development Lab'},
    { src: environment.PhotoUrl + 'developer_room (1).JPG', description:'Software Development Lab'},
    { src: environment.PhotoUrl + 'developer_room (2).JPG', description:'Software Development Lab'},
    { src: environment.PhotoUrl + 'developer_room (1).JPG', description:'Software Development Lab'},

    // Add more images as needed
  ];

  Sensor_Lab = [
    { src: environment.PhotoUrl + 'Sensor-Lab.jpg',description:'Sensor Lab'},
    { src: environment.PhotoUrl + 'Sensor-Lab.jpg',description:'Sensor Lab'},
    { src: environment.PhotoUrl + 'Sensor-Lab.jpg',description:'Sensor Lab'},
    { src: environment.PhotoUrl + 'Sensor-Lab.jpg',description:'Sensor Lab'},
// Add more images as needed
  ];

  Mini_Theatre = [
    { src: environment.PhotoUrl + 'mini_Theatre.JPG',description:'Mini Theatre'},
    { src: environment.PhotoUrl + 'mini_Theatre (3).JPG',description:'Mini Theatre'},
    { src: environment.PhotoUrl + 'mini_Theatre (2).JPG',description:'Mini Theatre'},
    { src: environment.PhotoUrl + 'mini_Theatre (1).JPG',description:'Mini Theatre'},

   
    // Add more images as needed
  ];

  Digital_Studio = [
    { src: environment.PhotoUrl + 'research-KTRC-Digital-Studio-image.jpg',description:'Digital Studio'},
    { src: environment.PhotoUrl + 'research-KTRC-Digital-Studio-image.jpg',description:'Digital Studio'},
    { src: environment.PhotoUrl + 'research-KTRC-Digital-Studio-image.jpg',description:'Digital Studio'},
    { src: environment.PhotoUrl + 'research-KTRC-Digital-Studio-image.jpg',description:'Digital Studio'},

    // { src: '',description:'Digital Studio'},
    // Add more images as needed
  ];

  Digital_Conference_Room = [
    { src: environment.PhotoUrl+ 'research-KTRC-conference-room-image.jpeg',description:'Digital Conference Room'},
    { src: environment.PhotoUrl+ 'Digital-Conference-Room.jpg',description:'Digital Conference Room'},
    { src: environment.PhotoUrl+ 'research-KTRC-conference-room-image.jpeg',description:'Digital Conference Room'},
    { src: environment.PhotoUrl+ 'Digital-Conference-Room.jpg',description:'Digital Conference Room'},

    // Add more images as needed
  ];

  ImageNotFoundImg:string=environment.PhotoUrl + 'Img_notFound.png';




  currentSlide = 0;

  ngOnInit(){

    setInterval(() => this.nextSlide(), 3000);
    
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.Mini_Theatre.length;
  }

}
