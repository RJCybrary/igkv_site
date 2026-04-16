import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-profile',
  standalone: false,
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent {
  emp_id:any;
  workExperience_Data: any;
  empployeeList_Data: any;
  workResponsibility_Data: any;
  pubAward_Data: any;
  publication_Data: any;
  education_data: any;
  Workshop_Data: any;
  emp_Responsibility: any;
  emp_WorkExperience: any;
  EmpDetail: any;
  emp_Qualifications: any;
  seminar_Data: any;
  InvitedLecture_Data: any;
  bannerImg:any=environment.PhotoUrl + 'emp-profile_banner.jpg';
  errorImage:any=environment.PhotoUrl + 'Img_notFound.png';
  phoneNumber: any;
  award_data: any;
  constructor(private ds:DataService,private activateroute:ActivatedRoute){}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result=>{
      this.emp_id=result.get('id');
      if(this.emp_id){
        this.getbasicdetail()
        this.getPublication();
        this.getWorkshop();
        this.getawarddetails();
      }
     })
  }

  onErrorImage(event:any){
    event.target.src=this.errorImage;
  }

  getbasicdetail(){
    const designation = '';
    const office = '';
    const StartRowFrom ='';
    const TotalRow  =  '';
    this.ds.postapi(`allStaffDetails/getEmployeeDetails/${this.emp_id},${designation},${office},${StartRowFrom},${TotalRow}`,null).subscribe((result:any)=>{
    if(result){
      this.emp_Responsibility = result.additionalResponsibilities; 
      this.EmpDetail = result.employeeOverview[0];
      this.phoneNumber = result.employeeOverview[0].Contact_No_1;
      this.phoneNumber = this.maskPhoneNumber(result.employeeOverview[0].Contact_No_1);

      
      this.emp_WorkExperience = result.employeeWorkExperience;
      this.emp_Qualifications = result.employeeQualifications;
    }else{
      this.emp_Responsibility = []; 
      this.EmpDetail = [];
      this.emp_WorkExperience = [];
      this.emp_Qualifications =[];
    }
    }, (error) => {
      console.error('Error fetching employee basic details', error);
    })
  }

  maskPhoneNumber(phone: string): string {
    if (!phone || phone.length < 5) {
      return phone; // Return the original phone number if it's too short to mask
    }

    const visiblePart = phone.slice(-5); // Last 5 digits
    const maskedPart = 'X'.repeat(phone.length - 5); // Mask the rest

    return `${maskedPart}${visiblePart}`;
  }


  getPublication(){
    this.ds.postapi(`allStaffDetails/getPublicationEmployeeWise/${this.emp_id}`,null).subscribe((result:any)=>{
      if(result){
        this.pubAward_Data = result.Projects;
        this.publication_Data = result.Publication;
      }else{
        this.pubAward_Data = [];
        this.publication_Data = [];
      }
    }, (error) => {
      console.error('Error fetching publication details', error);
    })
  }

  getWorkshop(){
    this.ds.postapi(`allStaffDetails/getAllWorkshopSeminar/${this.emp_id}`,null).subscribe((result:any)=>{
     if(result){
      this.Workshop_Data = result.workshopData;
      this.seminar_Data = result.seminarData;
      this.InvitedLecture_Data = result.invitedLectureData;
     }else{
      this.Workshop_Data = [];
      this.seminar_Data = [];
      this.InvitedLecture_Data = [];
     }
    }, (error) => {
      console.error('Error fetching workshop details', error);
    })
  }


  getawarddetails() {
    const unit_id = '';
    const section_id = '';
    const category_id = 11;
    const emp_id = this.emp_id;
    const Website_Content_ID = '';
    const PageNumber = 1;
    const RowsPerPage = 3;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        this.award_data = result;
      });
  }

  


}
