import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-who-is-who',
  standalone: false,
  templateUrl: './who-is-who.component.html',
  styleUrls: ['./who-is-who.component.scss']
})
export class WhoIsWhoComponent {
  constructor(private ds:DataService){}

  PostList:any;
  bannerUrl:String=environment.PhotoUrl + 'about-overview-banner.jpg';
  ngOnInit(): void {
    this.getdata();
  }
  
  getdata(){
    this.ds.postapi('WhoisWhosPostList',null).subscribe((result:any)=>{
      if(result && result.length>0){
        this.PostList=result;
      } else{
        this.PostList=[];
      }
    },(error)=>{
      console.error('Error fetching who is who data', error);
    })
  }
}


