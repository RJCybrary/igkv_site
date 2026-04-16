import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-nss',
  standalone: false,
  templateUrl: './nss.component.html',
  styleUrls: ['./nss.component.scss']
})
export class NssComponent {
  Activities_data: any;

  constructor( private activateroute:ActivatedRoute,private route:Router,private ds:DataService){}
  Office_Id:any;
  bannerImg:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-5.jpg';
  nssLogo:string=environment.PhotoUrl + 'StudentWelfare-PublicService-nssLogo.png';
  konarkLogo:String=environment.PhotoUrl + 'StudentWelfare-NSS-KonarkLogo.jpg';
  @ViewChild('bannerVideo') bannerVideo!: ElementRef<HTMLVideoElement>;
  @Input() banner_video: string=environment.VideoUrl + 'NSS-video.mp4';
  @Input() banner_heading: string="NSS";
  errorImage:any=environment.PhotoUrl + 'no_image_available.jpg';

  yoga_awareness = [
    { src: environment.PhotoUrl + 'StudentWelfare-PublicServices-AwarenessProgram-Yoga-1.jfif', title: 'Yoga Awareness and Demonstration Program',date:'12 June 2022',about:'Yoga demonstration program was organized by Indira Gandhi Agricultural University Raipur and The Yoga Institute Raipur to encourage people towards yoga.  On this occasion Mr. Ganesh Sharma, Honorable Chairman of Chhattisgarh Yoga Commission, was present as the chief guest and presided over by Dr. Girish Chandel Mani, Vice Chancellor, Indira Gandhi Agricultural University Raipur, all the students of National Service Scheme were present on this occasion.'},
    { src: environment.PhotoUrl + 'StudentWelfare-PublicServices-AwarenessProgram-Yoga-2.JPG', title: 'Yoga Awareness and Demonstration Program',date:'12 June 2022',about:'Yoga demonstration program was organized by Indira Gandhi Agricultural University Raipur and The Yoga Institute Raipur to encourage people towards yoga.  On this occasion Mr. Ganesh Sharma, Honorable Chairman of Chhattisgarh Yoga Commission, was present as the chief guest and presided over by Dr. Girish Chandel Mani, Vice Chancellor, Indira Gandhi Agricultural University Raipur, all the students of National Service Scheme were present on this occasion.'},
    { src: environment.PhotoUrl + 'StudentWelfare-PublicServices-AwarenessProgram-Yoga-3.JPG', title: 'Yoga Awareness and Demonstration Program',date:'12 June 2022',about:'Yoga demonstration program was organized by Indira Gandhi Agricultural University Raipur and The Yoga Institute Raipur to encourage people towards yoga.  On this occasion Mr. Ganesh Sharma, Honorable Chairman of Chhattisgarh Yoga Commission, was present as the chief guest and presided over by Dr. Girish Chandel Mani, Vice Chancellor, Indira Gandhi Agricultural University Raipur, all the students of National Service Scheme were present on this occasion.'},
    { src: environment.PhotoUrl + 'StudentWelfare-PublicServices-AwarenessProgram-Yoga-4.JPG', title: 'Yoga Awareness and Demonstration Program',date:'12 June 2022',about:'Yoga demonstration program was organized by Indira Gandhi Agricultural University Raipur and The Yoga Institute Raipur to encourage people towards yoga.  On this occasion Mr. Ganesh Sharma, Honorable Chairman of Chhattisgarh Yoga Commission, was present as the chief guest and presided over by Dr. Girish Chandel Mani, Vice Chancellor, Indira Gandhi Agricultural University Raipur, all the students of National Service Scheme were present on this occasion.'},

  ];

