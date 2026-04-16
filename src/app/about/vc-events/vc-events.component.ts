import { Component,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-vc-events',
  standalone: false,
  templateUrl: './vc-events.component.html',
  styleUrls: ['./vc-events.component.scss']
})
export class VcEventsComponent {
  totalrecords!: number;
  currentPages: number = 1; // Current page
  @Input()rowsPerPage: number = 9; // Rows per page
  event_data:any;
  imageUrl:String= environment.PhotoUrl +'about-vc-banner-2.jpg';
  constructor(private ds:DataService,private cms:CommonService){}

  ngOnInit(): void {
    this.geteventdetails(0,'');
  }
  setdetails(){
    this.cms.setCatData(`Vice Chancellor's`,'Events','','/about/vice-chancellor/vc-events')
  }

  geteventdetails(pageNumber: number,search_data:string): void {
    const Unit_ID = '';
    const section_id = '';
    const category_id = 24;
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
          this.event_data = result?.data;
        } else {
          this.event_data = [];
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  onPageChanged(newPage: number): void {
    this.currentPages = newPage; // Update current page
    this.geteventdetails(this.currentPages,''); // Fetch data for the updated page
  }

  // Handle search criteria emitted by the child component
  onSearchCriteriaReceived(searchCriteria: any): void {
    this.currentPages = 1;
    this.geteventdetails(this.currentPages,searchCriteria)
  }

  onRowsPerPageChanged(newRowsPerPage: number): void {
    this.rowsPerPage = newRowsPerPage;
  }
}