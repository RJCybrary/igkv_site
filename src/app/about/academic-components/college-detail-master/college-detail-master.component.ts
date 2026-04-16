import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute,Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-college-detail-master',
  standalone: false,
  templateUrl: './college-detail-master.component.html',
  styleUrls: ['./college-detail-master.component.scss']
})
export class CollegeDetailMasterComponent {
  infra_type: any;
  College_Head_detail: any;
  setData:any;
  constructor(private ds:DataService, private activateroute:ActivatedRoute,private route:Router){}
  
  // images = [
  //   { src: 'assets/images/slider/s-01.jpg', description: 'Description for Image 1' },
  //   { src: 'assets/images/slider/s-03.jpg', description: 'Description for Image 2' },
  //   // Add more images as needed
  // ];
  currentSlide = 0;
  Office_Id:any;  
  College_Detail:any;
  College_headDetail:any;
  Activity_data:any;
  infrastructure_data:any;
  departmentList:any;
  departmentcount:any;
  studentscount:any;
  award_data:any;
  event_data:any;
  showSubContent:boolean=false;
  currentUrl!:string;
  homeslider: any;
  defaultImage: any=environment.PhotoUrl + 'academic-Fee-Structure-Banner.jpg';



  ngOnInit(): void {
    // setInterval(() => this.nextSlide(), 3000); // Change 2000 to the desired interval in milliseconds
    
       // Get the current URL
       this.currentUrl = this.route.url;
      //  console.log("Initial URL:", this.currentUrl);
   
       // Update showSubContent based on the initial URL
       this.updateShowSubContent();
   
       // Subscribe to route events to handle URL changes
       this.route.events.subscribe(event => {
         if (event instanceof NavigationEnd) {
           this.currentUrl = this.route.url;
          //  console.log("Updated URL:", this.currentUrl);
           this.updateShowSubContent();
         }
       });


    this.activateroute.paramMap.subscribe(result=>{
      this.Office_Id=result.get('id')
      this.getInfraStructure(this.Office_Id);
      this.gethomeSlider(this.Office_Id);
      this.getactivitydetails(this.Office_Id);
      this.getawarddetails(this.Office_Id);
      this.geteventdetails(this.Office_Id);

      this.getclgdetails();     
      this.getdepartmentdetails();
     })



     // Handle fragment navigation on route changes
     this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToFragment();
      }
    });

  
  // Handle fragment navigation on initial load
    this.activateroute.fragment.subscribe(() => {
      this.scrollToFragment();
    });
    
  }

  private updateShowSubContent() {
    
    if (this.currentUrl.includes('/cont/')) {
      this.showSubContent = false;
    } else {
      this.showSubContent = true;
    }
  }

  getclgdetails(){
      this.ds.postapi(`college/collegeDetails/${this.Office_Id}`,null).subscribe((result:any)=>{
      if(result){
        this.College_Detail=result.collegeDetail[0];
        this.College_Head_detail=result.employeeDetail[0];
        this.setData = {
          title1:this.College_Detail.College_Full_Name_E,
           unit_id:this.Office_Id
          }
      }
      else{
        this.College_Detail=[];
        this.College_Head_detail=[];
      }
      },(error)=>{
        console.error('Error fetching college details', error);
      })
  }


  getactivitydetails(id:string){
    const unit_id = id;
    const section_id ='';
    const category_id='';
    const emp_id ='';
    const Website_Content_ID='';
    const PageNumber = 1;
    const RowsPerPage = 3;
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
        if(result){
          this.Activity_data=result;
        }else{
          this.Activity_data=[];
        }  
      },(error)=>{
        console.error('Error fetching activities', error);
      })
  }


  gethomeSlider(id:string){
    const unit_id = id;
    const section_id =1;
    const category_id='';
    const emp_id ='';
    const Website_Content_ID='';
    const RowsPerPage = 5;
    const PageNumber = 1;
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
        if(result){
          this.homeslider=result;
        }else{
          this.homeslider=[];
        }  
      },(error)=>{
        console.error('Error fetching homeslider', error);
      })
  }

getInfraStructure(id:string){
  this.ds.postapi(`officeInfrastrucutre/${id}`,null).subscribe((result:any)=>{
    if(result){
      this.infra_type = result;
    }else{
      this.infra_type = [];
    }
  },(error)=>{
    console.error('Error fetching infrastruture', error);
  })
}


getawarddetails(id:string){
  const unit_id = id;
  const section_id ='';
  const category_id=11;
  const emp_id ='';
  const Website_Content_ID='';
  const RowsPerPage = 3;
  const PageNumber = 1;
    this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
     if(result){
       this.award_data = result;
     }else{
      this.award_data = [];
     }
    },(error)=>{
      console.error('Error fetching award details', error);
    })
}


geteventdetails(id:string){
  const unit_id = id;
  const section_id ='';
  const category_id=24;
  const emp_id ='';
  const Website_Content_ID='';
  const RowsPerPage = 3;
    const PageNumber = 1;
    this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
      if(result){
        this.event_data=result;
      }else{
        this.event_data=[];
      }
    },(error)=>{
      console.error('Error fetching event details', error);
    })
}

onErrorImage(event: any) {
  event.target.src = this.defaultImage;
}


getdepartmentdetails(){
  const office_id ='';
  const subject_id ='';
  const headoffice_id=this.Office_Id;
  this.ds.postapi(`college/getDepartmentDetail/${office_id},${subject_id},${headoffice_id}`,null).subscribe((result:any)=>{
    if(result && result.Department_List && result.Department_List.length > 0){
      this.departmentList=result.Department_List;
    }else{
      this.departmentList=[];
    }
    },(error)=>{
      console.error('Error fetching depart details', error);
    })

}



private scrollToFragment() {
  const fragment = this.activateroute.snapshot.fragment;

  if (fragment) {
    // Use Angular's ChangeDetectorRef to wait until the view is stable
    setTimeout(() => {
      const element = document.getElementById(fragment);
      if (element) {
        // Scroll to the element with an offset from the top
        const elementRect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Adjust the offset as needed (e.g., 100px)
        const offset = 100;
        const scrollPosition = window.scrollY + elementRect.top - offset;

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });

        // Update the URL after a delay to ensure the scroll has completed
        setTimeout(() => {
          this.route.navigate([], {
            fragment: undefined, // Remove the fragment
            replaceUrl: true // Replace the current URL without adding a new entry to the history
          });
        }, 500); // Adjust this delay if needed based on the scroll animation time
      }
    }, 0); // Use 0 to defer execution until after the DOM update
  }
}


subMenuSelected(isTrue: boolean){
  this.showSubContent=isTrue;
 
}

}