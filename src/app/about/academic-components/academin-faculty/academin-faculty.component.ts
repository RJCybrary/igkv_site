import { Component,NgZone, ElementRef, ViewChildren, QueryList, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-academin-faculty',
  standalone: false,
  templateUrl: './academin-faculty.component.html',
  styleUrls: ['./academin-faculty.component.scss']
})
export class AcademinFacultyComponent {
  faculty_Data: any;
  Faculty_Id:any;
facultyDetail: any;
  dashboard_Data_First: any;
  dashboard_Data: any;
  dashboard_Data_Second: any;
  dashboard_Data2: any;
  dashboard_Data1: any;
  sumOfData1AndData2: any;
  total: any;
  agri_engg_img:string='';
  bannerImageUrl:any;
  Program_Data: any;
  faculty_Detail: any;
  UGImage:string= environment.PhotoUrl + 'UG_faculty.jpg'; 
  PGImg:string= environment.PhotoUrl + 'PG_academic_faculty.jpg';
  PhdImg:string= environment.PhotoUrl + 'Phd_academic_faculty.jpg';
  errorImage:any=environment.PhotoUrl +'Img_notFound.png';  

  /* object for counter */
  currentCounts: number[] = []; // Holds current counts for animation
  targets: number[] = []; // Holds target values for counters
  hasAnimated: boolean[] = []; // Flags to ensure each counter animates once
  @ViewChildren('counter') counters!: QueryList<ElementRef>; // Reference to all counter elements

  constructor(private ds:DataService,private activateroute:ActivatedRoute,private ngZone: NgZone){}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result=>{
      this.Faculty_Id=result.get('id')
      this.setBannerImage(this.Faculty_Id)
      this.getdata();
      this.getDashboard();
      this.getProgramList();
     })
  }

  loding:boolean=true

  setBannerImage(Faculty_Id: string): void {
    switch (Faculty_Id) {
      case '2':
        this.bannerImageUrl = environment.PhotoUrl + 'academic-agriengineering-banner.jpg';
        break;
      case '1':
        this.bannerImageUrl = environment.PhotoUrl + 'academic-agriculture-banner.jpg';
        break;
        case '3':
          this.bannerImageUrl = environment.PhotoUrl + 'academic-horticulture-banner.jpg';
          break;
      default:
        this.bannerImageUrl = environment.PhotoUrl + 'academic-agriculture-banner.jpg'; // Default image if no match
        break;
    }
  }
 
  getdata(){
    this.ds.postapi(`faculty/facultyWiseDetail/${this.Faculty_Id}`,null).subscribe((result:any)=>{
      this.faculty_Data = result.facultyOverview[0];
      this.faculty_Detail = result.facultyDetails[0];
      this.loding=false
    })
  }

  onErrorImage(event:any){
    event.target.src=this.errorImage;
  }

  getDashboard(){
    this.ds.postapi(`faculty/facultyDashboard/${this.Faculty_Id},,,,`,null).subscribe((result:any)=>{
      this.dashboard_Data = result;
      this.dashboard_Data1 = result[0];
      this.dashboard_Data2 = result[1];
    this.total = this.dashboard_Data1.Student_Count + this.dashboard_Data2.Student_Count
    this.setupCounter(0, this.total);
    this.setupCounter(1, this.dashboard_Data1.Student_Count);
    this.setupCounter(2, this.dashboard_Data2.Student_Count);
    })
  }

  getProgramList(){
    const office_id='';
    const subject_id='';
    const Degree_Programme_Type_Id='';
    const degree_programme_id='';
    this.ds.postapi(`faculty/ProgramListInFaculty/${this.Faculty_Id},${office_id},${subject_id},${Degree_Programme_Type_Id},${degree_programme_id}`,null).subscribe((result:any)=>{
      this.Program_Data = result;
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
