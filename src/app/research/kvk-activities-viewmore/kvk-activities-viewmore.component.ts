import { Component,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kvk-activities-viewmore',
  standalone: false,
  templateUrl: './kvk-activities-viewmore.component.html',
  styleUrls: ['./kvk-activities-viewmore.component.scss']
})
export class KvkActivitiesViewmoreComponent {

  currentPages: number = 1; 
  @Input()rowsPerPage: number = 9; 

  constructor(private ds:DataService, private activateroute:ActivatedRoute,private route:Router){}
  totalrecords!: number;
  activity_details:any;
  kvk_id:any;
  errorImage: any=environment.PhotoUrl + 'no_preview_image.png';

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(() => {
      const currentUrl = this.route.url;
        const basePath = 'research/kvk-home/kvk/';
        const startIdx = currentUrl.indexOf(basePath) + basePath.length;
        const endIdx = currentUrl.indexOf('/', startIdx); // End at the next slash after the ID
        this.kvk_id = currentUrl.substring(startIdx, endIdx !== -1 ? endIdx : undefined); // Extract the '59'
        this.getactivitydetails(this.kvk_id,0,'');
    });
  }

  getactivitydetails(id:string,pageNumber: number,search_data:string) {
    const Unit_ID = id;
    const section_id = '';
    const category_id = '';
    const emp_id = '';
    const Website_Content_ID = '';
    const Content_Title = search_data || '';
    const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
    const adjustedStartRowFrom = Math.max(0, startRowFrom);
    const queryString = `${Unit_ID},${section_id},${category_id},${emp_id},${Website_Content_ID},${Content_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;
    this.ds.postapi(`ActivityList/paging/${queryString}`, null).subscribe((result: any) => {
        if(result){
          this.totalrecords = result.totaldata;
          this.activity_details=result?.data;
        }else{
            this.activity_details = [];
        }
      },(error) => {
        console.error('Error fetching activities', error);
      });
  }

  onErrorImage(event: any) {
    event.target.src = this.errorImage;
  }

  onPageChanged(newPage: number): void {
    this.currentPages = newPage; 
    this.getactivitydetails(this.kvk_id,this.currentPages,''); 
  }

   onSearchCriteriaReceived(searchCriteria: any): void {
    this.currentPages = 1;
    this.getactivitydetails(this.kvk_id,this.currentPages,searchCriteria)
  }

  onRowsPerPageChanged(newRowsPerPage: number): void {
    this.rowsPerPage = newRowsPerPage;
  }

}

