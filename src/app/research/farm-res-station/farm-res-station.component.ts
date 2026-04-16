import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-farm-res-station',
  standalone: false,
  templateUrl: './farm-res-station.component.html',
  styleUrls: ['./farm-res-station.component.scss']
})
export class FarmResStationComponent {
  constructor(private ds:DataService,private activateroute:ActivatedRoute){}

  bannerImg:String=environment.PhotoUrl + 'Extension-KVK-banner.jpg';
  AllCollegeIcon: string = environment.PhotoUrl + 'kvk_background.jpg';
  kvk_icon:any=environment.PhotoUrl + 'kvk_org.png';


  res_farm:any
  publicationType:any

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result => {
      this.publicationType = result.get('id');

    this.getres_farm()
    })
  }


  
  getres_farm(){
    const office_class_id = this.publicationType
    this.ds.postapi(`getFarm/getResFarm/${office_class_id}`,null).subscribe((result:any)=>{
      if(result && result ){
        this.res_farm = result;
      }else{
        this.res_farm = [];
      }
    },(error)=>{
      console.error('Error fetching kvk list', error);
    })
  }
}
