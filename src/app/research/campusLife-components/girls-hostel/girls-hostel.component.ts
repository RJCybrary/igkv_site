import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-girls-hostel',
  standalone: false,
  templateUrl: './girls-hostel.component.html',
  styleUrls: ['./girls-hostel.component.scss']
})
export class GirlsHostelComponent   {

  Office_Id:any;
  bannerImg:String=environment.PhotoUrl + 'StudentWelfare-GirlsHostel-banner.JPG';
  @Input() banner_video: string=environment.VideoUrl + '';
  @Input() banner_heading: string="Girls Hostel";

  Mandakini_Hostel = [
    { src: environment.PhotoUrl + 'StudentWelfare-GirlsHostel-MandakiniHostel-1.JPG', description: 'Mandakini Hostel' },
    { src: environment.PhotoUrl + 'StudentWelfare-GirlsHostel-MandakiniHostel-2.JPG', description: 'Mandakini Hostel' },
    // Add more images as needed
  ];

  Kadambari_Hostel = [
    { src: environment.PhotoUrl + 'StudentWelfare-GirlsHostel-KadambariHostel-3.jpg', description: 'Kadambari Hostel' },
    { src: environment.PhotoUrl + 'StudentWelfare-GirlsHostel-KadambariHostel-2.jpg', description: 'Kadambari Hostel' },
    // Add more images as needed
  ];

  Saraswati_Hostel = [
    { src: environment.PhotoUrl + 'StudentWelfare-GirlsHostel-SaraswatiHostel-1.JPG', description: 'Saraswati Hostel' },
    { src: environment.PhotoUrl + 'StudentWelfare-GirlsHostel-SaraswatiHostel-2.JPG', description: 'Saraswati Hostel' },
    // Add more images as needed
  ];

  New_Girls_Hostel = [
    { src: environment.PhotoUrl + 'StudentWelfare-GirlsHostel-New_Girls_Hostel- (1).JPG', description: 'New Girls Hostel' },
    { src: environment.PhotoUrl + 'StudentWelfare-GirlsHostel-New_Girls_Hostel- (2).JPG', description: 'New Girls Hostel' },
    // Add more images as needed
  ];

  Godawari_Hostel = [
    { src: environment.PhotoUrl + 'StudentWelfare-GirlsHostel-Godawari-Hostel-1.jpg', description: 'Godawari Hostel' },
    { src: environment.PhotoUrl + 'StudentWelfare-GirlsHostel-Godawari-Hostel-2.jpg', description: 'Godawari Hostel' },
    // Add more images as needed
  ];


  Shabari_Hostel=
  [
    {src:environment.PhotoUrl + 'Shabari_Hostel_1.JPG' ,description:'Shabari Hostel'},
    {src:environment.PhotoUrl + 'Shabari_Hostel_3.JPG' ,description:'Shabari Hostel'},
    // {src:environment.PhotoUrl + 'Shabari_Hostel_2.JPG' ,description:''}
  ]

  constructor( private activateroute:ActivatedRoute,private route:Router){}

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
    setInterval(() => this.nextSlide(), 3000);

  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.Mandakini_Hostel.length;
  }



}
