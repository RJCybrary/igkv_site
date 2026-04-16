import { Component,Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kvk-overview-common',
  standalone: false,
  templateUrl: './kvk-overview-common.component.html',
  styleUrls: ['./kvk-overview-common.component.scss']
})
export class KvkOverviewCommonComponent {
@ Input() kvkoverview:any;
SliderImage: any=environment.PhotoUrl + 'academic-Fee-Structure-Banner.jpg';

  images = [
    { src: 'assets/images/academic/agriculture.jpg', description: 'Kvk' },
    { src: 'assets/images/academic/college.jpg', description: 'Kvk' },
  ];
  currentSlide = 0;

  ngOnInit(): void {
  
    setInterval(() => this.nextSlide(), 3000); // Change 2000 to the desired interval in milliseconds
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }
}
