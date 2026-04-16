import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sponcerd-project',
  standalone: false,
  templateUrl: './sponcerd-project.component.html',
  styleUrls: ['./sponcerd-project.component.scss']
})
export class SponcerdProjectComponent {
  projectDash_Data: any;
  bannerName: any;
  loading: boolean = true;
  imageUrl:string=environment.PhotoUrl + 'research-projects-banner.jpg';
  projectDetail_data: any;
  sourceControl = new FormControl();
  searchForm: FormGroup;
  projectBySearch: any;
  totalRecords: number = 0; // Initialize it with 0


  constructor(private ds:DataService,private fb: FormBuilder,){
    this.searchForm = this.fb.group({
      Scheme_Name: [''],
  });
  }

  session_data: { Financial_Year: number, financialYear: string }[] = [];
  source_data: { Source_Code: number, Source_Name: string}[] = [];
  major_head_data:  { MajorHead_Code: number, MajorHead_Name: string}[] = [];
  scheme_data:any;
  Financial_Year:any

  selectedSession: string = '';
  selectedSource: string = '';
  selectedMajorHead: string = '';
  selectedScheme: string = '';

  ngOnInit(): void {
  // this. getPrrojectDashboard();
  //this.getSession();
  this.getSessionyear();
  this.getHeadWisePrrojectDashboard();
  this.getdata(); 
  // this.getProjectDetail();
  }

   @ViewChild('targetDiv') targetDiv!: ElementRef;
  
   ngAfterViewInit() {
     // Now the ViewChild is initialized after the view is fully rendered
   }
  
   scrollToDiv(): void {
     if (this.targetDiv) {
       this.targetDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }
   }

  currentPages: number = 1;  // Initialize the current page to 1

changePage(direction: string): void {
  // Update the currentPage based on the direction ('next' or 'previous')
  if (direction === 'next') {
    this.currentPages++;
  } else if (direction === 'previous' && this.currentPages > 1) {
    this.currentPages--;
  }

  // Trigger the getdata method with the updated currentPage
  this.getdata(this.currentPages);
}

getdata(pageNumber: number = 1): void {
  // Get the selected filter values
  const fin_year = this.selectedSession || '';
  const filters = this.searchForm.value.Scheme_Name || '';  // Ensure default value if no filter applied
  const pageSize = 5;
  const startRowFrom = (pageNumber - 1) * pageSize;
  const queryString = `${fin_year},${filters},${startRowFrom},${pageSize}`;
  
  
  // Call the API
  this.ds.postapi(`project/GetSearchScheme/${queryString}`, null).subscribe(
    (result: any) => {
      this.loading = false;
      this.projectBySearch = result || [];
      this.totalRecords = result || 0
    },
    (error) => {
      console.error('API Error:', error);
      this.projectBySearch = [];  
    }
  );
}

//   getPrrojectDashboard(){
//     const fin_year = 0;
//     const funding_source = 0;
//     const MajorHead = 0;
//     this.ds.postapi(`ourProjects/sponceredProject/${fin_year},${funding_source},${MajorHead}`,null).subscribe((result:any)=>{
//     this.projectDash_Data = result.UserPostResponse.PostList;

//     })
// }

//getSession(){
  // const fin_year = '';
  // const MajorHead_Code = '';
  // const Source_Code = '';
  // this.ds.postapi(`project/projectList/${fin_year},${Source_Code},${MajorHead_Code}`,null).subscribe((result:any)=>{
  // this.bannerName = result.totalProjectCountSourceWise[0];
  // this.session_data = result.SessionYear;
  // this.loading = false;
  // })
//}


// getProjectDetail() {
//   const fin_year = '';
//   const MajorHead_Code = '';
//   const Source_Code = '';
//   this.ds.postapi(`project/projectList/${fin_year},${MajorHead_Code},${Source_Code}`, null).subscribe((result: any) => {

//   });
// }

getSessionyear() {
  this.ds.postapi(`project/getProjectSession/,`, null).subscribe((result:any) => {
    this.session_data = result; // Assign the result to session_data
  });
 
}

onSessionChange() {
  if (this.selectedSession) {
    this.getSource(); // Fetch sources when session changes
    this.getdata();
  }
}

getSource() {
  const fin_year = this.selectedSession;
  this.ds.postapi(`project/getProjectSource/${fin_year}`, null).subscribe((result: any) => {
    this.source_data = result;
    this.selectedSource = ''; // Reset selected source on session change
    this.selectedMajorHead = ''; // Reset major head and scheme data
    this.major_head_data = [];
    // this.scheme_data = [];
  });
}

onSourceChange() {
  if (this.selectedSource) {
    this.getMajor(); // Fetch major heads when source changes
  }
}

getMajor() {
  const fin_year = this.selectedSession ;
  const Source_Code = this.selectedSource;
  this.ds.postapi(`project/getProjectMajor/${fin_year},${Source_Code}`, null).subscribe((result: any) => {
    this.major_head_data = result;
    this.selectedMajorHead = ''; // Reset selected major head on source change
    // this.scheme_data = [];
  });
}

onMajorHeadChange() {
  if (this.selectedMajorHead) {
    this.getScheme(); // Fetch schemes when major head changes
  }
}

getScheme() {
  const fin_year = this.selectedSession;
  const Source_Code = this.selectedSource;
  const MajorHead_Code = this.selectedMajorHead;
  this.ds.postapi(`project/getProjectScheme/${fin_year},${Source_Code},${MajorHead_Code}`, null).subscribe((result: any) => {
    this.scheme_data = result;
  });
}

clearSelections() {
  this.selectedSession = '';
  this.selectedSource = '';
  this.selectedMajorHead = '';
  this.selectedScheme = '';
  this.searchForm.reset();


  // Optionally, clear the data arrays (if you want to reset the dropdown options as well)
  this.source_data = [];
  this.major_head_data = [];
  this.scheme_data = [];
  this.projectBySearch = []

  // // Re-fetch the session data (if required)
  // this.getSessionyear();
}

getHeadWisePrrojectDashboard(){
  const fin_year = this.selectedSession || 38;

  this.ds.postapi(`project/projectList/${fin_year}`,null).subscribe((result:any)=>{
  this.projectDash_Data = result.totalProjectCountSourceWise;
  this.bannerName = result.totalProjectCountSourceWise[0];
  this.loading = false;
  })
}


  getHeadWisePrrojectDashboardData(){
    const fin_year = this.selectedSession || 38;
    this.ds.postapi(`project/projectList/${fin_year}`,null).subscribe((result:any)=>{
    this.projectDash_Data = result.totalProjectCountSourceWise;
    this.bannerName = result.totalProjectCountSourceWise[0];
    this.loading = false;
    })
}


//   getHeadWisePrrojectDashboardData(){
//     const fin_year = this.selectedSession || 38;
//     this.ds.postapi(`project/projectList/${fin_year}`,null).subscribe((result:any)=>{
//     this.projectDash_Data = result.totalProjectCountSourceWise;
//     this.bannerName = result.totalProjectCountSourceWise[0];
//     this.loading = false;
//     })
// }




}



 