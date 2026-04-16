import { Component,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-vc-visits',
  standalone: false,
  templateUrl: './vc-visits.component.html',
  styleUrls: ['./vc-visits.component.scss']
})
export class VcVisitsComponent {

  currentPages: number = 1; 
  @Input()rowsPerPage: number = 9; 
  totalrecords!: number;
  visit_data:any;
  imageUrl:String=environment.PhotoUrl + 'about-vc-banner-1.jpg';
  constructor(private ds:DataService,private cms:CommonService){}

  ngOnInit(): void {
    this.getVcVisitdetails(0,'');
  }
  setdetails(){
    this.cms.setCatData(`Vice Chancellor's`,'Visits','','/about/vice-chancellor/vc-visits')
  }



  getVcVisitdetails(pageNumber: number,search_data:string): void {
    const Unit_ID = '';
    const section_id = '';
    const category_id = 17;
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
          this.visit_data = result?.data;
        } else {
          this.visit_data = [];
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }  

  onPageChanged(newPage: number): void {
    this.currentPages = newPage; 
    this.getVcVisitdetails(this.currentPages,''); 
  }

  
  onSearchCriteriaReceived(searchCriteria: any): void {
    this.currentPages = 1;
    this.getVcVisitdetails(this.currentPages,searchCriteria)
  }

  onRowsPerPageChanged(newRowsPerPage: number): void {
    this.rowsPerPage = newRowsPerPage;
  }

}