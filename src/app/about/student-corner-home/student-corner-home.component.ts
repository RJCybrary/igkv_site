import { Component, OnInit,NgZone,ElementRef, ViewChildren, QueryList, HostListener  } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-student-corner-home',
  standalone: false,
  templateUrl: './student-corner-home.component.html',
  styleUrls: ['./student-corner-home.component.scss']
})
export class StudentCornerHomeComponent implements OnInit{

  Activity_data_NCC: any;
  Activity_data_NSS: any;
  infrastructure_data: any;
  award_data: any;
  Academic_data: any;
  departmentList_data: any;
  departmentTotal: any;
  collegeList_data: any;
  collegeTotal: any;
  facultyList_data: any;
  facultyTotal: any;
  passoutStudentF_data: any;
  passoutStudentM_data: any;
  pasoutCount: any;
  StudentF_data: any;
  StudentM_data: any;
  CurrentStudentTotal: any;
  infra_List_data:any;
  bannerImage:any=environment.PhotoUrl + 'Student_Corner.jpg';
  
  student_corner_img1:any=environment.PhotoUrl + 'student_corner_img_1.JPG';
  errorImage: any=environment.PhotoUrl + 'no_preview_image.png';

  library_Icon:any=environment.PhotoUrl + 'student_corner_library_icon.svg';
  help_icon:any=environment.PhotoUrl + 'student_corner_help_icon.svg';
  hostel_icon:any=environment.PhotoUrl + 'student_corner_hostel_icon.svg';
  admission_icon:any=environment.PhotoUrl + 'student_corner_admission_icon.png';
  ncc_icon:any=environment.PhotoUrl + 'student_corner_ncc_icon.svg';
  sports_icon:any=environment.PhotoUrl +'student_corner_sports_icon.svg';

   /* object for counter */
   currentCounts: number[] = []; // Holds current counts for animation
   targets: number[] = []; // Holds target values for counters
   hasAnimated: boolean[] = []; // Flags to ensure each counter animates once
   @ViewChildren('counter') counters!: QueryList<ElementRef>; // Reference to all counter elements
 
  constructor(private ds:DataService, private activateroute:ActivatedRoute, private router: Router,private ngZone: NgZone){}

  ngOnInit(): void {

    this.getDpartmentlist();
    this.getCollegedata();
    this.getNCCactivitydetails();
    this.getNSSactivitydetails();
    this.getawarddetails();
    this.geteventdetails();
    this.getPassoutCount();
    this.getFacultydata();
    this.getCurrentCount();
  
  }

  navigateToAbout() {
    this.router.navigate(['/research/ncc-overview']);    
  };

  navigateToSports() {
    this.router.navigate(['/research/sports-overview']);    
  }

  navigateToHostel() {
    this.router.navigate(['/research/girls-hostel-overview']);    
  }
  
  navigateToLibrary() {
    this.router.navigate(['/research/library-overview']);    
  }


  getNCCactivitydetails(){
    const unit_id = 0;
    const section_id = '';
    const category_id = 1;
    const emp_id = '';
    const Website_Content_ID = '';
    const PageNumber = 1;
    const RowsPerPage = 3;
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
        if(result){
          this.Activity_data_NCC = result;
        } else{
          this.Activity_data_NCC = [];
        }
      
      })
  }


  getNSSactivitydetails(){
    const unit_id = 0;
    const section_id = '';
    const category_id = 2;
    const emp_id = '';
    const Website_Content_ID = '';
    const PageNumber = 1;
    const RowsPerPage = 3;
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
        if(result){
          this.Activity_data_NSS = result;
        } else{
          this.Activity_data_NSS = [];
        }
      
      })
  }

  getInfraStructure(){
    this.ds.postapi(`officeInfrastrucutre/${64}`,null).subscribe((result:any)=>{
      this.infra_List_data = result
    })
  }

  getawarddetails(){
    const unit_id = 0;
    const section_id = '';
    const category_id = 26;
    const emp_id = '';
    const Website_Content_ID = '';
    const PageNumber = 1;
    const RowsPerPage = 3;
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
        if(result){
          this.award_data = result;
        } else{
          this.award_data = [];
        }
      })
  }

  geteventdetails(){
    const unit_id = 0;
    const section_id = '';
    const category_id = 5;
    const emp_id = '';
    const Website_Content_ID = '';
    const PageNumber = 1;
    const RowsPerPage = 3;
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
        if(result){
          this.Academic_data = result;
        } else{
          this.Academic_data = [];
        }
      })
  }
    
  onErrorImage(event: any) {
    event.target.src = this.errorImage;
  }

