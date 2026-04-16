import { Component ,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

interface Content { // The Content interface
  employee_name: string;
  from_date: string;
  to_date: string;
  web_content_date2: string;
  Content_Description: string;
  imgURL:any;
}

@Component({
  selector: 'app-office-master',
  standalone: false,
  templateUrl: './office-master.component.html',
  styleUrls: ['./office-master.component.scss'],
})
export class OfficeMasterComponent {

   /* for pagination */
   @ViewChild(MatPaginator)
   paginator!: MatPaginator;
   pageSize = 12;
   currentPage = 0;
   paginatedContents: Content[] = [];

   vcList_data: any;
   ImageNotFound:String=environment.PhotoUrl + 'Img_notFound.png';


  infra_List_data: any;
  constructor(
    private ds: DataService,
    private activateroute: ActivatedRoute,
    private datePipe: DatePipe,
    private route:Router
  ) {}
  Office_Head_Data: any;
  Office_Page_Data: any;
  Office_Event_Data: any;
  category_Id: any;
  section_id: any;
  emp_id: any;
  imageUrl: string = environment.PhotoUrl +'about-vcsecretariat-banner.jpg';
  medical_unit_img_url: string = environment.PhotoUrl + 'Medical_Unit_Banner.jpeg';
  guest_house_img_url: string = environment.PhotoUrl + 'about-Guest-House-banner.jpg';
  imagenotFound:string=environment.PhotoUrl + 'Img_notFound.png';
  registrar_banner:  string = environment.PhotoUrl + 'Ragistrar_banner.jpg';

  unit_id: any;
  award_data: any;
  Activity_data: any;
  setData:any;

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((result) => {
      this.unit_id = result.get('id');
      if(this.unit_id == 2){
        this.imageUrl = this.registrar_banner;
      }
      const currentUrl = this.route.url;
      if(this.unit_id==115)
      {
        this.imageUrl= this.guest_house_img_url
      }
      else if(this.unit_id==5){
        this.imageUrl=this.medical_unit_img_url
      }
      else{
        this.imageUrl=environment.PhotoUrl +'about-vcsecretariat-banner.jpg';
      }

      this.getdata();
      this.formervc();
      this.getEventdetails();
      this.getawarddetails();
      this.getactivitydetails();
    });
  }

  getdata() { 
    this.ds
      .postapi(`OfficeDetails/${this.unit_id}`, null)
      .subscribe((result: any) => {
        this.Office_Head_Data = result.Office_Head_Data[0];
        this.Office_Page_Data = result.Office_Page_Data[0];

        const officeName = this.Office_Page_Data?.office_name || '';
        if(officeName === 'Vice Chancellor Office' || officeName === 'Medical Unit, Raipur' ){
          this.setData = {
            title1:officeName,
             unit_id:this.unit_id
           }
        } else{
          this.setData = {
            title1:`${officeName} Office`,
             unit_id:this.unit_id
           }
        }
      });
  }

  get bannerHeading(): string {
    const officeName = this.Office_Page_Data?.office_name || '';
    if (officeName === 'Vice Chancellor Office') {
      return officeName; // No change needed
    }
    if(officeName === 'Medical Unit, Raipur'){
      return 'Medical Unit';
    }
    return `${officeName} Office`; // Append "Office" if not already present
  }
  

  onErrorImage(event: any) {
    event.target.src = this.imagenotFound;
  }
  
  getEventdetails() {
    const unit_id = this.unit_id;
    const section_id = '';
    const category_id = 24;
    const emp_id = '';
    const Website_Content_ID = '';
    const RowsPerPage = 3;
    const PageNumber = 1;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        this.Office_Event_Data = result;
      });
  }

  getawarddetails() {
    const unit_id = this.unit_id;
    const section_id = '';
    const category_id = 11;
    const emp_id = '';
    const Website_Content_ID = '';
    const RowsPerPage = 3;
    const PageNumber = 1;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        this.award_data = result;
      });
  }

  getactivitydetails() {
    const unit_id = this.unit_id;
    const section_id = '';
    const category_id = '';
    const emp_id = '';
    const Website_Content_ID = '';
    const RowsPerPage = 3;
    const PageNumber = 1;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        this.Activity_data = result
      });
  }

  formervc(){
    this.ds.postapi('viceChancellore/formerVC',null).subscribe((result:any)=>{
      this.vcList_data = result;
      this.updatePaginatedContents();

    })
  }
    /* code for pagination */
onPageChange(event: PageEvent) {
  this.currentPage = event.pageIndex;
  this.pageSize = event.pageSize;
  this.updatePaginatedContents();
}

updatePaginatedContents() {
  const startIndex = this.currentPage * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  this.paginatedContents = this.vcList_data.slice(startIndex, endIndex);
}
}
