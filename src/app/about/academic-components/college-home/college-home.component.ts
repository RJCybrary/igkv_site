import {
  Component,
  Input,
  NgZone,
  ElementRef,
  ViewChildren,
  QueryList,
  HostListener,
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-college-home',
  standalone: false,
  templateUrl: './college-home.component.html',
  styleUrls: ['./college-home.component.scss'],
})
export class CollegeHomeComponent {
  collegeList_data: any;
  constituentColleges: any;
  affiliatedColleges: any;
  collegeOverview_data: any;
  collegeType_data: any;
  numberOfCollegeTypes: any;
  collegeTotal: any;
  constituentClg: any;
  affilatedClg: any;
  departmentList_data: any;
  departmentTotal: any;
  afilatedClg: any;
  bannerImg: string = environment.PhotoUrl + 'academic-college-banner.jpg';

  /* object for counter */
  currentCounts: number[] = []; // Holds current counts for animation
  targets: number[] = []; // Holds target values for counters
  hasAnimated: boolean[] = []; // Flags to ensure each counter animates once
  @ViewChildren('counter') counters!: QueryList<ElementRef>; // Reference to all counter elements

  constructor(private ds: DataService, private ngZone: NgZone) {}

  @Input() banner_img: string = '/assets/images/academic/college.jpg';
  bookIconImg: String = environment.PhotoUrl + 'home-book-icon.png';
  iconBackground: String = environment.PhotoUrl + 'home-icon-all-college.jpg';

  ngOnInit(): void {
    this.getdata();
    this.getDpartmentlist();
  }

  // Count the number of college
  getdata() {
    this.ds.postapi('college/CollegeTypeList/,', null).subscribe(
      (result: any) => {
        if (result ) {
          this.collegeList_data = result;          
          this.collegeTotal = this.collegeList_data.length;
          this.constituentClg = this.collegeList_data.filter(
            (college: { College_Type_Id: number }) =>
              college.College_Type_Id === 1
          ).length;
          this.afilatedClg = this.collegeList_data.filter(
            (college: { College_Type_Id: number }) =>
              college.College_Type_Id === 2
          ).length;
          this.setupCounter(0, this.collegeTotal);
          this.setupCounter(2, this.constituentClg);
          this.setupCounter(3, this.afilatedClg);
        } else {
          this.collegeList_data = [];
          this.collegeTotal = [];
          this.constituentClg = [];
          this.afilatedClg = [];
        }
      },
      (error) => {
        console.error('Error fetching clg count', error);
      }
    );
  }

  getDpartmentlist() {
    this.ds
      .postapi('homeDashboard/departmentListBycollege', null)
      .subscribe((result: any) => {
        if (result ) {
          this.departmentList_data = result;
          this.departmentTotal = this.departmentList_data.length;
          this.setupCounter(1, this.departmentTotal);
        } else {
          this.departmentList_data = [];
          this.departmentTotal = [];
        }
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
    const incrementStep = Math.max(
      1,
      Math.floor(targetCount / (duration / 50))
    ); // Dynamic step based on target count and duration

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
