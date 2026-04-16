import {  Component, OnInit, NgZone, ElementRef, ViewChildren, QueryList, HostListener} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
// import * as $ from 'jquery';

@Component({
  selector: 'app-count',
  standalone: false,
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
  
})
export class CountComponent implements OnInit {
  loading: boolean = true;


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
  ugProgramms: any;
  PGProgramms: any;
  PHdProgramms: any;
  UGTotal: any;
  PGTotal: any;
  PhdTotal: any;
  kvklist: any;
  projectDash_Data: any;
  displayCount: number = 0; // Displayed value that animates
  getAllCount:boolean = false;

  // @ViewChild('collegeCounter', { static: false }) collegeCounter!: ElementRef; // Reference to the counter section
  @ViewChildren('counter') counters!: QueryList<ElementRef>; // Reference to all counter elements

  constructor(private ds: DataService,private ngZone: NgZone) { }

   ngOnInit(): void {
   
      this.getCollegedata(),
      this.getDpartmentlist(),
      this.getFacultydata(),
      this.getPassoutCount(),
      this.getCurrentCount(),
      this.getTotalCount(),
      this.getKvklist(),
      this.getPrrojectDashboard();
   
  
    // this.initializeCounters();
  }

  getDpartmentlist() {
    this.ds.postapi('homeDashboard/departmentListBycollege', null).subscribe((result: any) => {
      this.departmentList_data = result;
      this.departmentTotal = this.departmentList_data.length;
      this.loading = false;
      this.setupCounter(2, this.departmentTotal);

    })
  }

  currentCounts: number[] = []; // Holds current counts for animation
  targets: number[] = []; // Holds target values for counters
  hasAnimated: boolean[] = []; // Flags to ensure each counter animates once
 


  getCollegedata() {
    this.ds.postapi('homeDashboard/collegeList', null).subscribe((result: any) => {
      this.collegeTotal = result.length;
      this.loading = false;
      this.setupCounter(0,this.collegeTotal); // Initialize counter at index 0
    });
  }


  // Count the number of college
  getFacultydata() {
    this.ds.postapi('homeDashboard/facultyList/', null).subscribe((result: any) => {
      this.facultyList_data = result;
      this.facultyTotal = this.facultyList_data.length;
      this.loading = false;
      this.setupCounter(1,this.facultyTotal);
    })
  }


    // Passout Students 
    getCurrentCount() {
      this.ds.postapi('homeDashboard/currentStudents', null).subscribe((result: any) => {
        this.StudentF_data = result[0].Student_Count;
  
        this.StudentM_data = result[1].Student_Count;
        this.CurrentStudentTotal = this.StudentF_data + this.StudentM_data;
        this.loading = false;
        this.setupCounter(3,this.CurrentStudentTotal);
        this.setupCounter(5,this.StudentM_data);
  
      })
    }


  // Passout Students 
  getPassoutCount() {
    this.ds.postapi('homeDashboard/passoutStudents', null).subscribe((result: any) => {
      this.passoutStudentF_data = result[0].Student_Count;
      this.passoutStudentM_data = result[1].Student_Count;
      this.pasoutCount = this.passoutStudentF_data + this.passoutStudentM_data;
      this.loading = false;
      this.setupCounter(4, this.StudentF_data);
      this.setupCounter(6, this.pasoutCount);
      

    })
  }



  getUGDegreesdata() {
    const Degree_Programme_Type_Id = 1
    this.ds.postapi(`homeDashboard/degreeWiseCount/,,,${Degree_Programme_Type_Id},`, null).subscribe((result: any) => {
      this.ugProgramms = result.Response.DegreeProgramme.length
    })
  }

  getPGDegreesdata() {
    const Degree_Programme_Type_Id = 2
    this.ds.postapi(`homeDashboard/degreeWiseCount/,,,${Degree_Programme_Type_Id},`, null).subscribe((result: any) => {
      this.PGProgramms = result.Response.DegreeProgramme.length
    })
  }

  getPHdDegreesdata() {
    const Degree_Programme_Type_Id = 3
    this.ds.postapi(`homeDashboard/degreeWiseCount/,,,${Degree_Programme_Type_Id},`, null).subscribe((result: any) => {
      this.PHdProgramms = result.Response.DegreeProgramme.length
    })
  }

  async getTotalCount() {
    await this.getUGDegreesdata()
    await this.getPGDegreesdata();
    await this.getPHdDegreesdata();
    const total = this.ugProgramms + this.PGProgramms; +this.PHdProgramms
  }

  getKvklist() {
    this.ds.postapi('kvk/kvklist', null).subscribe((result: any) => {
      this.kvklist = result.kvks_Detail.length;
      this.setupCounter(7, this.kvklist);

    })
  }

  getPrrojectDashboard() {
    const fin_year = 0;
    const funding_source = 0;
    const MajorHead = 0;
    this.ds.postapi(`ourProjects/sponceredProject/${fin_year},${funding_source},${MajorHead}`, null).subscribe((result: any) => {
      this.projectDash_Data = result.UserPostResponse.PostList;
    })
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
  

// Method to perform count-up animation
/* countUp(start: number, end: number, duration: number) {
  const range = end - start;
  const stepTime = Math.abs(Math.floor(duration / range));
  let current = start;

  const increment = end > start ? 1 : -1; // Determine increment direction
  const timer = setInterval(() => {
    current += increment;
    this.displayCount = current; // Update the display value

    if (current === end) {
      clearInterval(timer); // Stop the interval when target is reached
    }
  }, stepTime);
} */



  // ngAfterViewInit(): void {
  //  setInterval(() => {
  //   this.initializeCounters();
  //  }, 1000);
  // }

  // initializeCounters(): void {
  //   $('.counter').each(function () {
  //     const $this = $(this);
  //     const countTo = parseInt($this.text(), 10);
  //     $this.text('0');

  //     $({ countNum: $this.text() }).animate({
  //       countNum: countTo
  //     },
  //       {
  //         duration: 4000,
  //         easing: 'swing',
  //         step: function (now) {
  //           $this.text(Math.floor(now));
  //         },
  //         complete: function () {
  //           $this.text(countTo);
  //         }
  //       });
  //   });
  // }





