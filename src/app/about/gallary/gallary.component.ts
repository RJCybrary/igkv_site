import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gallary',
  standalone: false,
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent {

  constructor(private ds:DataService, private activateroute: ActivatedRoute,public router: Router){}

  galleryList:any;
  Office_id:any;
  galleryListYear:any;
  galleryCategory:any;
  bannerImg:string=environment.PhotoUrl + 'about-gallery-banner.jpg';
  isLoading:boolean=false;

  ngOnInit(): void{
    this.activateroute.paramMap.subscribe((result) => {
      this.Office_id = result.get('id');
        this.getGalleryList(this.Office_id);
        this.getGalleryListYear();
        this.getGalleCategoryYear();
    });
    
  }

  getGalleryList(id:any){
    this.isLoading=true;
    const office_id = id;
    const category_Id='';
    const year='';
      this.ds.postapi(`ActivityList/galleryList/${office_id},${category_Id},${year}`,null).subscribe((result:any)=>{
        if(result  ){
          this.galleryList=result;
          this.isLoading=false;
        } 
        else {
          this.galleryList = [];
          this.isLoading=false;
        }
      },(error)=>{
        console.error('Error fetching gallerylist', error);
      })
  }


  getGalleryListYear(){
    this.isLoading=true;
      this.ds.postapi(`ActivityList/gallery_year_list/year`,null).subscribe((result:any)=>{
       if(result){
         this.galleryListYear=result;
         this.isLoading=false;
       }else{
        this.galleryListYear=[];
        this.isLoading=false;
       }
      },(error)=>{
        console.error('Error fetching gallerylistyear', error);
      })
  
  }

  getGalleCategoryYear(){
    this.isLoading=true;
    this.ds.postapi(`ActivityList/gallery_category_list/category`,null).subscribe((result:any)=>{
      if(result && result.length >0){
        this.galleryCategory=result;
        this.isLoading=false;
      }else{
        this.galleryCategory=[];
        this.isLoading=false;
      }
    },(error)=>{
      console.error('Error fetching gallerycategory', error);
    })
}

onSelectyearsmall(event: any) {
  const selectedValue = event.target.value;
  this.router.navigate(['/about/gallery/0/year',selectedValue]);
}


}
