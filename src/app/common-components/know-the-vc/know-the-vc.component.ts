import { Component,Input,AfterViewInit, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { error } from 'jquery';

interface Content_pub { // The Content interface
  JournalProceedings: string;
  NoOfCoAuthors_MainAuthorOrMentor: string;
  ActivityPerformed: string;
}

interface Content_pro { // The Content interface
  NameOfProjectStudy: string;
  FundingAgency: string;
  ActivityPerformed: string;
  DurationOfTheProjectStudy: string;
}

declare var FB: any;

@Component({
  selector: 'app-know-the-vc',
  standalone: false,
  templateUrl: './know-the-vc.component.html',
  styleUrls: ['./know-the-vc.component.scss']
})
export class KnowTheVcComponent implements OnInit, AfterViewInit{

   /* for pagination */
   @ViewChild(MatPaginator)
   paginator!: MatPaginator;
   pageSize = 5;
   currentPage = 0;
   paginatedContents_pub: Content_pub[] = [];
   paginatedContents_pro: Content_pro[] = [];

  @Input() banner_heading:any;
  @Input() banner_img:any 

  emp_id:any;
  pubAward_Data: any;
  publication_Data: any;
  Workshop_Data: any;
  facebookSdkUrl: any;
  emp_Responsibility: any;
  EmpDetail: any;
  emp_WorkExperience: any;
  emp_Qualifications: any;
  Projects_Data: any;
  seminar_Data: any;
  InvitedLecture_Data: any;
  imageUrl:String=environment.PhotoUrl + 'about-vc-banner-1.jpg';
  errorImage:any=environment.PhotoUrl + 'Img_notFound.png';


  constructor(private ds:DataService,private activateroute:ActivatedRoute){}
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  
  onErrorImage(event:any){
    event.target.src=this.errorImage;
  }
 // Use the non-null assertion operator
 @ViewChild('targetDiv') targetDiv!: ElementRef;

 ngAfterViewInit() {
   // Now the ViewChild is initialized after the view is fully rendered
 }

 scrollToDiv(): void {
   if (this.targetDiv) {
     this.targetDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
   }
 }

  ngOnInit(): void {
  
    this.activateroute.paramMap.subscribe(result=>{
      this.getWorkshop();
      this.getbasicdetail();
      this.getPublication();
     });
  }


  
  getbasicdetail() {
    const designation = '';
    const office = '';
    const StartRowFrom = '';
    const TotalRow = '';
  
    // Corrected template literal usage
    this.ds.postapi(`allStaffDetails/getEmployeeDetails/${1311},${designation},${office},${StartRowFrom},${TotalRow}`, null).subscribe((result: any) => {
      if (
        result.additionalResponsibilities &&
        result.employeeOverview &&
        result.employeeWorkExperience &&
        result.employeeQualifications
      ) {
        this.emp_Responsibility = result.additionalResponsibilities;
        this.EmpDetail = result.employeeOverview;
        this.emp_WorkExperience = result.employeeWorkExperience;
        this.emp_Qualifications = result.employeeQualifications;
      } else {
        this.emp_Responsibility = [];
        this.EmpDetail = [];
        this.emp_WorkExperience = [];
        this.emp_Qualifications = [];
      }
    },(error) => {
      console.error('Error fetching employee details', error);
    })
  }
  
  getPublication(){
    this.ds.postapi(`allStaffDetails/getPublicationEmployeeWise/${1311}`,null).subscribe((result:any)=>{
      this.Projects_Data = result.Projects;
      this.publication_Data = result.Publication;
      this.updatePaginatedContents_pub();
      this.updatePaginatedContents_pro();
    },(error)=>{
      console.error('Error fetching employee workshop', error);
    })
  } 

 
  
 getWorkshop(){
    this.ds.postapi(`allStaffDetails/getAllWorkshopSeminar/${1311}`,null).subscribe((result:any)=>{
      if(result.workshopData && result.seminarData && result.invitedLectureData){
        this.Workshop_Data = result.workshopData;
        this.seminar_Data = result.seminarData;
        this.InvitedLecture_Data = result.invitedLectureData;
      } else{
        this.Workshop_Data = [];
        this.seminar_Data = [];
        this.InvitedLecture_Data = [];
      }
    },(error)=>{
      console.error('Error fetching employee workshop', error);
    })
  } 
 


 
/* code for pagination */

/* for publication */
onPageChange_pub(event: PageEvent) {
  this.currentPage = event.pageIndex;
  this.pageSize = event.pageSize;
  this.updatePaginatedContents_pub();
}

updatePaginatedContents_pub() {
  const startIndex = this.currentPage * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  this.paginatedContents_pub = this.publication_Data.slice(startIndex, endIndex);
}

/* for project */
onPageChange_pro(event: PageEvent) {
  this.currentPage = event.pageIndex;
  this.pageSize = event.pageSize;
  this.updatePaginatedContents_pro();
}

updatePaginatedContents_pro() {
  const startIndex = this.currentPage * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  this.paginatedContents_pro = this.Projects_Data.slice(startIndex, endIndex);
}


}
