import { Component , NgZone, ElementRef, ViewChildren, QueryList, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-director-master',
  standalone: false,
  templateUrl: './director-master.component.html',
  styleUrls: ['./director-master.component.scss'],
})
export class DirectorMasterComponent {
  Activity_data: any;
  Event_Data:any;
  award_data:any;
  departmentList_data: any;
  departmentTotal!: number;
  collegeList_data: any;
  collegeTotal!: number;
  facultyList_data: any;
  facultyTotal: any;
  passoutStudentF_data!: number;
  passoutStudentM_data!: number;
  pasoutCount!: number;
  StudentF_data!: number;
  StudentM_data!: number;
  CurrentStudentTotal!: number;
  Office_Head_Data: any;
  Office_Page_Data: any;
  currentProject: any;
  imageUrl: string = environment.PhotoUrl + 'academic-DI-banner.jpg';
  // DRS_img: string = environment.PhotoUrl + 'research-DRS-banner.jpg';
  // DSW_img: string = environment.PhotoUrl + 'StudentWelfare-DSW-banner.jpg';
  // DES_img: string = environment.PhotoUrl + 'Extension-DES-banner.jpg';
  // DF_img: string = environment.PhotoUrl + 'academic-DI-banner.jpg';
  // DI_img: string = environment.PhotoUrl + 'academic-DI-banner.jpg';
  Map_URL:any='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193.99654893162554!2d81.69263072311882!3d21.234904836633614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c2cd61ab13f3%3A0x88aa0d80dc82ad34!2sUniversity%20Office%2C%20IGKV%20Raipur!5e1!3m2!1sen!2sin!4v1724481794537!5m2!1sen!2sin';


  Map_DI_Ofc_URL:any='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193.99654893162554!2d81.69263072311882!3d21.234904836633614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c2cd61ab13f3%3A0x88aa0d80dc82ad34!2sUniversity%20Office%2C%20IGKV%20Raipur!5e1!3m2!1sen!2sin!4v1724481794537!5m2!1sen!2sin';
  Map_DRS_URL:any='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1551.9506285897166!2d81.70194709989451!3d21.236972401480525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c2c516995db7%3A0x44c044f4649c645f!2sDIRECTORATE%20OF%20RESEARCH%20SERVICES!5e1!3m2!1sen!2sin!4v1724481869826!5m2!1sen!2sin';
  Map_DES_URL:any='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1551.95071686307!2d81.703510454891!3d21.236964015523178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c2c4e2adf045%3A0x5d8918435367f808!2sDirectorate%20of%20Extension!5e1!3m2!1sen!2sin!4v1724481955770!5m2!1sen!2sin';
  Map_DF_URL:any='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652.5144468427791!2d81.70408076034467!3d21.237065779940515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c2c51eee8841%3A0x1d949ef9e13cff68!2sDirectorate%20of%20Farms%2C%20IGKV!5e1!3m2!1sen!2sin!4v1724482030296!5m2!1sen!2sin';
  Map_DSW_URL:any='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652.5144468427791!2d81.70408076034467!3d21.237065779940515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c2c51bba3c01%3A0x625adf729c2f43eb!2sDean%20Student%20Welfare!5e1!3m2!1sen!2sin!4v1724482079145!5m2!1sen!2sin';
  

  unit_id: any;

  /* objecty for counter */
  currentCounts: number[] = []; // Holds current counts for animation
  targets: number[] = []; // Holds target values for counters
  hasAnimated: boolean[] = []; // Flags to ensure each counter animates once
  kvklist :any
  @ViewChildren('counter') counters!: QueryList<ElementRef>; // Reference to all counter elements
  scientist: any;
  farm: any;
  project_data: any  = {};
  copyright_data: any;
  patent_data: any;
  technology_data: any;
  publication_data: any;
  variety_data: any;

  constructor(private cdr: ChangeDetectorRef,private ds: DataService, private activateroute: ActivatedRoute,private ngZone: NgZone,private cms :CommonService) {}

  // banner_data = [
  //   {img : 'https://igkv.ac.in/images/AngWeb/Photos/academic-Fee-Structure-Banner.jpg' , title: 'slide1' , id : 1},
  //   {img : 'https://igkv.ac.in/_Attachment/web/Section_Content/Home_Main_Slider/2024/59/Home_Main_Slider_20240213112018405.jpg' , title: 'slide2' , id : 2}
  // ]
  banner_data: Array<{ img: string; title: string; id: number }> = [];


