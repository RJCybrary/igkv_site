import { Component,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';




@Component({
  selector: 'app-fld',
  standalone: false,
  templateUrl: './fld.component.html',
  styleUrls: ['./fld.component.scss']
})
export class FldComponent {
  totalrecords!: number;
  currentPages: number = 1; 
  @Input()rowsPerPage: number = 9; 
  Title:any;
  Activities_Id:any;
  loding:boolean=true;
  Unit_ID:any;
  Activities_data:any;
  bannerImg:String=environment.PhotoUrl + 'academic-college-banner.jpg';
  
  constructor(private ds:DataService, private activateroute:ActivatedRoute,private route:Router,private cms:CommonService){}
 
  ngOnInit() {
    this.activateroute.paramMap.subscribe(result => {
      this.Activities_Id = result.get('id');
      if(this.Activities_Id == 15){
        this.Title='Training'
      }else{
        this.Title='Frontline Demonstration'
      }
      this.loding=false;
      this.getActivitiesdetails(this.Activities_Id,0,'')

  })
  }

  getActivitiesdetails(id:any,pageNumber: number,search_data:string){
    const Unit_ID = '';
    const section_id ='';
    const category_id=id;
    const emp_id ='';
    const Website_Content_ID ='';
    const Content_Title = search_data || ''; 
    const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
    const adjustedStartRowFrom = Math.max(0, startRowFrom);
    const queryString = `${Unit_ID},${section_id},${category_id},${emp_id},${Website_Content_ID},${Content_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;
  
    this.ds.postapi(`ActivityList/paging/${queryString}`, null).subscribe((result:any)=>{
        if(result){
          this.totalrecords = result.totaldata;
          this.Activities_data=result?.data;
          
        }else{
          this.Activities_data = [];
        }
        this.loding=false;
      })
  } 

  setdetails(){
    if(this.Activities_Id == 15){
      this.cms.setCatData(this.Title,this.Title,this.Activities_Id,'/research/training/')
    }else{
      this.cms.setCatData(this.Title,this.Title,this.Activities_Id,'/research/fld/')
    }
  }

  onPageChanged(newPage: number): void {
    this.currentPages = newPage; 
    this.getActivitiesdetails(this.Activities_Id,this.currentPages,''); 
  }

  onSearchCriteriaReceived(searchCriteria: any): void {
    this.currentPages = 1;
    this.getActivitiesdetails(this.Activities_Id,this.currentPages,searchCriteria)
  }

  onRowsPerPageChanged(newRowsPerPage: number): void {
    this.rowsPerPage = newRowsPerPage;
  }

}
