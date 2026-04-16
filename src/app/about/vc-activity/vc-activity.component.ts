import { Component,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-vc-activity',
  standalone: false,
  templateUrl: './vc-activity.component.html',
  styleUrls: ['./vc-activity.component.scss'],
})
export class VcActivityComponent {

/* new pagination code */
totalrecords!: number;
currentPages: number = 1; // Current page
@Input()rowsPerPage: number = 9; // Rows per page

  Activity_data:any;
  imageUrl: string = environment.PhotoUrl + 'about-vc-banner-2.jpg';

  constructor(
    private ds: DataService,
    private cms: CommonService,
  ) {}

  ngOnInit(): void {
    this.getActivityDetails(0,'');
  }

  setdetails(): void {
    this.cms.setCatData(`Vice Chancellor's`,'Activities','','/about/vice-chancellor/vc-activities');
  }


  getActivityDetails(pageNumber: number,search_data:string): void {
    const Unit_ID = '';
    const section_id = '';
    const category_id = '';
    const emp_id = 1311;
    const Website_Content_ID = '';
    const Content_Title = search_data || ''; // Add dynamic title if needed
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
    this.currentPages = newPage; // Update current page
    this.getActivityDetails(this.currentPages,''); // Fetch data for the updated page
  }

   // Handle search criteria emitted by the child component
   onSearchCriteriaReceived(searchCriteria: any): void {
    this.currentPages = 1;
    this.getActivityDetails(this.currentPages,searchCriteria)
  }

  onRowsPerPageChanged(newRowsPerPage: number): void {
    this.rowsPerPage = newRowsPerPage;
  }


}
