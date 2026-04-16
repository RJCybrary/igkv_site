import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kvk-training',
  standalone: false,
  templateUrl: './kvk-training.component.html',
  styleUrls: ['./kvk-training.component.scss']
})
export class KvkTrainingComponent {
  Office_id: any;
  Activities_data: any;
  Title: any;


  constructor(private ds:DataService, private activateroute:ActivatedRoute,private route:Router,){}

  ngOnInit() {
    this.activateroute.paramMap.subscribe(result => {
      this.Office_id = result.get('id');
      if(this.Office_id > 0){
        this.Title = 'Training'
      }
      this.getActivitiesdetails();
  })
  }

  bannerImg:String=environment.PhotoUrl + 'academic-college-banner.jpg';


  getActivitiesdetails(){
    const Unit_ID = this.Office_id;
    const section_id ='';
    const category_id=15;
    const emp_id ='';
    const Website_Content_ID ='';
      this.ds.postapi(`ActivityList/${Unit_ID},${section_id},${category_id},${emp_id},${Website_Content_ID}`,null).subscribe((result:any)=>{
        if(result && result.length >0){
          this.Activities_data=result;
          
        }else{
          this.Activities_data = [];
        }
      },(error)=>{
        console.error('Error fetching activities', error);
      })
  } 


}