  banners: Record<string, { img: string; title: string; id: number }[]> = {
    '100': [
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DRS-1.jpg', title: 'Slide 1', id: 1 },
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DRS-2.jpg', title: 'Slide 2', id: 2 },
    ],
    '101': [
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DE-2.jpg', title: 'Slide 1', id: 1 },
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DE-1.jpg', title: 'Slide 2', id: 2 },
    ],
    '111': [
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DI-3.jpg', title: 'Slide 2', id: 2 },
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DI-2.jpg', title: 'Slide 1', id: 1 },
    ],
    '112': [
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/academic-Fee-Structure-Banner.jpg', title: 'Slide 1', id: 1 },
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/D-farm2.jpg', title: 'Slide 2', id: 2 },
    ],
    '57': [
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DSW-1.jpg', title: 'Slide 1', id: 1 },
      { img: 'https://igkv.ac.in/images/AngWeb/Photos/DSW-2.jpg', title: 'Slide 2', id: 2 },
    ],
    default: [
      { img: 'https://igkv.ac.in/_Attachment/web/Section_Content/Home_Main_Slider/2024/59/Home_Main_Slider_20240213112018405.jpg', title: 'Default Slide 1', id: 1 },
      { img: 'https://igkv.ac.in/_Attachment/web/Section_Content/Home_Main_Slider/2024/59/Home_Main_Slider_20240213112018405.jpg', title: 'Default Slide 2', id: 2 },
    ],
  };


  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((result) => {
      this.unit_id = result.get('id');
      this.loadBannerData();
      this.getFarm()
      if(this.unit_id==100)
      {
        // this.imageUrl= this.DRS_img;
        this.Map_URL=this.Map_DRS_URL;
        
      }
      else if(this.unit_id==101){
        // this.imageUrl=this.DES_img;
        this.Map_URL=this.Map_DES_URL;
        this.getKvklist();
        this.getScientist();
        this.getFarm();
        this.getCountFarmerCropDoctor();
      }
      else if(this.unit_id==111){
        // this.imageUrl=this.DI_img;
        this.Map_URL=this.Map_DI_Ofc_URL;
        this.getCollegedata();
        this.getFacultydata();
        this.getDpartmentlist();
        this.getCurrentCount();
        this.getPassoutCount();

      }
      else if(this.unit_id==57){
        // this.imageUrl=this.DSW_img;
        this.Map_URL=this.Map_DSW_URL;
        this.getCollegedata();
        this.getCurrentCount();
        this.getPassoutCount();
      }
      else if(this.unit_id==112){
        // this.imageUrl=this.DF_img;
        this.Map_URL=this.Map_DF_URL;
        this.getKvklist();
        this.getScientist();
        this.getFarm()
        this.getCountFarmerCropDoctor();
      }
      else{
        this.imageUrl = environment.PhotoUrl + 'academic-DI-banner.jpg';
        this.Map_URL='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193.99654893162554!2d81.69263072311882!3d21.234904836633614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c2cd61ab13f3%3A0x88aa0d80dc82ad34!2sUniversity%20Office%2C%20IGKV%20Raipur!5e1!3m2!1sen!2sin!4v1724481794537!5m2!1sen!2sin';

      }
      this.getOfficeDetails();
      this.getawarddetails();
      this.getactivitydetails();
      this.getEventdetails();
      this.getDRSDashboard();
      this.getDashborad();
      this.getCurrentSessionProject();
    });     

  }

  loadBannerData(): void {
    const id = this.unit_id as string; // Explicitly cast `unit_id` to `string`.
    if (id && this.banners[id]) {
      this.banner_data = this.banners[id];
    } else {
      this.banner_data = this.banners['default'];
    }
  }

  getOfficeDetails(){
    this.ds.postapi(`OfficeDetails/${this.unit_id}`,null).subscribe((result:any)=>{
     if (result && result.Office_Head_Data && result.Office_Head_Data.length > 0 && result.Office_Page_Data  && result.Office_Page_Data.length > 0 ){
      this.Office_Head_Data = result.Office_Head_Data[0];
      this.Office_Page_Data = result.Office_Page_Data[0];
    }else{
      this.Office_Head_Data = [];
      this.Office_Page_Data = [];
    }      
    },(error)=>{
      console.error('Error fetching office details', error);
    })
  }
  // department list
  getDpartmentlist() {
    this.ds
      .postapi('homeDashboard/departmentListBycollege', null)
      .subscribe((result: any) => {
        if(result){
          this.departmentList_data = result;
          this.departmentTotal = this.departmentList_data.length;
          this.setupCounter(2, result.length);
        } else{
          this.departmentList_data = [];
          this.departmentTotal = this.departmentList_data.length;
        }
      },(error)=>{
        console.error('Error fetching department details', error);
      });
  }

  // Count the number of college
  getCollegedata() {
    this.ds.postapi('homeDashboard/collegeList', null).subscribe((result: any) => {
    if(result){
      this.collegeList_data = result;
      this.collegeTotal = this.collegeList_data.length;
      this.setupCounter(0, result.length);
    } else{
      this.collegeList_data = [];
      this.collegeTotal = this.collegeList_data.length;
    }
    },(error)=>{
      console.error('Error fetching college data', error);
    });
  }

  // Count the number of college
  getFacultydata() {
    this.ds
      .postapi('homeDashboard/facultyList', null)
      .subscribe((result: any) => {
        if(result){
          this.facultyList_data = result;
          this.facultyTotal = this.facultyList_data.length;
          this.setupCounter(1, result.length);
        } else{
          this.facultyList_data = [];
          this.facultyTotal = this.facultyList_data.length;
        }
      },(error)=>{
        console.error('Error fetching faculty data', error);
      });
  }

  // Passout Students
  getPassoutCount() {
    this.ds
      .postapi('homeDashboard/passoutStudents', null)
      .subscribe((result: any) => {
        if(result){
          
        this.passoutStudentF_data = result.countAllStudentGw[0].Total;
        this.passoutStudentM_data = result.countAllStudentGw[1].Total;
        this.pasoutCount = result.countAllStudent[0].Total;
        this.setupCounter(4, this.pasoutCount);
        } else{
          this.passoutStudentF_data = 0;
          this.passoutStudentM_data = 0;
          this.pasoutCount = 0;
        }
      },(error)=>{
        console.error('Error fetching students count', error);
      });
  }

  // Passout Students
  getCurrentCount() {
    this.ds
      .postapi('homeDashboard/passoutStudents', null)
      .subscribe((result: any) => {
        if(result){
          this.StudentF_data = result.countcurrStudentGw[0].Total;
          this.StudentM_data = result.countcurrStudentGw[1].Total;
         this.CurrentStudentTotal = result.countcurrStudent[0].Total;
         this.setupCounter(3, this.CurrentStudentTotal);
        } else{
          this.StudentF_data = 0;
          this.StudentM_data = 0;
         this.CurrentStudentTotal = 0;
        }
      },(error)=>{
        console.error('Error fetching students count', error);
      });
  }


  getKvklist(){
    this.ds.postapi('kvk/kvklist',null).subscribe((result:any)=>{
      if(result){
        this.kvklist = result.length;
      }else{
        this.kvklist = [];
      }
    },(error)=>{
      console.error('Error fetching kvk list', error);
    })
  }

  getCountFarmerCropDoctor() {
    const apiUrl = 'http://192.168.1.29/dssnew/webservices/cropdoctornew.asmx/getCountFarmerCropDoctor';
    this.ds.getLiveapi(apiUrl).subscribe(
      (result: any) => {
        const dowloads =  result.Response.List[0].dowloads
        const registered_farmer =  result.Response.List[0].registered_farmer;
        this.setupCounter(1, dowloads);
        this.setupCounter(2, registered_farmer);
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }
  

  Girls_Hostel:number=5


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

  
  setdetails_dir(val1:string,val2:any){
    this.cms.setCatData(this.Office_Page_Data.office_name,val1,'',val2)
  }


  getactivitydetails() {
    const unit_id = this.unit_id;
    const section_id = '';
    const category_id = '';
    const emp_id = '';
    const Website_Content_ID = '';
    const PageNumber = 1;
    const RowsPerPage = 3;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        if(result){
          this.Activity_data = result;
        } else{
          this.Activity_data = [];
        }
      },(error)=>{
        console.error('Error fetching activities', error);
      });
  }

  getEventdetails() {
    const unit_id = this.unit_id;
    const section_id = '';
    const category_id = 24;
    const emp_id = '';
    const Website_Content_ID = '';
    const PageNumber = 1;
    const RowsPerPage = 3;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        if(result){
          this.Event_Data = result;
        } else{
          this.Event_Data = [];
        }
      },(error)=>{
        console.error('Error fetching events data', error);
      });
  }

  getawarddetails(){
    const unit_id = this.unit_id;
    const section_id ='';
    const category_id=11;
    const emp_id ='';
    const Website_Content_ID='';
    const PageNumber = 1;
    const RowsPerPage = 3;
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
      if(result){
        this.award_data = result;
      } else{
       this.award_data = [];
      }
      },(error)=>{
        console.error('Error fetching awards data', error);
      })
  }

  getScientist(){
      this.ds.postapi(`kvk/scientist/`,null).subscribe((result:any)=>{
      if(result){
        this.scientist = result[0].Total_Scientist;
      } else{
       this.scientist = [];
      }
      },(error)=>{
        console.error('Error fetching awards data', error);
      })
  }

  getFarm(){
    this.ds.getapi(`getFarm/farmCount/`).subscribe((result:any)=>{
    if(result){
      this.farm = result[0].total_farm
    } else{
     this.farm = [];
    }
    },(error)=>{
      console.error('Error fetching awards data', error);
    })
}



getDRSDashboard(){
  this.ds.postapi(`homeDashboard/drsDashboard`,null).subscribe((result:any)=>{
    this.project_data = result[0][0];
    this.copyright_data = result[1][0];
    this.patent_data = result[2][0];
    this.technology_data = result[3][0];
    this.publication_data = result[4][0];
    this.cdr.detectChanges();

  },(error)=>{
    console.error('Error fetching awards data', error);
  })
}

getDashborad(){
  this.ds.getapi(`varietyreleased/dash`).subscribe((result:any)=>{
    this.variety_data=result[0][0]

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


} 