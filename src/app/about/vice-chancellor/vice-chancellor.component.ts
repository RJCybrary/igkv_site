import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-vice-chancellor',
  standalone: false,
  templateUrl: './vice-chancellor.component.html',
  styleUrls: ['./vice-chancellor.component.scss']
})
export class ViceChancellorComponent {
  vc_data: any;
  vc_pagedata: any;
  Activity_data:any;
  award_data:any;
  event_data:any;
  achievement_data:any;
  visit_data: any;
  tushil:any;
  media_data: any;
  speech_data: any;
  banner_heading:string = `Vice Chancellor's`

  constructor(private ds:DataService,private cms :CommonService){}
  ngOnInit(): void {
    this.getdata();
    this.getactivitydetails();
    this.getawarddetails();
    this.geteventdetails();
    this.getSpeechDetails();
    this.getactivityVcVisit();
    this.getPrintMedia();

// =============== Slider code ==========
this.startImageSlideshow();
$(document).ready(function() {
  var navbar = $('#navbar');
  var position = $(window).scrollTop() ?? 0;

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll !== undefined && scroll > position!) {
      // Scrolling down
      navbar.addClass('transparent');
      navbar.removeClass('white');
    } else {
      // Scrolling up
      if (scroll !== undefined && scroll <= 0) {
        navbar.removeClass('transparent');
      } else {
        navbar.addClass('white');
      }
    }

    position = scroll!;
  });
});

  }

  unit_id = 1
  
  getdata(){
    this.ds.postapi('viceChancellore',null).subscribe((result:any)=>{
      if(result && result.vc_data && result.vc_data.length > 0 && result.vc_pagedata && result.vc_pagedata.length > 0 ){
        this.vc_data = result.vc_data[0];
        this.vc_pagedata = result.vc_pagedata[0];
      } else{
        this.vc_data = [];
        this.vc_pagedata = [];
      }
    },(error)=>{
      console.error('Error fetching vice chancellor data', error);
    })
  }



  setdetails_vc(val1:string,val2:string){
    this.cms.setCatData(this.banner_heading,val1,'',val2)
  }

  // getachievementdetails(){
  //   const unit_id = ''
  //   const section_id ='';
  //   const category_id='';
  //   const emp_id =1311;
  //   const Website_Content_ID='';
  //     this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id}${Website_Content_ID}`,null).subscribe((result:any)=>{
  //      if(result){
  //        this.achievement_data=result;
  //      }else{
  //       this.achievement_data=[];
  //      }
  //     },(error)=>{
  //       console.error('Error fetching achievement data', error);
  //     })
  // }

  geteventdetails(){
    const unit_id = '';
    const section_id ='';
    const category_id= 24;
    const emp_id =1311;
    const Website_Content_ID='';
    const PageNumber = 1;
    const RowsPerPage = 3;
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
        if(result){
          this.event_data=result;
        }else{
        this.event_data=[];
        }
      },(error)=>{
        console.error('Error fetching event data', error);
      })
  }

  getactivitydetails(){
    const unit_id = '';
    const section_id ='';
    const category_id='';
    const emp_id =1311;
    const Website_Content_ID='';
    const PageNumber = 1;
    const RowsPerPage = 5;
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
       if(result){
        this.Activity_data=result;
       }else{
        this.Activity_data=[];
       }
      },(error)=>{
        console.error('Error fetching activity data', error);
      })
  }

  getawarddetails() {
    const unit_id = '';
    const section_id = '';
    const category_id = 11;
    const emp_id = 1311;
    const Website_Content_ID = '';
    const PageNumber = 1;
    const RowsPerPage = 3;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        this.award_data = result;
      });
  }

  getSpeechDetails() {
    const unit_id = '';
    const section_id = '';
    const category_id = 29;
    const emp_id = 1311;
    const Website_Content_ID = '';
    const PageNumber = 1;
    const RowsPerPage = 3;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        // this.speech_data = result;
        if(result){
        this.speech_data=result;
       }else{
        this.speech_data=[];
       }
      },(error)=>{
        console.error('Error fetching activity data', error);
      })
  }


  getPrintMedia() {
    const unit_id = '';
    const section_id = '';
    const category_id = 20;
    const emp_id = 1311;
    const Website_Content_ID = '';
    const PageNumber = 1;
    const RowsPerPage = 3;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        // this.media_data = result;

        if(result){
          this.media_data=result;
         }else{
          this.media_data=[];
         }
        },(error)=>{
          console.error('Error fetching activity data', error);
        })
  }


  getactivityVcVisit(){
    const unit_id = ''
    const section_id ='';
    const category_id=17;
    const emp_id =1311;
    const Website_Content_ID='';
    const PageNumber = 1;
    const RowsPerPage = 4;
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
        if(result){
          this.visit_data=result;
        }else{
          this.visit_data=[];
        }
      },(error)=>{
        console.error('Error fetching visit data', error);
      })
  
  } 

//  IMage Slider Code For Banner 

  imageSources: string[] = [
    environment.PhotoUrl + 'about-vc-banner-1.jpg',
    environment.PhotoUrl + 'about-vc-banner-2.jpg',
  ];

  currentImageIndex = 0;
  currentImageUrl = this.imageSources[this.currentImageIndex];

  startImageSlideshow(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageSources.length;
      this.currentImageUrl = this.imageSources[this.currentImageIndex];
    }, 4000); // Change image every 3 seconds (adjust the duration as needed)
  }
  

}