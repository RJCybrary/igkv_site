import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-department-detail',
  standalone: false,
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements  OnInit{
  Department_Detail: any;
  Subject_Id: any;
  Department_Details: any;
  Department_Page_Data: any;
  DepartmentFirst_Details: any;
  dashboard_Data: any;
  dashboard_Data_First: any;
  dashboard_Data_Second: any;
  DegreeProgramme: any;
  headOfficeID: any;
  programs: any;
  degreeProgramm_Data: any;
  item: any;
  infra_List_data: any;
  award_data: any;
  event_data: any;
  bannerImageUrl: any;
  msc_degree_program_id:any;
  phd_degree_program_id:any;


  PG_Fee_Structure:any=environment.DocumentUrl + 'PG_Fee_Details_24_25.pdf';
  Phd_Fee_Structure:any=environment.DocumentUrl + 'Phd_Fee_Details_24_25.pdf';
  OnErrorImage:String=environment.PhotoUrl + 'Img_notFound.png';

  Department_Head_data: any;
  headOfficeCodeForActivity: any;
  Activity_data: any;

  constructor(private ds:DataService,private activateroute:ActivatedRoute,private cms :CommonService){}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result=>{
      this.Subject_Id=result.get('id'),
      this.headOfficeID=result.get('id'),
      this.setBannerImage(this.Subject_Id);
      this.getdata();
      this.getInfraStructure();
      this.degreeWiseDashboard();
     })
  }
 
  errorHandler(event: any): void {
    event.target.src = this.OnErrorImage;
  }

  setBannerImage(Subject_Id: string): void {
    switch (Subject_Id) {
      case '138':
        this.bannerImageUrl = environment.PhotoUrl + 'home-icon-APFE.jpg';
        break;
      case '284':
        this.bannerImageUrl = environment.PhotoUrl + 'home-icon-ABM.jpg';
        break;
        case '23':
          this.bannerImageUrl = environment.PhotoUrl + 'home-icon-agronomy.jpg';
          break;
      default:
        this.bannerImageUrl = environment.PhotoUrl + 'academic-departments-banner.jpg'; // Default image if no match
        break;
    }
  }
  
  getdata(){
    const office_id = '';
    const headoffice_id = 59;
    this.ds.postapi(`department/departmentDetail/${office_id},${this.Subject_Id},${headoffice_id}`,null).subscribe((result:any)=>{
      this.Department_Details = result.departmentInfo;            
      this.DepartmentFirst_Details = result.departmentInfo[0];
      this.headOfficeCodeForActivity = result.departmentInfo[0].Office_Code;
      this.Department_Page_Data = result.employeeInfo;
      this.Department_Head_data = this.Department_Page_Data.filter((item: { Post_Name : string; }) => item.Post_Name === 'Head of Department');
      this.getawarddetails(this.headOfficeCodeForActivity);
      this.geteventdetails(this.headOfficeCodeForActivity);
      this.getactivitydetails(this.headOfficeCodeForActivity)
    })
  }




  setdetails_dpart(val1:string,val2:any){
    this.cms.setCatData(this.DepartmentFirst_Details.DepartmentName,val1,'',val2)
  }

  getInfraStructure(){
    const office_id = this.headOfficeID;
    this.ds.postapi(`officeInfrastrucutre/${this.headOfficeID}`,null).subscribe((result:any)=>{
      if (result  ) {
        this.infra_List_data = result;
      }else{
        this.infra_List_data = [];
      }
    })
  }

  getawarddetails(id:any){
    const unit_id = id
    const section_id = '';
    const category_id = 11;
    const emp_id = '';
    const Website_Content_ID = '';
    const RowsPerPage = 3;
    const PageNumber = 1;
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
        this.award_data = result;
      })
  }

  geteventdetails(id:any){
    const unit_id = id;
    const section_id = '';
    const category_id = 24;
    const emp_id = '';
    const Website_Content_ID = '';
    const RowsPerPage = 3;
    const PageNumber = 1;
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
        this.event_data=result;
      })
  }

  getactivitydetails(id:any) {
    const unit_id = id;
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


  degreeWiseDashboard() {
    this.ds.postapi(`degreeProgram/degreeWiseSubjectDetail/,,,,${this.Subject_Id}`, null).subscribe((result: any) => {
      this.degreeProgramm_Data = result;
  
      if (this.degreeProgramm_Data[0] && this.degreeProgramm_Data[0].Degree_Programme_Id) {
        this.msc_degree_program_id = this.degreeProgramm_Data[0].Degree_Programme_Id;
      } else {
        this.msc_degree_program_id = null; 
        
      }
  
      if (this.degreeProgramm_Data[1] && this.degreeProgramm_Data[1].Degree_Programme_Id) {
        this.phd_degree_program_id = this.degreeProgramm_Data[1].Degree_Programme_Id;
      } else {
        this.phd_degree_program_id = null; 
        
      }
    });
  }
  

  handleImageError(event: any) {
    event.target.src = environment.PhotoUrl + 'Img_notFound.png';
  }

}
