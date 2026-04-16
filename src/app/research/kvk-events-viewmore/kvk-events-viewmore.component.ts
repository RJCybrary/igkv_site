import { Component,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kvk-events-viewmore',
  standalone: false,
  templateUrl: './kvk-events-viewmore.component.html',
  styleUrls: ['./kvk-events-viewmore.component.scss']
})
export class KvkEventsViewmoreComponent {
  constructor(private ds:DataService, private activateroute:ActivatedRoute,private route:Router){}
  totalrecords!: number;
  event_data:any;
  kvk_id:any;
  currentPages: number = 1; 
  @Input()rowsPerPage: number = 9; 
  errorImage: any=environment.PhotoUrl + 'no_preview_image.png';

 ngOnInit(): void {
    this.activateroute.paramMap.subscribe(() => {
      const currentUrl = this.route.url;
        const basePath = 'research/kvk-home/kvk/';
        const startIdx = currentUrl.indexOf(basePath) + basePath.length;
        const endIdx = currentUrl.indexOf('/', startIdx); // End at the next slash after the ID
        this.kvk_id = currentUrl.substring(startIdx, endIdx !== -1 ? endIdx : undefined); // Extract the '59'
        this.geteventdetails(this.kvk_id,0,'');
  
    });
  }

  geteventdetails(id:string,pageNumber: number,search_data:string){
    const Unit_ID = id;
    const section_id ='';
    const category_id=24;
    const emp_id ='';
    const Website_Content_ID='';
    const Content_Title = search_data || '';
    const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
    const adjustedStartRowFrom = Math.max(0, startRowFrom);
    const queryString = `${Unit_ID},${section_id},${category_id},${emp_id},${Website_Content_ID},${Content_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;
    this.ds.postapi(`ActivityList/paging/${queryString}`, null).subscribe((result:any)=>{
      if(result){
        this.totalrecords = result.totaldata;
          this.event_data=result?.data;
        }else{
            this.event_data = [];
        }
       
      })
  }

  onErrorImage(event: any) {
    event.target.src = this.errorImage;
  }

  onPageChanged(newPage: number): void {
    this.currentPages = newPage; 
    this.geteventdetails(this.kvk_id,this.currentPages,''); 
  }

   onSearchCriteriaReceived(searchCriteria: any): void {
    this.currentPages = 1;
    this.geteventdetails(this.kvk_id,this.currentPages,searchCriteria)
  }

  onRowsPerPageChanged(newRowsPerPage: number): void {
    this.rowsPerPage = newRowsPerPage;
  }

}
