import { Component,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';



@Component({
  selector: 'app-vc-news-updates',
  standalone: false,
  templateUrl: './vc-news-updates.component.html',
  styleUrls: ['./vc-news-updates.component.scss']
})
export class VcNewsUpdatesComponent {
  totalrecords!: number;
  currentPages: number = 1; 
  @Input()rowsPerPage: number = 9; 
  Activity_data:any;
  imageUrl:String= environment.PhotoUrl +'about-vc-banner-2.jpg';
  constructor(private ds:DataService,private cms:CommonService){}


  
  ngOnInit(): void {
    this.getactivitydetails(0,'');
  }

  setdetails(){
    this.cms.setCatData(`Vice Chancellor's`,'News & Updates','','/about/vice-chancellor/vc-updates')
  }


  
  getactivitydetails(pageNumber: number,search_data:string): void {
    const Unit_ID = '';
    const section_id = '';
    const category_id = '';
    const emp_id = 1311;
    const Website_Content_ID = '';
    const Content_Title = search_data || ''; 
    const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
    const adjustedStartRowFrom = Math.max(0, startRowFrom);
    const queryString = `${Unit_ID},${section_id},${category_id},${emp_id},${Website_Content_ID},${Content_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;

    this.ds.postapi(`ActivityList/paging/${queryString}`, null).subscribe(
      (result: any) => {
        if (result) {
          this.totalrecords = result.totaldata;
          this.Activity_data = result?.data;
        } else {
          this.Activity_data = [];
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
  onPageChanged(newPage: number): void {
    this.currentPages = newPage; 
    this.getactivitydetails(this.currentPages,''); 
  }

  
  onSearchCriteriaReceived(searchCriteria: any): void {
    this.currentPages = 1;
    this.getactivitydetails(this.currentPages,searchCriteria)
  }

  onRowsPerPageChanged(newRowsPerPage: number): void {
    this.rowsPerPage = newRowsPerPage;
  }

}
