import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gallery-list',
  standalone: false,
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent {

  isLoading:boolean = false;
  galleryfilterId:any;
  galleryList:any;
  galleryyear:any;
  bannerName:any;
  bannerImg:String=environment.PhotoUrl + 'about-gallery-banner.jpg';
  constructor(private ds:DataService, private activateroute:ActivatedRoute,private route:Router){}



  
  ngOnInit(): void{
    this.activateroute.paramMap.subscribe((result) => {
      this.galleryfilterId = result.get('id');
      const currentUrl = this.route.url;
      this.checkUrlForGalleryAndYear(currentUrl);
    });
    
  }
  private checkUrlForGalleryAndYear(url:string) {
    const regex = /gallery.*year/; // Regular expression to match 'gallery' and 'year'
    if (regex.test(url)) {
      this.getGalleryList('', this.galleryfilterId).then(() => {
        this.bannerName = 'Gallery-' + this.galleryfilterId;
      });
    }
    else {
      this.getGalleryList(this.galleryfilterId, '').then(() => {
        this.bannerName = this.galleryList[0].Event_Category_Name_E;
      });
    }
  }
  
  
  getGalleryList(categoryId: any, Year: any): Promise<void> {
    this.isLoading = true;
    const office_id = '' ;
    const category_Id = categoryId;
    const year = Year;
  
    return new Promise((resolve, reject) => {
      this.ds.postapi(`ActivityList/galleryList/${office_id},${category_Id},${year}`, null).subscribe((result: any) => {
       if(result){
        this.galleryList = result;
        this.isLoading = false;
       } else{
         this.galleryList = [];
         this.isLoading = false;
       }
        resolve();
      }, error => {
        reject(error);
      });
    });
  }
  

}
