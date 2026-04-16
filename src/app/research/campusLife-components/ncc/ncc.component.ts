import { Component,Input,AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ncc',
  standalone: false,
  templateUrl: './ncc.component.html',
  styleUrls: ['./ncc.component.scss']
})
export class NccComponent {
  world_bicycle_day = [
    { src: 'assets/images/Campus-Life/NSS/World_Bicycle_Day/World_Bicycle_Day-1.jpg',title: 'World Bicycle Day ',date:'3 June 2022',about:'On the occasion of World Cycle Day 3rd June 2022. The volunteers of National Service Scheme took out a cycle rally from Agriculture College to University, Dharampura and Administrative Building, Dr. (Major) GK Srivastava, Dean Student Welfare and Dr. M.P. Thakur, Dean Agriculture College, Raipur.Hon’ble Vice-Chancellor Dr. Girish Chandel, Indira Gandhi Agricultural University gave a message to encourage all the volunteers to use cycles in their daily routine.'},
    { src: 'assets/images/Campus-Life/NSS/World_Bicycle_Day/World_Bicycle_Day-6.jpg',title: 'World Bicycle Day ',date:'3 June 2022',about:'On the occasion of World Cycle Day 3rd June 2022. The volunteers of National Service Scheme took out a cycle rally from Agriculture College to University, Dharampura and Administrative Building, Dr. (Major) GK Srivastava, Dean Student Welfare and Dr. M.P. Thakur, Dean Agriculture College, Raipur.Hon’ble Vice-Chancellor Dr. Girish Chandel, Indira Gandhi Agricultural University gave a message to encourage all the volunteers to use cycles in their daily routine.'},
    { src: 'assets/images/Campus-Life/NSS/World_Bicycle_Day/World_Bicycle_Day-2.jpg',title: 'World Bicycle Day ',date:'3 June 2022',about:'On the occasion of World Cycle Day 3rd June 2022. The volunteers of National Service Scheme took out a cycle rally from Agriculture College to University, Dharampura and Administrative Building, Dr. (Major) GK Srivastava, Dean Student Welfare and Dr. M.P. Thakur, Dean Agriculture College, Raipur.Hon’ble Vice-Chancellor Dr. Girish Chandel, Indira Gandhi Agricultural University gave a message to encourage all the volunteers to use cycles in their daily routine.'},
    { src: 'assets/images/Campus-Life/NSS/World_Bicycle_Day/World_Bicycle_Day-3.jpg',title: 'World Bicycle Day ',date:'3 June 2022',about:'On the occasion of World Cycle Day 3rd June 2022. The volunteers of National Service Scheme took out a cycle rally from Agriculture College to University, Dharampura and Administrative Building, Dr. (Major) GK Srivastava, Dean Student Welfare and Dr. M.P. Thakur, Dean Agriculture College, Raipur.Hon’ble Vice-Chancellor Dr. Girish Chandel, Indira Gandhi Agricultural University gave a message to encourage all the volunteers to use cycles in their daily routine.'},
    { src: 'assets/images/Campus-Life/NSS/World_Bicycle_Day/World_Bicycle_Day-4.jpg',title: 'World Bicycle Day ',date:'3 June 2022',about:'On the occasion of World Cycle Day 3rd June 2022. The volunteers of National Service Scheme took out a cycle rally from Agriculture College to University, Dharampura and Administrative Building, Dr. (Major) GK Srivastava, Dean Student Welfare and Dr. M.P. Thakur, Dean Agriculture College, Raipur.Hon’ble Vice-Chancellor Dr. Girish Chandel, Indira Gandhi Agricultural University gave a message to encourage all the volunteers to use cycles in their daily routine.'},
    { src: 'assets/images/Campus-Life/NSS/World_Bicycle_Day/World_Bicycle_Day-5.jpg',title: 'World Bicycle Day ',date:'3 June 2022',about:'On the occasion of World Cycle Day 3rd June 2022. The volunteers of National Service Scheme took out a cycle rally from Agriculture College to University, Dharampura and Administrative Building, Dr. (Major) GK Srivastava, Dean Student Welfare and Dr. M.P. Thakur, Dean Agriculture College, Raipur.Hon’ble Vice-Chancellor Dr. Girish Chandel, Indira Gandhi Agricultural University gave a message to encourage all the volunteers to use cycles in their daily routine.'},
  ];

  Office_Id:any;
  currentSlide = 0;
  bannerImg:String=environment.PhotoUrl + 'StudentWelfare-NCC-Banner.jpg';
  nccLogo:String=environment.PhotoUrl + 'StudentWelfare-PublicService-nccLogo.png';
  @ViewChild('bannerVideo') bannerVideo!: ElementRef<HTMLVideoElement>;
  @Input() banner_video: string=environment.VideoUrl + 'ncc-002.mp4';
  @Input() banner_heading: string="NCC";
  errorImage:any=environment.PhotoUrl + 'no_image_available.jpg';

  Activities_data: any;

  constructor( private activateroute:ActivatedRoute,private route:Router,private ds:DataService){}


  ngOnInit() {
    this.activateroute.paramMap.subscribe(result=>{
      this.Office_Id=result.get('id');
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


  getactivitydetails() {
    const unit_id = 0;
    const section_id = '';
    const category_id = 1;
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

}


