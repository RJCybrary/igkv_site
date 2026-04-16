import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-facilities-infrastructure-details',
  standalone: false,
  templateUrl: './facilities-infrastructure-details.component.html',
  styleUrls: ['./facilities-infrastructure-details.component.scss']
})
export class FacilitiesInfrastructureDetailsComponent {

  office_id!:string;
  Institution_setup_type_ID!:string;
  infraListDetails:any;
  infraList:any;
  Institution_Setup_main_id!:string;
  errorImage:any=environment.PhotoUrl + 'no_image_available_1.jpg';

  constructor(private activateroute: ActivatedRoute,public router: Router,private ds:DataService) {}

  currentSlide = 0;

  ngOnInit(){
    this.activateroute.paramMap.subscribe((result) => {
          this.office_id = result.get('id1') ?? '';
          this.Institution_setup_type_ID = result.get('id2') ?? '';
          this.Institution_Setup_main_id = result.get('id3') ?? '';
          this.getInfraStructureListDetails(this.office_id,this.Institution_setup_type_ID,this.Institution_Setup_main_id)
          this.getInfraStructureList(this.office_id,this.Institution_setup_type_ID )
        });
    setInterval(() => this.nextSlide(), 2500);
    
  }

  getInfraStructureListDetails(id1:string,id2:string,id3:string){
    this.ds.postapi(`officeInfrastrucutre/listdetails/${id1},${id2},${id3}`,null).subscribe((result:any)=>{
      if(result){
        this.infraListDetails = result;
      } else{
        this.infraListDetails = [];
      }
    },(error)=>{
      console.error('Error fetching infrastructure details', error);
    })
  }

  getInfraStructureList(id1:string,id2:string){
    this.ds.postapi(`officeInfrastrucutre/details/${id1},${id2}`,null).subscribe((result:any)=>{
      if(result){
        this.infraList = result;
      } else{
        this.infraList = [];
      }
    },(error)=>{
      console.error('Error fetching infrastructure details', error);
    })
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.infraListDetails.length;
  }
  bannerImg:string=environment.PhotoUrl + 'StudentWelfare-Facilities&Infra-banner.jpg';
 

  OnErrorImage(event:any){
    event.target.src=this.errorImage
  }
 




}
