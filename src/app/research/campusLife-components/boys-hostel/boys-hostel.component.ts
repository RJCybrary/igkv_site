import { Component,Input, ViewChild, ElementRef  } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute,Router } from '@angular/router';

@Component({  
  selector: 'app-boys-hostel',
  standalone: false,
  templateUrl: './boys-hostel.component.html',
  styleUrls: ['./boys-hostel.component.scss']
})
export class BoysHostelComponent {

  Office_Id:any;
  bannerImg:String=environment.PhotoUrl + 'StudentWelfare-BoysHostel-banner.jpg';

  @ViewChild('bannerVideo') bannerVideo!: ElementRef<HTMLVideoElement>;
  @Input() banner_heading: string="Boys Hostel";

  Satyam_Hostel = [
    { src: environment.PhotoUrl + 'StudentWelfare-BoysHostel-SatyamHostel (1).jpg', description: 'Satyam Hostel' },
    { src: environment.PhotoUrl + 'StudentWelfare-BoysHostel-SatyamHostel (3).jpg', description: 'Satyam Hostel' },
    // Add more images as needed
  ];

  Sundaram_Hostel = [
    { src: environment.PhotoUrl + 'sundaram_hostel_new.png', description: 'Sundaram Hostel' },
    { src: environment.PhotoUrl + 'StudentWelfare-BoysHostel-SundaramHostel- (2).JPG', description: 'Sundaram Hostel' },
    // Add more images as needed
  ];

  Shivam_Hostel = [
    { src: environment.PhotoUrl + 'shivam_hostel_new.png', description: 'Shivam Hostel' },
    { src: environment.PhotoUrl + 'shivam_hostel_1.png', description: 'Shivam Hostel' },
    // Add more images as needed
  ];

  Maharshi_Hostel = [
    { src: environment.PhotoUrl + 'StudentWelfare-BoysHostel-Maharshi-Hostel- (1).jpg', description: 'Maharshi Arvind Hostel' },
    { src: environment.PhotoUrl + 'StudentWelfare-BoysHostel-Maharshi-Hostel- (2).jpg', description: 'Maharshi Arvind Hostel' },
    // Add more images as needed
  ];

  New_Boys_Hostel = [
    { src:  environment.PhotoUrl + 'StudentWelfare-BoysHostel-New-Boys-Hostel- (1).jpg', description: 'New-Boys Hostel' },
    { src:  environment.PhotoUrl + 'StudentWelfare-BoysHostel-New-Boys-Hostel- (3).jpg', description: 'New-Boys Hostel' },
    // Add more images as needed
  ];

  
  Swami_Vivekanand_Hostel = [
    { src:  environment.PhotoUrl + '', description: 'Swami Vivekanand Boys Hostel' },
    { src:  environment.PhotoUrl + '', description: 'Swami Vivekanand Boys Hostel' },
    // Add more images as needed
  ];

  currentSlide = 0;

  constructor( private activateroute:ActivatedRoute,private route:Router){}

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
    setInterval(() => this.nextSlide(), 3000);

  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.Satyam_Hostel.length;
  }



}