  environment_day = [
    { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-EnvironmentDay-1.jpg',title: 'Environment Day',date:'5 May 2022',about:'Like every year, World Environment Day was celebrated by planting trees, under the guidance of Hon’ble Vice-Chancellor Dr. Girish Chandel, under the joint auspices of the National Service Scheme’s student and student unit, resolved to preserve it by planting fruitful and shady plants in the university campus took a resolution. In this work sequence, the chief guest gave a detailed message on tree and water conservation.'},
    { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-EnvironmentDay-2.jpg',title: 'Environment Day',date:'5 May 2022',about:'Like every year, World Environment Day was celebrated by planting trees, under the guidance of Hon’ble Vice-Chancellor Dr. Girish Chandel, under the joint auspices of the National Service Scheme’s student and student unit, resolved to preserve it by planting fruitful and shady plants in the university campus took a resolution. In this work sequence, the chief guest gave a detailed message on tree and water conservation.'},
    { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-EnvironmentDay-3.jpg',title: 'Environment Day',date:'5 May 2022',about:'Like every year, World Environment Day was celebrated by planting trees, under the guidance of Hon’ble Vice-Chancellor Dr. Girish Chandel, under the joint auspices of the National Service Scheme’s student and student unit, resolved to preserve it by planting fruitful and shady plants in the university campus took a resolution. In this work sequence, the chief guest gave a detailed message on tree and water conservation.'},
    { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-EnvironmentDay-4.jpg',title: 'Environment Day',date:'5 May 2022',about:'Like every year, World Environment Day was celebrated by planting trees, under the guidance of Hon’ble Vice-Chancellor Dr. Girish Chandel, under the joint auspices of the National Service Scheme’s student and student unit, resolved to preserve it by planting fruitful and shady plants in the university campus took a resolution. In this work sequence, the chief guest gave a detailed message on tree and water conservation.'},

  ];

  world_bicycle_day = [
    { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-World_Bicycle_Day-1.jpg' ,title: 'World Bicycle Day ',date:'3 June 2022',about:'On the occasion of World Cycle Day 3rd June 2022. The volunteers of National Service Scheme took out a cycle rally from Agriculture College to University, Dharampura and Administrative Building, Dr. (Major) GK Srivastava, Dean Student Welfare and Dr. M.P. Thakur, Dean Agriculture College, Raipur.Hon’ble Vice-Chancellor Dr. Girish Chandel, Indira Gandhi Agricultural University gave a message to encourage all the volunteers to use cycles in their daily routine.'},
    { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-World_Bicycle_Day-2.jpg' ,title: 'World Bicycle Day ',date:'3 June 2022',about:'On the occasion of World Cycle Day 3rd June 2022. The volunteers of National Service Scheme took out a cycle rally from Agriculture College to University, Dharampura and Administrative Building, Dr. (Major) GK Srivastava, Dean Student Welfare and Dr. M.P. Thakur, Dean Agriculture College, Raipur.Hon’ble Vice-Chancellor Dr. Girish Chandel, Indira Gandhi Agricultural University gave a message to encourage all the volunteers to use cycles in their daily routine.'},
    { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-World_Bicycle_Day-3.jpg' ,title: 'World Bicycle Day ',date:'3 June 2022',about:'On the occasion of World Cycle Day 3rd June 2022. The volunteers of National Service Scheme took out a cycle rally from Agriculture College to University, Dharampura and Administrative Building, Dr. (Major) GK Srivastava, Dean Student Welfare and Dr. M.P. Thakur, Dean Agriculture College, Raipur.Hon’ble Vice-Chancellor Dr. Girish Chandel, Indira Gandhi Agricultural University gave a message to encourage all the volunteers to use cycles in their daily routine.'},
    { src: environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-World_Bicycle_Day-4.jpg' ,title: 'World Bicycle Day ',date:'3 June 2022',about:'On the occasion of World Cycle Day 3rd June 2022. The volunteers of National Service Scheme took out a cycle rally from Agriculture College to University, Dharampura and Administrative Building, Dr. (Major) GK Srivastava, Dean Student Welfare and Dr. M.P. Thakur, Dean Agriculture College, Raipur.Hon’ble Vice-Chancellor Dr. Girish Chandel, Indira Gandhi Agricultural University gave a message to encourage all the volunteers to use cycles in their daily routine.'},
     ];


     

  GalleryImg1:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-1.jpg'; 
  GalleryImg2:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-2.jpg'; 
  GalleryImg3:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-3.jpg'; 
  GalleryImg4:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-4.jpg'; 
  GalleryImg5:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-5.jpg'; 
  GalleryImg6:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-6.jpg'; 
  GalleryImg7:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-7.jpg'; 
  GalleryImg8:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-8.jpg'; 
  GalleryImg9:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-9.jpg'; 
  GalleryImg10:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-10.jpg'; 
  GalleryImg11:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-11.jpg'; 
  GalleryImg12:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-12.jpg'; 
  GalleryImg13:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-13.jpg'; 
  GalleryImg14:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-14.jpg'; 
  GalleryImg15:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-15.jpg'; 
  GalleryImg16:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-16.jpg'; 
  GalleryImg17:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-17.jpg'; 
  GalleryImg18:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-18.jpg'; 
  GalleryImg19:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-19.jpg'; 
  GalleryImg20:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-20.jpg'; 
  GalleryImg21:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-21.jpg'; 
  GalleryImg22:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-22.jpg'; 
  GalleryImg23:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-23.jpg'; 
  GalleryImg24:String=environment.PhotoUrl + 'StudentStudentWelfare-NSS-AwarnessProgram-Gallery-24.jpg'; 

  
  currentSlide = 0;

  ngOnInit() {
    this.activateroute.paramMap.subscribe(result=>{
      this.Office_Id=result.get('id')
      const currentUrl = this.route.url;
      if(currentUrl.includes('college-home/college/')){
        if(this.Office_Id == 59){
          //nothing to do
        }
        else{
          this.route.navigateByUrl(`about/college-home/college/${this.Office_Id}/cont/404`);
        }
      }
     })
    setInterval(() => this.nextSlide(), 2000);
     this.getactivitydetails();
  }

  getactivitydetails() {
    const unit_id = 0;
    const section_id = '';
    const category_id = 2;
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
          this.Activities_data = result;
        } else{
          this.Activities_data = [];
        }
      },(error)=>{
        console.error('Error fetching activities', error);
      });
  }


  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.world_bicycle_day.length;
  }

  
  ngAfterViewInit(): void {
    const videoElement = this.bannerVideo.nativeElement;

    // Ensure the video is not muted
    videoElement.muted = false;

    // Load and play the video
    videoElement.load();

    // Attempt to play the video
    videoElement.play().then(() => {
    }).catch(error => {
      // console.error('Error playing video:', error);
      // Handle errors, potentially unmute and retry
      videoElement.muted = true;
      videoElement.play();
    });
  }

  OnErrorImage(event:any){
    event.target.src=this.errorImage;
  }


}
