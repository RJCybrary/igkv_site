import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-des-publication',
  standalone: false,
  templateUrl: './des-publication.component.html',
  styleUrls: ['./des-publication.component.scss']
})
export class DesPublicationComponent {
  publicationType: any;
  publicationList_Data: any;
  loding:boolean=true;
  errorImage:any=environment.PhotoUrl + 'no_image_available.jpg';
  bannerImg:string=environment.PhotoUrl + 'research-publication-banner.jpg';
  bannerHeading!:String;
  constructor(private ds:DataService,private activateroute:ActivatedRoute){}


  
  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result=>{
     this.publicationType = Number(result.get('id'));
      this. getdata();
     })
  }


 getdata() {
  const IGKV_Publication_ID = '';
  const office_id = 101;

  this.ds
    .postapi(
      `publication/publicationList/${this.publicationType},${IGKV_Publication_ID},${office_id}`,
      null
    )
    .subscribe((result: any[]) => {

      if (result && result.length > 0) {
        this.publicationList_Data = result;
        this.bannerHeading = this.publicationList_Data[0]?.Publication_Category_Name_E;
      } else {
        this.publicationList_Data = [];
        switch (this.publicationType) {
          case 1:
            this.bannerHeading = 'Books and Magazines';
            break;

          case 4:
            this.bannerHeading = 'Journals';
            break;

          case 5:
            this.bannerHeading = 'Research Papers';
            break;

          default:
            this.bannerHeading = '';
        }
      }

    });
}


  OnErrorImage(event:any){
    event.target.src=this.errorImage;
  }
}
