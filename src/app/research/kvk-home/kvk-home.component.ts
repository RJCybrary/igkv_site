import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kvk-home',
  standalone: false,
  templateUrl: './kvk-home.component.html',
  styleUrls: ['./kvk-home.component.scss']
})
export class KvkHomeComponent {

  constructor(private ds:DataService){}

  // banner_img: any='assets/about/about-image.jpg';
  kvkoverview:any
  kvklist:any;
  AllCollegeIcon: string = environment.PhotoUrl + 'kvk_background.jpg';
  bookIconImg: string = environment.PhotoUrl + 'home-book-icon.png';
  kvk_icon:any=environment.PhotoUrl + 'kvk_org.png';
  bannerImg:String=environment.PhotoUrl + 'Extension-KVK-banner.jpg';
  
  ngOnInit(): void {
    this.getKvklist()
  }
  
  getKvkOverview(){
    this.ds.postapi('kvk/overview',null).subscribe((result:any)=>{
      this.kvkoverview = result.getKVKOverView[0].Overview;
    })

  }



  getKvklist() {
    this.ds.postapi('kvk/kvklist', null).subscribe((result: any) => {
      if (result ) {
       
        this.kvklist = result;
        this.kvklist = this.kvklist.map((kvk: { office_name: string; }) => {
          const officeParts = kvk.office_name.split(',');
          return {
            ...kvk,
            officeName: officeParts[0].trim(),  // "Krishi Vigyan Kendra"
            districtName: officeParts[1] ? officeParts[1].trim() : ''  // "Bilaspur"
          };
        });
      } else {
        this.kvklist = [];
      }
    }, (error) => {
      console.error('Error fetching kvk list', error);
    });
  }
  


}
