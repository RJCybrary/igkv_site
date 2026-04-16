import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-director-awards-viewmore',
  standalone: false,
  templateUrl: './director-awards-viewmore.component.html',
  styleUrls: ['./director-awards-viewmore.component.scss']
})
export class DirectorAwardsViewmoreComponent {


  constructor(private ds: DataService, private activateroute: ActivatedRoute , private cms :CommonService) {}
  totalrecords!: number;
  currentPages: number = 1; 
  @Input()rowsPerPage: number = 9; 
  award_data:any;
  unit_id:any;
  Office_Page_Data:any;

  banner_data: Array<{ img: string; title: string; id: number }> = [];
  banners: Record<string, { img: string; title: string; id: number }[]> = {
    '100': [
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DRS-1.jpg', title: 'Slide 1', id: 1 },
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DRS-2.jpg', title: 'Slide 2', id: 2 },
    ],
    '101': [
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DE-2.jpg', title: 'Slide 1', id: 1 },
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DE-1.jpg', title: 'Slide 2', id: 2 },
    ],
    '111': [
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DI-3.jpg', title: 'Slide 2', id: 2 },
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DI-2.jpg', title: 'Slide 1', id: 1 },
    ],
    '112': [
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/academic-Fee-Structure-Banner.jpg', title: 'Slide 1', id: 1 },
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/D-farm2.jpg', title: 'Slide 2', id: 2 },
    ],
    '57': [
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DSW-1.jpg', title: 'Slide 1', id: 1 },
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DSW-2.jpg', title: 'Slide 2', id: 2 },
    ],
    default: [
      { img: 'https://igkv.ac.in/_Attachment/web/Section_Content/Home_Main_Slider/2024/59/Home_Main_Slider_20240213112018405.jpg', title: 'Default Slide 1', id: 1 },
      { img: 'https://igkv.ac.in/_Attachment/web/Section_Content/Home_Main_Slider/2024/59/Home_Main_Slider_20240213112018405.jpg', title: 'Default Slide 2', id: 2 },
    ],
  };
  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((result) => {
      this.unit_id = result.get('id');
      this.loadBannerData();
      this.getawarddetails(this.unit_id,0,'');
      this.getOfficeDetails(this.unit_id)
    })}


    loadBannerData(): void {
      const id = this.unit_id as string; // Explicitly cast `unit_id` to `string`.
      if (id && this.banners[id]) {
        this.banner_data = this.banners[id];
      } else {
        this.banner_data = this.banners['default'];
      }
    }
    setdetails_dir(){
      this.cms.setCatData(this.Office_Page_Data.office_name,'Award','','/research/director/' + this.unit_id + '/awards')
    }
  
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

  getOfficeDetails(id:any){
    this.ds.postapi(`OfficeDetails/${id}`,null).subscribe((result:any)=>{
      this.Office_Page_Data = result.Office_Page_Data[0];

    })
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
