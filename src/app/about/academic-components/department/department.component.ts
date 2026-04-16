import { Component,NgZone, ElementRef, ViewChildren, QueryList, HostListener } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-department',
  standalone: false,
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
  collegeList_data: any;
  collegeTotal: any;
  faculty_data: any;
  Department_Detail: any;
  Office_Id: any;
  departmentList_data: any;
  departmentList_data_agri: any;
  departmentList_data_agri_eng: any;
  departmentList_data_horti: any;
  bannerImg:string=environment.PhotoUrl + 'academic-college-banner.jpg';
  bookIconImg:String=environment.PhotoUrl + 'home-book-icon.png';

 
 
  Department_Images = [
    { img: `${environment.PhotoUrl}home-icon-ABM.jpg`, description: 'Agri Business Management' },    
    { img: `${environment.PhotoUrl}home-icon-economics.jpg`, description: 'Agricultural Economics' },
    { img: `${environment.PhotoUrl}home-icon-extension.jpeg`, description: 'Agricultural Extension' },
    { img: `${environment.PhotoUrl}home-icon-micro.jpg`, description: 'Agricultural Microbiology' },
    { img: `${environment.PhotoUrl}home-icon-APFE.jpg`, description: 'Agricultural Processing & Food Engineering' },
    { img: `${environment.PhotoUrl}	home-icon-Stat.jpg`, description: 'Agricultural Statistics' },
    { img: `${environment.PhotoUrl}home-icon-agrometrology.png`, description: 'Agrometeorolgy' },
    { img: `${environment.PhotoUrl}home-icon-agronomy.jpg`, description: 'agronomy' },
    { img: `${environment.PhotoUrl}home-icon-entomology.jpg`, description: 'Entomology' },
    { img: `${environment.PhotoUrl}home-icon-FMPE.jpg`, description: 'Farm Machinery and Power Engineering' },
    { img: `${environment.PhotoUrl}home-icon-floriculture.jpg`, description: 'Floriculture and Landscape' },
    { img: `${environment.PhotoUrl}home-icon-forestry.jpg`, description: 'Forestry' },
    { img: `${environment.PhotoUrl}	home-icon-fruit_science.jpg`, description: 'Fruit Science' },
    { img: `${environment.PhotoUrl}home-icon-GPB.jpg`, description: 'Genetics and Plant Breeding' },
    { img: `${environment.PhotoUrl}home-icon-PMBB.jpg`, description: 'PMBB' },
    { img: `${environment.PhotoUrl}home-icon-PLPATH.jpg`, description: 'Plant Path' },
    { img: `${environment.PhotoUrl}	home-icon-Physiology.jpg`, description: 'Plant Physioogy' },
    { img: `${environment.PhotoUrl}home-icon-SWE.jpg`, description: 'Soil and Water Engg.' },
    { img: `${environment.PhotoUrl}home-icon-SoilS.jpg`,description:'Soil Science and Agricultural Chemistry'},
    { img: `${environment.PhotoUrl}home-icon-vegetable_science.jpg`,description:'Vegetable Scinece'},
  ];
  totalDepartment: any;



   /* object for counter */
   currentCounts: number[] = []; // Holds current counts for animation
   targets: number[] = []; // Holds target values for counters
   hasAnimated: boolean[] = []; // Flags to ensure each counter animates once
   @ViewChildren('counter') counters!: QueryList<ElementRef>; // Reference to all counter elements
  deptData: any;
 
  constructor(private ds:DataService,private ngZone: NgZone){}

  ngOnInit(): void {
    this.getdata();
    this.getDpartmentlist();
    this.getDpartmentlistByFaculty_agri()
    this.getDpartmentlistByFaculty_agri_eng()
    this.getDpartmentlistByFaculty_horti()
}

show:boolean=false;

  getdata(){
    this.ds.postapi('department/departmentcount',null).subscribe((result:any)=>{
           this.faculty_data = result.facultyData;
          
          for (let i = 0; i < this.faculty_data.length; i++) {
            this.setupCounter(i + 1, this.faculty_data[i].totalCount); // Use i instead of 0
          }
           

           
    })
  }

  getDpartmentlist(){
    this.ds.postapi('department/departmentList/,',null).subscribe((result:any)=>{
        this.departmentList_data = result;
        if (Array.isArray(this.departmentList_data)) {
          this.totalDepartment = this.departmentList_data.length;
          this.setupCounter(0, this.totalDepartment);
        } else {
        }
    })
  }

  getDpartmentlistByFaculty_agri(){
    const Faculty_Id = 1
    const office_id='';
    const subject_id='';
    const Degree_Programme_Type_Id='';
    const degree_programme_id='';
    this.ds.postapi(`faculty/ProgramListInFaculty/${Faculty_Id},${office_id},${subject_id},${Degree_Programme_Type_Id},${degree_programme_id}`,null).subscribe((result:any)=>{
      this.deptData =  result
      this.departmentList_data_agri = this.deptData.slice(1);
    })
  }
 

  getDpartmentlistByFaculty_agri_eng(){
    const Faculty_Id = 2
    const office_id='';
    const subject_id='';
    const Degree_Programme_Type_Id='';
    const degree_programme_id='';
    this.ds.postapi(`faculty/ProgramListInFaculty/${Faculty_Id},${office_id},${subject_id},${Degree_Programme_Type_Id},${degree_programme_id}`,null).subscribe((result:any)=>{
      this.departmentList_data_agri_eng = result;
    })
  }
 
  getDpartmentlistByFaculty_horti(){
    const Faculty_Id = 3
    const office_id='';
    const subject_id='';
    const Degree_Programme_Type_Id='';
    const degree_programme_id='';
    this.ds.postapi(`faculty/ProgramListInFaculty/${Faculty_Id},${office_id},${subject_id},${Degree_Programme_Type_Id},${degree_programme_id}`,null).subscribe((result:any)=>{
      this.departmentList_data_horti = result;
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
