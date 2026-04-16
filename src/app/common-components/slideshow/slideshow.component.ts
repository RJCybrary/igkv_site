import { Component,OnInit,Input } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-slideshow',
  standalone: false,
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  @Input() banner: any;
  banner_data!: any;

  ngOnInit(): void {
    this.banner_data = this.banner;
    
    // this.startImageSlideshow();
    // $(document).ready(function() {
    //   var navbar = $('#navbar');
    //   var position = $(window).scrollTop() ?? 0;
    
    //   $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    
    //     if (scroll !== undefined && scroll > position!) {
    //       // Scrolling down
    //       navbar.addClass('transparent');
    //       navbar.removeClass('white');
    //     } else {
    //       // Scrolling up
    //       if (scroll !== undefined && scroll <= 0) {
    //         navbar.removeClass('transparent');
    //       } else {
    //         navbar.addClass('white');
    //       }
    //     }
    
    //     position = scroll!;
    //   });
    // });
    
  }

  // imageSources: string[] = [
  //   this.banner_data
  // ];

  // currentImageIndex = 0;
  // currentImageUrl = this.imageSources[this.currentImageIndex];

  // startImageSlideshow(): void {
  //   setInterval(() => {
  //     this.currentImageIndex = (this.currentImageIndex + 1) % this.imageSources.length;
  //     this.currentImageUrl = this.imageSources[this.currentImageIndex];
  //   }, 4000); // Change image every 3 seconds (adjust the duration as needed)
  // }

}
