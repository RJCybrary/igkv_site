import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-facilities-operations',
  standalone: false,
  templateUrl: './facilities-operations.component.html',
  styleUrls: ['./facilities-operations.component.scss']
})
export class FacilitiesOperationsComponent {
  infra_List_data : any;
  constructor(private router: Router, private ds:DataService) { }
  errorImage:any=environment.PhotoUrl + 'no_image_available_1.jpg';
  bannerImg:string=environment.PhotoUrl + 'StudentWelfare-Facilities&Infra-banner.jpg';


  infraList:any;
  ngOnInit() {
    this.getInfraStructureList(59);
  }
  OnErrorImage(event:any){
    event.target.src=this.errorImage
  }
 

  getInfraStructureList(id:number){
    this.ds.postapi(`officeInfrastrucutre/${id}`,null).subscribe((result:any)=>{
      if(result){
        this.infraList = result;
      } else{
        this.infraList = [];
      }
    },(error)=>{
      console.error('Error fetching infrastructure list', error);
    })
  }
}

