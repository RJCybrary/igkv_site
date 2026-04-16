import {  Component, OnInit, NgZone, ElementRef, ViewChildren, QueryList, HostListener} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-research-info',
  standalone: false,
  templateUrl: './home-research-info.component.html',
  styleUrls: ['./home-research-info.component.scss']
})
export class HomeResearchInfoComponent implements OnInit {

  sections = [ 'Student','Academic','Department'  ];
  // sections = ['Research', 'Academic', 'KVK', 'Student', 'Department'  ];
  currentIndex = 0;
  intervalId: any;
  loading: boolean = true;
  backgroundImageStu: string = environment.PhotoUrl + 'home_students.jpg';
  backgroundImageKVK: string = 'assets/research_2.JPG';
  backgroundImageReserch: string = 'assets/research.JPG';
  backgroundImageDep: string = environment.PhotoUrl + 'home_research.jpg';
  backgroundImageAca: string = environment.PhotoUrl + 'home_academic.jpg';

  collegeList_data: any;
  collegeTotal: any;
  departmentList_data: any;
  departmentTotal: any;
  facultyTotal: any;
  facultyList_data: any;
  passoutStudentTotal: any;
  passoutStudent_data: any;
  passoutStudentM_data: any;
  passoutStudentF_data: any;
  pasoutCount: any;
  StudentF_data: any;
  StudentM_data: any;
  CurrentStudentTotal: any;
  kvklist: any;
  displayCount: number = 0; // Displayed value that animates
  constituentClg: any;
  afilatedClg: any;
  totalDepartment: any;

  // @ViewChild('collegeCounter', { static: false }) collegeCounter!: ElementRef; // Reference to the counter section
  @ViewChildren('counter') counters!: QueryList<ElementRef>; // Reference to all counter elements
  project_data: any;
  copyright_data: any;
  patent_data: any;
  technology_data: any;
  publication_data: any;
  currentProject: any;



  constructor(private ds: DataService,private ngZone: NgZone) { }

   ngOnInit(): void {
   
      this.getCollegedata(),
      this.getDpartmentlist(),
      this.getFacultydata(),
      this.getPassoutCount(),
      this.getCurrentCount(),
      this.getKvklist(),
      this.getDRSDashboard();
      this.getCurrentSessionProject();

      setTimeout(() => {
        this.startSectionRotation();
      }, 3000);

      // if(this.collegeTotal && this.departmentTotal && this.facultyTotal && this.CurrentStudentTotal ){
      //   this.startSectionRotation();
      // }

    // this.initializeCounters();d
  }

 

      // Count the number of college
      getCollegedata(){

        this.ds.postapi('college/CollegeTypeList/,',null).subscribe((result:any)=>{
          if(result){
            this.collegeList_data = result;
            this.collegeTotal = this.collegeList_data.length;
            this.constituentClg = this.collegeList_data.filter((college: { College_Type_Id: number; }) => college.College_Type_Id === 1).length;
            this.afilatedClg = this.collegeList_data.filter((college: { College_Type_Id: number; }) => college.College_Type_Id === 2).length;
          }else{
            this.collegeList_data = [];
         this.collegeTotal = [];
         this.constituentClg = [];
         this.afilatedClg = []
          }
        },(error)=>{
          console.error('Error fetching college counts', error);
        })
      }

  // Count the number of college
  getFacultydata() {
    this.ds.postapi('homeDashboard/facultyList/', null).subscribe((result: any) => {
      if(result){
        this.facultyList_data = result;
        this.facultyTotal = this.facultyList_data.length;
      } else{
      this.facultyList_data = [];
      this.facultyTotal = [];
      }
    },(error)=>{
      console.error('Error fetching faculty counts', error);
    })
  }

    // Passout Students 
    getCurrentCount() {
      this.ds.postapi('homeDashboard/passoutStudents', null).subscribe((result: any) => {
        if(result){
          this.StudentF_data = result.countcurrStudentGw[0].Total;
          this.StudentM_data = result.countcurrStudentGw[1].Total;
          this.CurrentStudentTotal = result.countcurrStudent[0].Total;
        } else{
          this.StudentF_data = [];
          this.StudentM_data = [];
          this.CurrentStudentTotal = [];
        }
      },(error)=>{
        console.error('Error fetching students counts', error);
      })
    }

