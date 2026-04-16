import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-art-culture',
  standalone: false,
  templateUrl: './art-culture.component.html',
  styleUrls: ['./art-culture.component.scss']
})
export class ArtCultureComponent implements AfterViewInit {
  @ViewChild('bannerVideo') bannerVideo!: ElementRef<HTMLVideoElement>;

  @Input() banner_img:string=environment.PhotoUrl + '';
  @Input() banner_heading: string="Art & Culture";
  @Input() banner_video: string=environment.VideoUrl + 'ArtCulture-banner_video.mp4';
   // Track currently focused element before modal opens
  private previouslyFocusedElement: HTMLElement | null = null;

  selectedYear: any;

  openContent(yearId: string) {
    this.selectedYear = yearId;
  }


  GalleryImg1:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AktiTihar-1.jpg';
  GalleryImg2:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AktiTihar-2.jpg';
  GalleryImg3:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AktiTihar-3.jpg';
  GalleryImg4:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AktiTihar-4.jpg';
  GalleryImg5:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-1.jpg';
  GalleryImg6:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-2.jpg';
  GalleryImg7:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-3.jpg';
  GalleryImg8:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-4.jpg';
  GalleryImg9:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AgriCarnival-1.jpg';
  GalleryImg10:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AgriCarnival-2.jpg';
  GalleryImg11:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AgriCarnival-3.jpg';
  GalleryImg12:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AgriCarnival-4.jpg';

  constructor(private ds: DataService, private activateroute: ActivatedRoute) { }
  Madai = [
    { src: environment.PhotoUrl + 'StudentWelfare-ArtCulture-highlights-Madai-font-page.jpg', description: 'Madai' },
  ];

  Agri_Carnival = [
    { src: environment.PhotoUrl + 'StudentWelfare-ArtCulture-Highlights-AgriCarnival-FronImage.jpg', description: 'Agri Carnival' },
  ];

  Youth_Festival = [
    { src: '', description: 'Youth Festival' },
  ];
  
  Akti_Tihaar = [
    { src: environment.PhotoUrl + 'StudentWelfare-ArtCulture-Highlights-AktiTihar-front-image.jpg', description: 'Akti Tihaar' },
  ];

  Madai_2023_Img_1:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-1.jpg';
  Madai_2023_Img_2:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-2.jpg';
  Madai_2023_Img_3:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-3.jpg';
  Madai_2023_Img_4:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-Madai-4.jpg';

  Agri_Carnival_2022_Img_1:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AgriCarnival-1.jpg';
  Agri_Carnival_2022_Img_2:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AgriCarnival-2.jpg';
  Agri_Carnival_2022_Img_3:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AgriCarnival-3.jpg';
  Agri_Carnival_2022_Img_4:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AgriCarnival-4.jpg';

  
  Akti_2023_Img_1:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AktiTihar-1.jpg';
  Akti_2023_Img_2:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AktiTihar-2.jpg';
  Akti_2023_Img_3:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AktiTihar-3.jpg';
  Akti_2023_Img_4:string=environment.PhotoUrl + 'StudentWelfare-ArtCulture-AktiTihar-4.jpg';
  Akti_2023_Img_5:string=environment.PhotoUrl + 'AtudentWelfare-ArtCulture-Aktitihar-5.jpg';
  Akti_2023_Img_6:string=environment.PhotoUrl + 'AtudentWelfare-ArtCulture-Aktitihar-6.jpg';
  Akti_2023_Img_7:string=environment.PhotoUrl + 'AtudentWelfare-ArtCulture-Aktitihar-7.jpg';
  Akti_2023_Img_8:string=environment.PhotoUrl + 'AtudentWelfare-ArtCulture-Aktitihar-8.jpg';

  Gallery_Details = [
    { src: 'assets/images/Campus-Life/Art_Culture/Akti_Tihaar/Akti_Tihaar-15.JPG', description: 'Akti Tihaar' },
    // { src: 'assets/images/Campus-Life/Art_Culture/Akti_Tihaar/Akti_Tihaar-14.JPG', description: 'Akti Tihaar' },
    { src: 'assets/images/Campus-Life/Art_Culture/Akti_Tihaar/Akti_Tihaar-13.JPG', description: 'Akti Tihaar' },
    {src:'assets/images/Campus-Life/Art_Culture/Akti_Tihaar/Akti_Tihaar-12.JPG',description: 'Akti Tihaar' },  
    {src:'assets/images/Campus-Life/Art_Culture/Akti_Tihaar/Akti-Tihaar-16.jpg',description: 'Akti Tihaar' },  
    {src:'assets/images/Campus-Life/Art_Culture/Akti_Tihaar/Akti_Tihaar-2.jpg',description: 'Akti Tihaar' },
    {src:'assets/images/Campus-Life/Art_Culture/Madai/Madai-3.jpg',description: 'Madai'},  
    {src:'assets/images/Campus-Life/Art_Culture/Madai/Madai-2.jpg',description: 'Madai' },
    {src:'assets/images/Campus-Life/Art_Culture/Madai/Madai-1.jpg',description: 'Madai' },
    {src:'assets/images/Campus-Life/Art_Culture/Agri_Carnival/Agri_Carnival-13.jpg',description: 'Agri-Carnival' },
    {src:'assets/images/Campus-Life/Art_Culture/Agri_Carnival/Agri_Carnival-14.jpg',description: 'Agri-Carnival' },
    {src:'assets/images/Campus-Life/Art_Culture/Agri_Carnival/Agri_Carnival-12.jpg',description: 'Agri-Carnival' },
    {src:'assets/images/Campus-Life/Art_Culture/Agri_Carnival/Agri_Carnival-11.jpg',description: 'Agri-Carnival' },
    {src:'assets/images/Campus-Life/Art_Culture/Agri_Carnival/Agri_Carnival-9.jpg',description: 'Agri-Carnival' },
    {src:'assets/images/Campus-Life/Art_Culture/Agri_Carnival/Agri_Carnival-8.jpg',description: 'Agri-Carnival' },
  ];
  

  currentSlide = 0;

  ngOnInit() {
    this.openContent('year2023');
    setInterval(() => this.nextSlide(), 2000);
    
    this.activateroute.paramMap.subscribe((result) => {
      this.Office_id = result.get('id');
      this.getLab_Facilities(this.Office_id);

    })

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


  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.Madai.length;

  }

  Lab_Facilities: any;
  Office_id: any

  getLab_Facilities(id: any) {
    const office_id = id || 0;
    const category_Id = 18;
    this.ds.postapi(`ActivityList/galleryList/${office_id},${category_Id}`, null).subscribe((result: any) => {
      this.Lab_Facilities = result.Response?.GallaryList;
      ;
    })
  }

  // openModal(imageUrl: string, imageIndex: number) {
  //   // Store currently focused element
  //   this.previouslyFocusedElement = document.activeElement as HTMLElement;
    
  //   // Open modal logic here
  //   this.openImageModal(imageUrl, imageIndex);
    
  //   // Set focus to modal after it opens (with slight delay for DOM update)
  //   setTimeout(() => {
  //     const modal = document.querySelector('.modal-dialog');
  //     if (modal instanceof HTMLElement) {
  //       modal.focus();
  //     }
  //   }, 100);
  // }

  


}
