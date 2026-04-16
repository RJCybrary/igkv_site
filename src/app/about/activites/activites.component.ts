import { Component ,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup } from '@angular/forms';  // Import FormControl



@Component({
  selector: 'app-activites',
  standalone: false,
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent {

  selected_event_id!:string
  Activities_data:any;
  Activities_Id:any;
  sectionId:any;
  Title:any;
  Event_List:any;
  Unit_Type_Id:any;
  Unit_ID:any;
  loding:boolean=true;
  showCategory:boolean = false;
  showOnlyContent:boolean = false;
  Office_Id:any;
  iddataoverflow:boolean = false;
  isLoading: boolean = false;

  bannerImg:String=environment.PhotoUrl + 'about-activities-banner.jpg';
  errorImage:any=environment.PhotoUrl + 'no_image_available_1.jpg';

currentPages: number = 1;  
@Input() rowsPerPage: number = 9;
totalrecords!: number;
startdatafrom!: number;
searchForm: FormGroup;

  constructor(private fb: FormBuilder,private ds:DataService, private activateroute:ActivatedRoute,private route:Router,private cms: CommonService){
    this.searchForm = this.fb.group({
      Content_Title: [''],
  });
  }

  ngOnInit() {
    this.activateroute.paramMap.subscribe(result => {
      this.Activities_Id = result.get('id');
      this.loding=false;
      const currentUrl = this.route.url;
      if(currentUrl.includes('about/activities')){
        if(this.Activities_Id == 0){
          this.Title =  'Happenings At IGKV'
          const section_id = '1'
          this.gethomepageactivities(section_id,0,'');
        }
        if(this.Activities_Id == 28){
          this.Title =  'Upcoming Events'
          this.onSelectCategory('28',0,'');
        }
        if(this.Activities_Id === 'all'){
          this.Title =  'Activities'
          this.gethomepageactivities('',0,'');
        }
        this.showCategory = true;
      }
      // if (currentUrl.includes('college-home/college/')) {
      //   this.Office_Id = this.Activities_Id;
      //   if(this.Activities_Id == 59){
      //     this.Unit_ID = 0;
      //   }
      //   else{
      //     this.Unit_ID = this.Office_Id;
      //   }
      //   this.Activities_Id = 5;
      //   this.Unit_Type_Id = 4;
      //   this.getActivitiesdetails('',0,'');
       
      // } else if (currentUrl.includes('/kvk-home/kvk/')) {
        
      //   this.Unit_Type_Id = 5;
      //   if(currentUrl.includes('cont/awards')){
      //     this.sectionId=0;
      //     this.Activities_Id=101;
      //   }
      //   else if(currentUrl.includes('cont/Events')){
      //     this.sectionId=0;
      //     this.Activities_Id=102;
      //   }
      //   else if(currentUrl.includes('cont/Training')){
      //     this.sectionId=1;
      //     this.Activities_Id=103;
      //   }
      //   else if (currentUrl.includes('cont/FLD')){
      //     this.sectionId=1;
      //     this.Activities_Id=104;
      //   }
      //   else{
      //     this.sectionId=2;
      //   }
      // } 
      if(currentUrl.includes('/category/')) {
        this.sectionId = this.Activities_Id;
        this.onSelectCategory(this.sectionId,0,'')
     this.currentPages = 1
        this.Unit_Type_Id=4;
      }else if(currentUrl.includes('about/awards-achieve'))  {
        this.showOnlyContent = true;
        this.Unit_Type_Id = 4;
        this.getEventList(this.Unit_Type_Id); 
        this.showCategory = false;
        this.onSelectCategory(this.Activities_Id,0,'')
        // this.getTitle()
        // this.Unit_ID = 0;
        // // this.getActivitiesdetails('');
      }
     this.Unit_Type_Id = 4;
    this.getEventList(this.Unit_Type_Id);
    // this.getTitle(this.Activities_Id);
    });
  }


  getActivitiesdetails(id:String,pageNumber: number,search_data:string): void {
    const Unit_ID = this.Unit_ID;
    const section_id = this.Activities_Id;
    const category_id = id;
    const emp_id = '';
    const Website_Content_ID = '';
    const Content_Title = search_data || ''; 
    const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
    const adjustedStartRowFrom = Math.max(0, startRowFrom);
    const queryString = `${Unit_ID},${section_id},${category_id},${emp_id},${Website_Content_ID},${Content_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;
    this.ds.postapi(`ActivityList/paging/${queryString}`, null).subscribe(
      (result: any) => {
        if (result) {
          this.Activities_data = result?.data
        } else {
          this.Activities_data = [];
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }


  gethomepageactivities(id:String,pageNumber: number,search_data:string): void {
    this.isLoading = true;
    const Unit_ID = 0;
    const section_id = id;
    const category_id = '';
    const emp_id = '';
    const Website_Content_ID = '';
    const Content_Title = search_data || ''; 
    const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
    const adjustedStartRowFrom = Math.max(0, startRowFrom);
    const queryString = `${Unit_ID},${section_id},${category_id},${emp_id},${Website_Content_ID},${Content_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;

    this.ds.postapi(`ActivityList/paging/${queryString}`, null).subscribe(
      (result: any) => {
        if (result) {
          this.totalrecords = result.totaldata;
          this.Activities_data = result?.data;
          this.isLoading = false;
          if(this.rowsPerPage > 9){
            this.iddataoverflow = true
          }
        } else {
          this.Activities_data = [];
          this.isLoading = false;
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }


  getEventList(id:any){
    const Unit_Type_Id=id
    this.ds.postapi(`ActivityList/eventList/${Unit_Type_Id}`,null).subscribe((result:any)=>{
      if(result){
        this.Event_List=result;
      } else{
        this.Event_List = []
      }
    },(error) => {
      console.error('Error fetching events', error);
    })
  } 
  
 
  onSelectCategory(selectedId: string, pageNumber: number, search_data: string): void {
    this.isLoading = true;
    const Unit_ID = 0;
    const section_id = '';
    const category_id = selectedId;
    const emp_id = '';
    const Website_Content_ID = '';
    const Content_Title = search_data || ''; 
    const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
    const adjustedStartRowFrom = Math.max(0, startRowFrom);
    const queryString = `${Unit_ID},${section_id},${category_id},${emp_id},${Website_Content_ID},${Content_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;
    
    this.selected_event_id = selectedId;
    this.startdatafrom = adjustedStartRowFrom;
  
    this.ds.postapi(`ActivityList/paging/${queryString}`, null).subscribe(
      (result: any) => {
        if (this.Event_List) {
          const get_title = this.Event_List.find((event: any) => event.Event_Category_ID == selectedId);
          this.Title = get_title?.Event_Category_Name_E || '';
  
          if (result) {
            this.totalrecords = result.totaldata || 0;
  
            let filteredData = Array.isArray(result.data) ? result.data : [];
            
            if (category_id === '28') {
              const currentDate = new Date();
             filteredData = filteredData.filter((item: any) => {
                const eventDate = new Date(item.web_content_date2);
                return eventDate >= currentDate;
              });

              this.totalrecords = filteredData.length;
            }
  
            this.Activities_data = filteredData;
  
            this.iddataoverflow = this.rowsPerPage > 9;
            this.isLoading = false;
  
          } else {
            this.Activities_data = [];
            this.isLoading = false;
          }
        }
      },
      (error) => {
        console.error('Error fetching data', error);
        this.isLoading = false;
      }
    );
  }
  

  onSelectCategorysmall(event: any,pageNumber: number,search_data:string): void {
    this.isLoading = true;
    const selectedValue = event.target.value;
    const Unit_ID = 0;
    const section_id = '';
    const category_id = selectedValue;
    const emp_id = '';
    const Website_Content_ID = '';
    const Content_Title = search_data || ''; 
    const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
    const adjustedStartRowFrom = Math.max(0, startRowFrom);
    const queryString = `${Unit_ID},${section_id},${category_id},${emp_id},${Website_Content_ID},${Content_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;
 
    this.ds.postapi(`ActivityList/paging/${queryString}`, null).subscribe(
      (result: any) => {
        if (this.Event_List) {
          const get_title = this.Event_List.find((event: any) => event.Event_Category_ID == selectedValue);
          this.Title = get_title?.Event_Category_Name_E || '';
  
          if (result) {
            this.totalrecords = result.totaldata || 0;
  
            let filteredData = Array.isArray(result.data) ? result.data : [];
            
            if (category_id === '28') {
              const currentDate = new Date();
             filteredData = filteredData.filter((item: any) => {
                const eventDate = new Date(item.web_content_date2);
                return eventDate >= currentDate;
              });

              this.totalrecords = filteredData.length;
            }
  
            this.Activities_data = filteredData;
  
            this.iddataoverflow = this.rowsPerPage > 9;
            this.isLoading = false;
  
          } else {
            this.Activities_data = [];
            this.isLoading = false;
          }
        }

      },
      (error) => {
        console.error('Error fetching data', error);
        this.isLoading = false;
      }
    );
  }

  

  setdetails(){
    this.cms.setCatData(this.Title,this.Title,this.Activities_Id,'/about/activities/category/')
  }

  OnErrorImage(event:any){
    event.target.src=this.errorImage
  }
  
  onPageChanged(newPage: number): void {
    this.currentPages = newPage; 
    if(this.Activities_Id === 'all'){
      this.gethomepageactivities('',this.currentPages,'');
    }else if(this.Activities_Id == 0){
      this.gethomepageactivities('1',this.currentPages,'');
    }else if(this.Activities_Id == 28){
      this.gethomepageactivities('28',this.currentPages,'');
    } else{
      this.onSelectCategory(this.selected_event_id,this.currentPages,'')
    }
  }

  onSearchCriteriaReceived(searchCriteria: any): void {
    this.currentPages = 1;
    if(this.Activities_Id === 'all'){
      this.gethomepageactivities('',this.currentPages,searchCriteria);
    }else if(this.Activities_Id == 0){
      this.gethomepageactivities('1',this.currentPages,searchCriteria);
    }else if(this.Activities_Id == 28){
      this.gethomepageactivities('28',this.currentPages,searchCriteria);
    } else{
      this.onSelectCategory(this.selected_event_id,this.currentPages,searchCriteria)
    }
  }

  onRowsPerPageChanged(newRowsPerPage: number): void {
    this.rowsPerPage = newRowsPerPage;
  }

}
