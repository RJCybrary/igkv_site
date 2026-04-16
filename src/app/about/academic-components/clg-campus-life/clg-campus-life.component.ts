import { Component,Input} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clg-campus-life',
  standalone: false,
  templateUrl: './clg-campus-life.component.html',
  styleUrls: ['./clg-campus-life.component.scss']
})
export class ClgCampusLifeComponent {
totalrecords!: number;
currentPages: number = 1; 
@Input()rowsPerPage: number = 9; 
Title:any;
unit_id!:string;
Activities_Id:any;
loding:boolean=true;
Activities_data:any;

constructor(private ds:DataService, private activateroute:ActivatedRoute){}

ngOnInit() {
  this.activateroute.paramMap.subscribe(result => {
    this.unit_id = result.get('id1') ?? '';
    this.Activities_Id = result.get('id2');
    if(this.Activities_Id && this.unit_id){
      this.getActivitiesdetails(this.unit_id , this.Activities_Id,0,'')
    }
})
}

getActivitiesdetails(id1:string, id2:any,pageNumber: number,search_data:string){
    const Unit_ID = id1;
    const section_id ='';
    const category_id=id2;
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
    })
} 

onPageChanged(newPage: number): void {
  this.currentPages = newPage; 
  this.getActivitiesdetails(this.unit_id,this.Activities_Id,this.currentPages,''); 
}

 onSearchCriteriaReceived(searchCriteria: any): void {
  this.currentPages = 1;
  this.getActivitiesdetails(this.unit_id,this.Activities_Id,this.currentPages,searchCriteria)
}

onRowsPerPageChanged(newRowsPerPage: number): void {
  this.rowsPerPage = newRowsPerPage;
}

}

