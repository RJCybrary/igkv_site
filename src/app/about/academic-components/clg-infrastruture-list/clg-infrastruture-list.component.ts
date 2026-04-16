import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-clg-infrastruture-list',
  standalone: false,
  templateUrl: './clg-infrastruture-list.component.html',
  styleUrls: ['./clg-infrastruture-list.component.scss']
})
export class ClgInfrastrutureListComponent {

  office_id!:string;
  infraList:any;
  Institution_setup_type_ID!:string;
  errorImage:any=environment.PhotoUrl + 'no_image_available_1.jpg';

  constructor(private ds:DataService,private activateroute: ActivatedRoute){}

  ngOnInit(){
    this.activateroute.paramMap.subscribe((result) => {
          this.office_id = result.get('id1') ?? '';
          this.Institution_setup_type_ID = result.get('id2') ?? '';
          this.getInfraStructureList(this.office_id,this.Institution_setup_type_ID)
        });
    
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
  OnErrorImage(event:any){
    event.target.src=this.errorImage
  }
}
