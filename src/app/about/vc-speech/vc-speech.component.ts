import { Component,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-vc-speech',
  standalone: false,
  templateUrl: './vc-speech.component.html',
  styleUrls: ['./vc-speech.component.scss']
})

export class VcSpeechComponent {
  totalrecords!: number;
  currentPages: number = 1; 
  @Input()rowsPerPage: number = 9; 
  speech_data:any;
  imageUrl:String=environment.PhotoUrl + 'about-vc-banner-2.jpg';
  HVCImage:String=environment.PhotoUrl + 'desk-of-vc-image.jpg';
  constructor(private ds:DataService, private cms:CommonService){}

  ngOnInit(): void {
    this.getspeechdetails(0,'');
  }

  setdetails(){
    this.cms.setCatData(`Vice Chancellor's`,'Speech','','/about/vice-chancellor/vc-speeches')
  }
  
  getspeechdetails(pageNumber: number,search_data:string): void {
    const Unit_ID = '';
    const section_id = '';
    const category_id = 29;
    const emp_id = 1311;
    const Website_Content_ID = '';
    const Content_Title = search_data || ''; 
    const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
    const adjustedStartRowFrom = Math.max(0, startRowFrom);
    const queryString = `${Unit_ID},${section_id},${category_id},${emp_id},${Website_Content_ID},${Content_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;

    this.ds.postapi(`ActivityList/paging/${queryString}`, null).subscribe(
      (result: any) => {
        if (result) {
          this.speech_data = result?.data;
          this.totalrecords = result.totaldata;
        } else {
          this.speech_data = [];
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  onPageChanged(newPage: number): void {
    this.currentPages = newPage; 
    this.getspeechdetails(this.currentPages,''); 
  }


  onSearchCriteriaReceived(searchCriteria: any): void {
    this.currentPages = 1;
    this.getspeechdetails(this.currentPages,searchCriteria)
  }

  onRowsPerPageChanged(newRowsPerPage: number): void {
    this.rowsPerPage = newRowsPerPage;
  }

}