// department list
getDpartmentlist() {
  this.ds
    .postapi('homeDashboard/departmentListBycollege/', null)
    .subscribe((result: any) => {
      this.departmentList_data = result;
      this.departmentTotal = this.departmentList_data.length;
      this.setupCounter(2, this.departmentTotal);

    });
}

   // Count the number of college
   getCollegedata() {
    this.ds.postapi('homeDashboard/collegeList', null).subscribe((result: any) => {
      this.collegeList_data = result;
      this.collegeTotal = this.collegeList_data.length;
      this.setupCounter(0, this.collegeTotal);
    });
  }
     // Count the number of college
     getFacultydata() {
      this.ds
        .postapi('homeDashboard/facultyList', null)
        .subscribe((result: any) => {
          this.facultyList_data = result;
          this.facultyTotal = this.facultyList_data.length;
          this.setupCounter(1, this.facultyTotal);

       
        });
    }
  

  // Passout Students 
  getPassoutCount() {
    this.ds
      .postapi('homeDashboard/passoutStudents', null)
      .subscribe((result: any) => {
        this.passoutStudentF_data = result.countAllStudentGw[0].Total;
      this.passoutStudentM_data = result.countAllStudentGw[0].Total;
     this.pasoutCount = result.countAllStudent[0].Total;
     this.setupCounter(6, this.pasoutCount);
     
      });
  }

  // Passout Students 
  getCurrentCount() {
    this.ds
      .postapi('homeDashboard/passoutStudents', null)
      .subscribe((result: any) => {
        this.StudentF_data = result.countcurrStudentGw[0].Total;
        this.setupCounter(4, this.StudentF_data);
        this.StudentM_data = result.countcurrStudentGw[1].Total;
        this.setupCounter(5, this.StudentM_data);
       this.CurrentStudentTotal = result.countcurrStudent[0].Total;
      this.setupCounter(3, this.CurrentStudentTotal);

      });
  }


  
   /* count function */
   setupCounter(index: number, target: number) {
    this.currentCounts[index] = 0; // Start count at 0
    this.targets[index] = target; // Set the target count
    this.hasAnimated[index] = false; // Ensure the counter has not animated yet
    
  }

   /* start the count on scroll to that section */
   @HostListener('window:scroll', [])
   onWindowScroll() {
     this.counters.forEach((counter, index) => {
       const position = counter.nativeElement.getBoundingClientRect().top;
       const windowHeight = window.innerHeight;
 
       if (position < windowHeight && !this.hasAnimated[index]) {
         this.animateCount(index);
         this.hasAnimated[index] = true; // Prevent multiple animations
       }
     });
   }
 
   /* for animate the count */
   animateCount(index: number) {
     const targetCount = this.targets[index];
     const duration = 3000; // Animation duration in milliseconds
     const incrementStep = Math.max(1, Math.floor(targetCount / (duration / 50))); // Dynamic step based on target count and duration
 
     let currentCount = 0;
     const stepTime = Math.max(10, duration / (targetCount / incrementStep)); // Interval time calculation for smoothness
 
     this.ngZone.runOutsideAngular(() => {
       const interval = setInterval(() => {
         if (currentCount < targetCount) {
           currentCount += incrementStep;
 
           // Ensure it doesn't exceed the target
           if (currentCount > targetCount) {
             currentCount = targetCount;
           }
 
           this.ngZone.run(() => {
             this.currentCounts[index] = currentCount;
           });
         } else {
           clearInterval(interval); // Stop the interval when the count reaches the target
         }
       }, stepTime);
     });
   }

}
