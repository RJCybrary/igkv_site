import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clg-banner',
  standalone: false,
  templateUrl: './clg-banner.component.html',
  styleUrls: ['./clg-banner.component.scss']
})
export class ClgBannerComponent {
  @Input() clgbanner: any ='';

  // clgbanner:any=environment.PhotoUrl + 'about-Administrative-member-banner.jpg';
  currentBannerIndex = 0; 
  displayedBanner = ''; 
  isSlider: boolean = true; 
  slideInterval: any; 

  ngOnInit(): void {
    if (Array.isArray(this.clgbanner)) {
      // Handle array of images
      this.isSlider = true;
      if (this.clgbanner.length > 0) {
        this.displayedBanner = this.clgbanner[this.currentBannerIndex]?.Column1 || '';
        this.autoSlide();
      }
    } else if (typeof this.clgbanner === 'string' && this.clgbanner !== 'https://igkv.ac.in/') {
      // Handle single image string
      this.isSlider = false;
      this.displayedBanner = environment.PhotoUrl + 'about-Administrative-member-banner.jpg';
    } else {
      this.displayedBanner = environment.PhotoUrl + 'about-Administrative-member-banner.jpg';
      this.isSlider = false;
    }
  }

  // Automatically cycle through banners every 3 seconds if clgbanner is an array
  autoSlide(): void {
    if (this.isSlider) {
      this.slideInterval = setInterval(() => {
        this.nextBanner();
      }, 3000); // Adjust interval as needed
    }
  }

  nextBanner(): void {
    if (this.isSlider) {
      this.currentBannerIndex = (this.currentBannerIndex + 1) % this.clgbanner.length;
      this.displayedBanner = this.clgbanner[this.currentBannerIndex]?.Column1 || '';
    }
  }
  
  prevBanner(): void {
    if (this.isSlider) {
      this.currentBannerIndex = (this.currentBannerIndex - 1 + this.clgbanner.length) % this.clgbanner.length;
      this.displayedBanner = this.clgbanner[this.currentBannerIndex]?.Column1 || '';
    }
  }
  
  // Clear interval on component destroy
  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

}
