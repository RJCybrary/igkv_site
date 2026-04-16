import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-art-culture-details',
  standalone: false,
  templateUrl: './art-culture-details.component.html',
  styleUrls: ['./art-culture-details.component.scss']
})
export class ArtCultureDetailsComponent implements OnInit {
  

  @Input() banner_img:string='';
  @Input() banner_heading: string="Art & Culture Details";
  @Input() banner_video: string=environment.VideoUrl + 'ArtCulture-banner_video.mp4';

  facility_id:any;

  constructor(private activateroute: ActivatedRoute,public router: Router) {}

  currentSlide = 0;

  ngOnInit(){
    this.activateroute.paramMap.subscribe((result) => {
          this.facility_id = result.get('id');
        });
    setInterval(() => this.nextSlide(), 2500);
    
  }

  routeToInfrastrucutre(id:any) {
    this.router.navigate(['research/art-culture/details',id]);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.Agri_Carnival.length;
   
  }

  MadaiImg:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-highlights-Madai-font-page.jpg';
  AktiImg:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-Highlights-AktiTihar-front-image.jpg';
  AgriCarnivalImg:string = environment.PhotoUrl + 'StudentWelfare-ArtCulture-Highlights-AgriCarnival-FronImage.jpg';

 Madai = [
  { src: environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-1.jpg', description: 'Madai' },
  { src: environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-2.jpg', description: 'Madai' },
  { src: environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-3.jpg', description: 'Madai' },
  { src: environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-4.jpg', description: 'Madai' },
]

  Agri_Carnival = [
    { src: environment.PhotoUrl +'StudentWelfare-ArtCulture-AgriCarnival-1.jpg', description: 'Agri Carnival' },
    { src: environment.PhotoUrl +'StudentWelfare-ArtCulture-AgriCarnival-2.jpg', description: 'Agri Carnival' },
    { src: environment.PhotoUrl +'StudentWelfare-ArtCulture-AgriCarnival-3.jpg', description: 'Agri Carnival' },
    { src: environment.PhotoUrl +'StudentWelfare-ArtCulture-AgriCarnival-4.jpg', description: 'Agri Carnival' },
      ];


  Youth_Fest = [
    { src: '', description: 'Youth Festival' },
    { src: '', description: 'Youth Festival' },
  ];

  Akti_Tihaar = [
    { src: environment.PhotoUrl + 'StudentWelfare-ArtCulture-AktiTihar-2.jpg', description: 'Akti Tihaar' },
    { src: environment.PhotoUrl + 'StudentWelfare-ArtCulture-AktiTihar-1.jpg', description: 'Akti Tihaar' },
    { src: environment.PhotoUrl + 'AtudentWelfare-ArtCulture-Aktitihar-7.jpg', description: 'Akti Tihaar' },
    { src: environment.PhotoUrl + 'AtudentWelfare-ArtCulture-Aktitihar-8.jpg', description: 'Akti Tihaar' },
    ];


    MadaiImg1:String=environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-1.jpg';
    MadaiImg2:String=environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-2.jpg';
    MadaiImg3:String=environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-3.jpg';
    MadaiImg4:String=environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-4.jpg';

    AktiImg1:String=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AktiTihar-1.jpg';
    AktiImg2:String=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AktiTihar-2.jpg';
    AktiImg3:String=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AktiTihar-3.jpg';
    AktiImg4:String=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AktiTihar-4.jpg';

    AktiImg5:String=environment.PhotoUrl + 'AtudentWelfare-ArtCulture-Aktitihar-5.jpg';
    AktiImg6:String=environment.PhotoUrl + 'AtudentWelfare-ArtCulture-Aktitihar-6.jpg';
    AktiImg7:String=environment.PhotoUrl + 'AtudentWelfare-ArtCulture-Aktitihar-7.jpg';
    AktiImg8:String=environment.PhotoUrl + 'AtudentWelfare-ArtCulture-Aktitihar-8.jpg';
    

    AgriCarnivalImg1:String=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AgriCarnival-1.jpg';
    AgriCarnivalImg2:String=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AgriCarnival-2.jpg';
    AgriCarnivalImg3:String=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AgriCarnival-3.jpg';
    AgriCarnivalImg4:String=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AgriCarnival-4.jpg';



  
}
