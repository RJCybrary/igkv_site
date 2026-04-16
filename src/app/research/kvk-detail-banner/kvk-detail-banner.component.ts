import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kvk-detail-banner',
  standalone: false,
  templateUrl: './kvk-detail-banner.component.html',
  styleUrls: ['./kvk-detail-banner.component.scss']
})
export class KvkDetailBannerComponent implements OnInit, OnDestroy {
  @Input() kvkbanner: any; // Can be a string (single image) or an array (multiple images)
  currentBannerIndex = 0; // Tracks current index in the slider
  displayedBanner = ''; // The banner currently displayed
  isSlider: boolean = true; // To check if it's a slider or a single image
  slideInterval: any; // For storing the interval reference

  //   kvkbanner = [
  //   'https://igkv.ac.in/_Attachment/web/basic/1029Unit_Photo20231130023825836.jpeg',
  //   'https://igkv.ac.in/_Attachment/web/basic/1033Unit_Photo20231201012922572.jpeg',
  // ];
	

  ngOnInit(): void {
    
    // Check if kvkbanner is an array or a string and handle accordingly
    if (Array.isArray(this.kvkbanner)) {
      // Handle array of images
      this.isSlider = true;
      if (this.kvkbanner.length > 0) {
        this.displayedBanner = this.kvkbanner[this.currentBannerIndex]?.Column1 || '';
        this.autoSlide();
      }
    } else if (typeof this.kvkbanner == 'string' && this.kvkbanner !== 'https://igkv.ac.in/') {
      // Handle single image string
      this.isSlider = false;
      this.displayedBanner = environment.PhotoUrl +'academic-Fee-Structure-Banner.jpg';
    }else{
      this.displayedBanner = environment.PhotoUrl +'academic-Fee-Structure-Banner.jpg';
      this.isSlider = false;
    }
  }

  // Automatically cycle through banners every 3 seconds if kvkbanner is an array
  autoSlide(): void {
    if (this.isSlider) {
      this.slideInterval = setInterval(() => {
        this.nextBanner();
      }, 3000); // Adjust interval as needed
    }
  }

  // Move to the next banner (for array case)
  nextBanner(): void {
    if (this.isSlider) {
      this.currentBannerIndex = (this.currentBannerIndex + 1) % this.kvkbanner.length;
      this.displayedBanner = this.kvkbanner[this.currentBannerIndex]?.Column1 || '';
    }
  }

  // Move to the previous banner (for array case)
  prevBanner(): void {
    if (this.isSlider) {
      this.currentBannerIndex = (this.currentBannerIndex - 1 + this.kvkbanner.length) % this.kvkbanner.length;
      this.displayedBanner = this.kvkbanner[this.currentBannerIndex]?.Column1 || '';
    }
  }


  // Clear interval on component destroy
  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}
