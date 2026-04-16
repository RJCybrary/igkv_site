import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-overview',
  standalone: false,
  templateUrl: './about-overview.component.html',
  styleUrls: ['./about-overview.component.scss']
})
export class AboutOverviewComponent {
constructor(private ds:DataService){}

bannerIMG:String=environment.PhotoUrl +'about-overview-banner.jpg';
university_data:any;
contact_detail:any;

ngOnInit(): void {
  this.getdata();
}


getdata(){
  this.ds.postapi('OverviewUniversity',null).subscribe((result:any)=>{
    if(result){
      this.university_data=result[0];
    } else{
      this.university_data=[];
    }
  },(error)=>{
    console.error('Error fetching university data', error);
  })
}
}
