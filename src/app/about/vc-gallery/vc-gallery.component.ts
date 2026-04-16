import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-vc-gallery',
  standalone: false,
  templateUrl: './vc-gallery.component.html',
  styleUrls: ['./vc-gallery.component.scss']
})
export class VcGalleryComponent {

  constructor(private ds:DataService, private activateroute: ActivatedRoute){}

  galleryList:any;
  Office_id:any;
  galleryListYear:any;
  galleryCategory:any;
  GalleryBanner:string=environment.PhotoUrl + 'vc-gallery-banner.jpg';

  ngOnInit(): void{
    this.activateroute.paramMap.subscribe((result) => {
      this.Office_id = result.get('id');
      this.getGalleCategory();
    });
  }

  getGalleCategory(){
    const emp_id = 1311
    const gallery_main_id = ''
    this.ds.postapi(`viceChancellore/galleryList/${gallery_main_id},${emp_id}`,null).subscribe((result:any)=>{
      this.galleryCategory=result.Response?.GallaryDetail;
    })

}

  
}
