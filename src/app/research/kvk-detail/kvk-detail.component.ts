import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute,Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-kvk-detail',
  standalone: false,
  templateUrl: './kvk-detail.component.html',
  styleUrls: ['./kvk-detail.component.scss'],
})
export class KvkDetailComponent {
  kvks_Detail: any;
  kvks_headDetail: any;
  Office_id: any;
  infra_type:any
  Activity_data: any;
  award_data: any;
  event_data: any;
  showSubContent:boolean=false;
  currentUrl!:string;
  homeslider:any;
  


  constructor(private ds: DataService, private activateroute: ActivatedRoute,private route:Router) {}

  ngOnInit(): void {

    
       // Get the current URL
       this.currentUrl = this.route.url;
      //  console.log("Initial URL:", this.currentUrl);
   
       // Update showSubContent based on the initial URL
       this.updateShowSubContent();

    this.activateroute.paramMap.subscribe((result) => {
      this.Office_id = result.get('id'); 
      this.gethomeSlider(this.Office_id);     
     // Subscribe to route events to handle URL changes
     this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.route.url;
        // console.log("Updated URL:", this.currentUrl);
        this.updateShowSubContent();
      }
    });

      this.kvkdetails();
      this.getactivitydetails();
      this.getawarddetails();
      this.geteventdetails();
      this.getInfraStructure(this.Office_id)
    });
    // this.jumpTo('Overview');

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

  private updateShowSubContent() {
    
    if (this.currentUrl.includes('/cont/')) {
      this.showSubContent = false;
    } else {
      this.showSubContent = true;
    }
  }

  kvkdetails() {
    this.ds
      .postapi(`kvk/kvkdetails/${this.Office_id}`, null)
      .subscribe((result: any) => {
        if(result){
          this.kvks_Detail = result.kvks_Detail[0];
          this.kvks_headDetail = result.kvks_headDetail[0];
        }else{
          this.kvks_Detail = [];
          this.kvks_headDetail = [];
        }
      },(error)=>{
        console.error('Error fetching kvk details', error);
      });
  }

  getactivitydetails() {
    const unit_id = this.Office_id;
    const section_id = '';
    const category_id = '';
    const emp_id = '';
    const Website_Content_ID = '';
    const RowsPerPage = 3;
    const PageNumber = 1;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        if(result){
          this.Activity_data = result;
        }else{
          this.Activity_data = [];
        }
      },(error)=>{
        console.error('Error fetching activities', error);
      });
  }

  geteventdetails() {
    const unit_id = this.Office_id;
    const section_id = '';
    const category_id = 24;
    const emp_id = '';
    const Website_Content_ID = '';
    const RowsPerPage = 3;
    const PageNumber = 1;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        if(result){
          this.event_data = result;
        }else{
          this.event_data = [];
        }
      },(error)=>{
        console.error('Error fetching events', error);
      });
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
  

  getawarddetails() {
    const unit_id = this.Office_id;
    const section_id = 5;
    const category_id = '';
    const emp_id = '';
    const Website_Content_ID = '';
    const RowsPerPage = 3;
    const PageNumber = 1;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        if(result){
          this.award_data = result;
        }else{
          this.award_data = [];
        }
      },(error)=>{
        console.error('Error fetching awards', error);
      });
  }

  jumpTo(section: any) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }


  subMenuSelected(isTrue: boolean){
    this.showSubContent=isTrue;
   
  }


}
