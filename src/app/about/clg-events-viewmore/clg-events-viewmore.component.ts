import { Component,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


interface Content { // The Content interface
  Column1: string;
  web_content_date: string;
  Content_Title: string;
  Website_Content_ID: number;
}

@Component({
  selector: 'app-clg-events-viewmore',
  standalone: false,
  templateUrl: './clg-events-viewmore.component.html',
  styleUrls: ['./clg-events-viewmore.component.scss']
})
export class ClgEventsViewmoreComponent {
  totalrecords!: number;
  currentPages: number = 1; 
  @Input()rowsPerPage: number = 9; 
  event_data:any;
  college_id:any;
  errorImage: any=environment.PhotoUrl + 'no_preview_image.png';

  constructor(private ds:DataService, private activateroute:ActivatedRoute,private route:Router){
    this.college_id = null
  }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(() => {
      const currentUrl = this.route.url;
        const basePath = 'about/college-home/college/';
        const startIdx = currentUrl.indexOf(basePath) + basePath.length;
        const endIdx = currentUrl.indexOf('/', startIdx); 
        this.college_id = currentUrl.substring(startIdx, endIdx !== -1 ? endIdx : undefined);
        this.geteventdetails(this.college_id,0,'');
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
      },(error) => {
        console.error('Error fetching events', error);
      })
  }

  onPageChanged(newPage: number): void {
    this.currentPages = newPage; 
    this.geteventdetails(this.college_id,this.currentPages,''); 
  }
   onSearchCriteriaReceived(searchCriteria: any): void {
    this.currentPages = 1;
    this.geteventdetails(this.college_id,this.currentPages,searchCriteria)
  }
 
  onRowsPerPageChanged(newRowsPerPage: number): void {
    this.rowsPerPage = newRowsPerPage;
  }

}
