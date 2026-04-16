import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-office-carousel',
  standalone: false,
  templateUrl: './office-carousel.component.html',
  styleUrls: ['./office-carousel.component.scss']
})
export class OfficeCarouselComponent implements OnChanges {

  @Input() carousel_heading: string = 'Default Heading';
  @Input() carousel_img: string = 'default-image.jpg';

  // Default images if input is not provided
  imageUrl!: string;
  default_image: string = 'assets/slider_image.JPG';

  slides = [
    {
      image: this.imageUrl,
      title: 'Default Title',
      description: 'Some representative placeholder content for the first slide.',
      interval: 1500,
    }
  ];

  // Lifecycle hook to detect changes in the @Input() properties /* important */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['carousel_heading'] || changes['carousel_img']) {
      this.slides = [
        {
          image: this.carousel_img || this.imageUrl,  // Use input or fallback image
          title: this.carousel_heading || 'Default Title',
          description: 'Some representative placeholder content for the updated slide.',
          interval: 1500,
        },
        {
          image: this.default_image,  // Use input or fallback image
          title: this.carousel_heading || 'Default Title',
          description: 'Some representative placeholder content for the updated slide.',
          interval: 1500,
        }
      ];
    }
  }
}
