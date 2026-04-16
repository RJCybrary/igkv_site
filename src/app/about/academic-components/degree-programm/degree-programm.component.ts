import { Component, NgZone,ElementRef, ViewChildren, QueryList, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-degree-programm',
  standalone: false,
  templateUrl: './degree-programm.component.html',
  styleUrls: ['./degree-programm.component.scss']
})
export class DegreeProgrammComponent {
  sessionWiseCount: any;
  degreeWiseCount: any;

   /* object for counter */
   currentCounts: number[] = []; // Holds current counts for animation
   targets: number[] = []; // Holds target values for counters
   hasAnimated: boolean[] = []; // Flags to ensure each counter animates once
   @ViewChildren('counter') counters!: QueryList<ElementRef>; // Reference to all counter elements
 
  constructor(private ds:DataService,private activateroute:ActivatedRoute,private ngZone: NgZone){}
  
  Department_Data: any;
  Program_Data: any;
  degreeProgramm_Data: any;
  DegreeProgramme: any;
  ofdegreeProgramm_Data: any;
  degreeProgrammeType: any;
  degree_Data: any;
  degreeTypeDetail: any;
  dashBoard_data: any;
  dashBoard_data1: any;
  dashBoard_data2: any;
  dashBoard_data3: any;
  Office_Head_Data: any;
  Office_Page_Data: any;
  Degree_Programme_Type_Id:any;

  bannerImg:string=environment.PhotoUrl + 'academic-degree-banner.jpg';

  UG_eligibility:string=environment.DocumentUrl + 'UG_Admission_Rule_24_25.pdf';
  UG_admission_process:string=environment.DocumentUrl + 'UG_Counseling_Guidlines.pdf';
  UG_syllabus:string= environment.DocumentUrl + '';
  UG_seat_matrix:string=environment.DocumentUrl + 'UG_Overall_Seat_Matrix_24_25.pdf';

  PG_eligibility:string=environment.DocumentUrl + 'PG_admission_rule.pdf';
  PG_admission_process:string=environment.DocumentUrl + 'PG_detailed_notice25_25.pdf';
  PG_syllabus_CET:string= environment.DocumentUrl + 'PG_CET_syllabus_24_25.pdf';
  PG_seat_matrix:string=environment.DocumentUrl + 'PG_Seat_Matrix_24_25.pdf';

Phd_seat_matrix:string=environment.DocumentUrl + 'Phd_seat_matrix_24_25.pdf';
  Phd_eligibility:string=environment.DocumentUrl + 'Phd_Admission_Rule.pdf';
  Phd_admission_process:string=environment.DocumentUrl + 'Phd_Detailed_Advertisement_24_25.pdf';
  Phd_syllabus_of_CET:string= environment.DocumentUrl + 'Phd_CET_syllabus_24_25.pdf';

  Phd_Ag_Syllabus:any= environment.Syllabus_Url + 'Phd_Ag_all_syllabus_compressed.pdf';
  Phd_AgEngg_Syllabus:any=environment.Syllabus_Url + 'Phd_Engg_all_sem_year_compressed.pdf';
  Phd_Hort_Syllabus:any=environment.Syllabus_Url + '';



  Msc_Ag_Syllabus:any=environment.Syllabus_Url + 'MSc_all_syllabus_merged_compressed.pdf';
  Msc_Hort_Syllabus:any=environment.Syllabus_Url + 'MSc_all_syllabus_merged_compressed.pdf';
  MTech_Engg_Syllabus=environment.Syllabus_Url + 'MTech_syllabus_all_year_sem_merged.pdf';
  MTech_Food_Syllabus=environment.Syllabus_Url + '';
  MBA_ABM_sylabus:string=environment.Syllabus_Url + 'MBA_ABM_syllabus_compressed.pdf';


  Bsc_Ag_Syllabus=environment.Syllabus_Url + 'BSC_all_year_sem_compressed.pdf';
  BTech_Ag_Engg_Syllabus=environment.Syllabus_Url + 'BTech_all_year_sem_compressed.pdf';
  BTech_Food_Syllabus=environment.Syllabus_Url + '';
  

  Msc_DP_Id:any=14;
  Msc_Ag_DP_Id:any=12;
  Msc_Hort_DP_Id:any=57;
  MTech_DP_Id:any=22;
  MBA_ABM_DP_Id:any=56;

  Bsc_DP_Id:any;
  Bsc_Ag_DP_Id:any=11;
  Bsc_Hort_DP_Id:any;
  BTech_Ag_Engg_DP_Id:any=21;
  BTech_Food_DP_Id:any=81;

  Phd_DP_Id:any=80;
  Phd_Ag_DP_Id:any=5;
  Phd_Ag_Engg_DP_Id:any=1;
  Phd_Hort_DP_Id:any=79;

 


  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result=>{
      this.Degree_Programme_Type_Id=result.get('id')
      this.getProgramList();
      this.getdata();
      this.getclgdetails();
      this.getStudentcount();
     })
  }

  getclgdetails(){
    this.ds.postapi(`degreeProgram/degreeProgramTypeData/${this.Degree_Programme_Type_Id}`,null).subscribe((result:any)=>{
    this.degree_Data = result;
    
    })
}

  getdata(){
    this.ds.postapi(`degreeProgram/degreeWiseSubjectDetail/,,,${this.Degree_Programme_Type_Id},`,null).subscribe((result:any)=>{
      this.degreeProgramm_Data = result;
    })
  }



  getProgramList(){
    const Faculty_Id='';
    const office_id='';
    const subject_id='';
    const degree_programme_id='';
    this.ds.postapi(`faculty/ProgramListInFaculty/${Faculty_Id},${office_id},${subject_id},${this.Degree_Programme_Type_Id},${degree_programme_id}`,null).subscribe((result:any)=>{
      this.Program_Data = result;
    })
  }
  
  getStudentcount() {
    const session = 23;
    this.ds.postapi(`degreeProgram/getCount/${session}`, null).subscribe((result: any) => {
      this.sessionWiseCount = result;
      if (this.Degree_Programme_Type_Id == 1) {
        this.degreeWiseCount = result[1][0]; 
      } else if (this.Degree_Programme_Type_Id == 2) {
        this.degreeWiseCount = result[2][0];
      } else if (this.Degree_Programme_Type_Id == 3) {
        this.degreeWiseCount = result[3][0]; 
      } else {
        console.error('No matching index found for Degree_Programme_Type_Id');
      }
      this.setupCounter(0, this.degreeWiseCount.Tot_Student);
      this.setupCounter(1, this.degreeWiseCount.Male);
      this.setupCounter(2, this.degreeWiseCount.Female);
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
