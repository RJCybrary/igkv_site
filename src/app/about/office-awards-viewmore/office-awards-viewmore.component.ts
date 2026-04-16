import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-office-awards-viewmore',
  standalone: false,
  templateUrl: './office-awards-viewmore.component.html',
  styleUrls: ['./office-awards-viewmore.component.scss']
})
export class OfficeAwardsViewmoreComponent {

  constructor(
    private activateroute: ActivatedRoute,
    private ds: DataService,
    private cms:CommonService,

  ) {}
  totalrecords!: number;
  currentPages: number = 1; 
  @Input()rowsPerPage: number = 9; 
  unit_id: any;
  award_data:any;
  banner_heading:string = "Awards";
  office_name!:string;
  imageUrl: string = environment.PhotoUrl +'about-vcsecretariat-banner.jpg';
  medical_unit_img_url: string = environment.PhotoUrl + 'about-medical-unit-banner.jpg';

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((result) => {
      this.unit_id = result.get('id');
      if(this.unit_id==5)
        {
          this.imageUrl= this.medical_unit_img_url
        }
      this.getawarddetails(this.unit_id,0,'');
      const catData = this.cms.getCatData();
      this.office_name = catData?.cattitle1;

    })}


    getawarddetails(id:string,pageNumber: number,search_data:string): void {
      const Unit_ID = id;
      const section_id = '';
      const category_id = 11;
      const emp_id = '';
      const Website_Content_ID = '';
      const Content_Title = search_data || ''; 
      const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
      const adjustedStartRowFrom = Math.max(0, startRowFrom);
      const queryString = `${Unit_ID},${section_id},${category_id},${emp_id},${Website_Content_ID},${Content_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;
  
      this.ds.postapi(`ActivityList/paging/${queryString}`, null).subscribe(
        (result: any) => {
          if (result) {
            this.totalrecords = result.totaldata;
            this.award_data = result?.data;
          } else {
            this.award_data = [];
          }
        },
        (error) => {
          console.error('Error fetching data', error);
        }
      );
    }

    setdetails(){
      this.cms.setCatData(this.office_name,this.banner_heading,'','/about/Offices/'+this.unit_id +'/awards')
    }
 

  onPageChanged(newPage: number): void {
    this.currentPages = newPage; 
    this.getawarddetails(this.unit_id,this.currentPages,''); 
  }

  
  onSearchCriteriaReceived(searchCriteria: any): void {
    this.currentPages = 1;
    this.getawarddetails(this.unit_id,this.currentPages,searchCriteria)
  }


  onRowsPerPageChanged(newRowsPerPage: number): void {
    this.rowsPerPage = newRowsPerPage;
  }

}
