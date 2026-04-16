import { Component } from '@angular/core';

@Component({
  selector: 'app-college-overview-common',
  standalone: false,
  templateUrl: './college-overview-common.component.html',
  styleUrls: ['./college-overview-common.component.scss']
})
export class CollegeOverviewCommonComponent {

  images = [
    { src: 'assets/images/imgs/001--bg-img.jpg', description: 'Description for Image 1' },
    { src: 'assets/images/imgs/clg.JPG', description: 'Description for Image 2' },
    // Add more images as needed
  ];
  currentSlide = 0;

  ngOnInit(): void {
    setInterval(() => this.nextSlide(), 3000); // Change 2000 to the desired interval in milliseconds
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }
}
