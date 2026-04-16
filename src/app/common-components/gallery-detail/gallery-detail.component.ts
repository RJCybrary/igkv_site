import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gallery-detail',
  standalone: false,
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss'],
})
export class GalleryDetailComponent {
  showvcmenu: boolean = false;
  isLoading:boolean = false;
  showbanner: boolean = false;
  constructor(
    private ds: DataService,
    private activateroute: ActivatedRoute,
    private route: Router
  ) {}
unit_id:any = 0;
  gallery_main_id: any;
  gallery_Details: any;
  bannerImg:String=environment.PhotoUrl + 'about-gallery-banner.jpg';
  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((result) => {
      this.gallery_main_id = result.get('id');
      const currentUrl = this.route.url;
      if (currentUrl.includes('vc-gallery/details/')) {
        this.showvcmenu = true;
      } else {
        this.showvcmenu = false;
      }
      if (currentUrl.includes('/college-home/')) {
        const segments = currentUrl.split('/'); // Split the URL into parts
    const id = segments[segments.length - 3]; // Get the second-to-last segment
    this.unit_id = id
        this.showbanner = false;
      } else {
        this.showbanner = true;
      }
      if (currentUrl.includes('/kvk-home/')) {
        const segments = currentUrl.split('/'); // Split the URL into parts
    const id = segments[segments.length - 3]; // Get the second-to-last segment
    this.unit_id = id
        this.showbanner = false;
      } 
      this.getGalleryDetails();
    });
  }

  getGalleryDetails() {
    this.isLoading = true;
    this.ds
      .postapi(`ActivityList/galleryDetails/${this.unit_id}/${this.gallery_main_id}`, null)
      .subscribe((result: any) => {
        
        // Check if GallaryDetail exists and has items
        if (result && result.GallaryDetail && result.GallaryDetail.length > 0) {
          this.gallery_Details = result.GallaryDetail[0];
          this.isLoading = false;
        } else {
          this.gallery_Details = [];
          this.isLoading = false;
        }
      }, (error) => {
        console.error('Error fetching gallery details', error);
      });
  }
  

  openLightbox(index: number): void {
    // open lightbox
    // this.lightbox.open(this.images, index);
  }
}
