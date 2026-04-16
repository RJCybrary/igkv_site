import { Component,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-clg-infrastruture-type',
  standalone: false,
  templateUrl: './clg-infrastruture-type.component.html',
  styleUrls: ['./clg-infrastruture-type.component.scss']
})
export class ClgInfrastrutureTypeComponent {
  @Input() infra_List:any;
  @Input() office_id:any;
  currentUrl!:string;
  infraList:any;
  office_id_clg:any;
  shown_all:boolean = false;
  errorImage:any=environment.PhotoUrl + 'no_image_available_1.jpg';

  constructor(private ds:DataService,private activateroute: ActivatedRoute,private route:Router){}


  ngOnInit(){
    this.activateroute.paramMap.subscribe(result=>{
    this.office_id_clg =  result.get('id') ?? ''
    this.currentUrl = this.route.url;
    if (this.currentUrl.includes('/cont/infrastruturetype/')) {
      this.shown_all = true;
      this.getInfraStructure(this.office_id_clg);
    }
    })
  }

  OnErrorImage(event:any){
    event.target.src=this.errorImage
  }

  getInfraStructure(id:string){
    this.ds.postapi(`officeInfrastrucutre/${id}`,null).subscribe((result:any)=>{
      if(result){
        this.infra_List = result;
      }else{
        this.infra_List = [];
      }
    },(error)=>{
      console.error('Error fetching infrastruture', error);
    })
  }
  


}