  // Passout Students 
  getPassoutCount() {
    this.ds.postapi('homeDashboard/passoutStudents', null).subscribe((result: any) => {
      if(result){
        this.passoutStudentF_data = result.countAllStudentGw[0].Total;
        this.passoutStudentM_data = result.countAllStudentGw[1].Total;
        this.pasoutCount = result.countAllStudent[0].Total;
      } else{
      this.passoutStudentF_data = [];
      this.passoutStudentM_data = []
      this.pasoutCount = [];
      }
    },(error)=>{
      console.error('Error fetching students counts', error);
    })
  }


  getDRSDashboard(){
    this.ds.postapi(`homeDashboard/drsDashboard`,null).subscribe((result:any)=>{
      this.copyright_data = result[1][0];
      this.patent_data = result[2][0];
      this.technology_data = result[3][0];
      this.publication_data = result[4][0];
    },(error)=>{
      console.error('Error fetching awards data', error);
    })
  }
 

  getCurrentSessionProject(){
    this.ds.postapi(`project/GetCurrentProjectCount`,null).subscribe((result:any)=>{
      if(result){
        this.currentProject = result[0]
      } else{
       this.currentProject = [];
      }
      },(error)=>{
        console.error('Error fetching awards data', error);
      })
      
    }
  


  getKvklist() {
    this.ds.postapi('kvk/kvklist', null).subscribe((result: any) => {
      if(result){
        this.kvklist = result.length;
      } else{
        this.kvklist = [];
      }
    },(error)=>{
      console.error('Error fetching kvk counts', error);
    })
  }





  getDpartmentlist(){
    this.ds.postapi('department/departmentList/,',null).subscribe((result:any)=>{
      if(result){
        this.departmentList_data = result;
        if (Array.isArray(this.departmentList_data)) {
          this.totalDepartment = this.departmentList_data.length
        } else {
        }
      }else{
        this.departmentList_data = [];
      }
    },(error)=>{
      console.error('Error fetching department counts', error);
    })
  }

/* count function */
  // setupCounter(index: number, target: number) {
  //   this.currentCounts[index] = 0; // Start count at 0
  //   this.targets[index] = target; // Set the target count
  //   this.hasAnimated[index] = false; // Ensure the counter has not animated yet
  // }

  /* start the count on scroll to that section */
  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.counters.forEach((counter, index) => {
  //     const position = counter.nativeElement.getBoundingClientRect().top;
  //     const windowHeight = window.innerHeight;

  //     if (position < windowHeight && !this.hasAnimated[index]) {
  //       this.animateCount(index);
  //       this.hasAnimated[index] = true; // Prevent multiple animations
  //     }
  //   });
  // }

  // /* for animate the count */
  // animateCount(index: number) {
  //   const targetCount = this.targets[index];
  //   const duration = 3000; // Animation duration in milliseconds
  //   const incrementStep = Math.max(1, Math.floor(targetCount / (duration / 50))); // Dynamic step based on target count and duration

  //   let currentCount = 0;
  //   const stepTime = Math.max(10, duration / (targetCount / incrementStep)); // Interval time calculation for smoothness

  //   this.ngZone.runOutsideAngular(() => {
  //     const interval = setInterval(() => {
  //       if (currentCount < targetCount) {
  //         currentCount += incrementStep;

  //         // Ensure it doesn't exceed the target
  //         if (currentCount > targetCount) {
  //           currentCount = targetCount;
  //         }

  //         this.ngZone.run(() => {
  //           this.currentCounts[index] = currentCount;
  //         });
  //       } else {
  //         clearInterval(interval); // Stop the interval when the count reaches the target
  //       }
  //     }, stepTime);
  //   });
  // }


  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startSectionRotation() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.sections.length;
    }, 3000);
  }

  get currentSection() {
    return this.sections[this.currentIndex];
  }

}