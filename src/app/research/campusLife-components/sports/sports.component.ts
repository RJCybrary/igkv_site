import {Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
// import { pipe } from 'src/app/pipe/strip-html.pipe';


@Component({
  selector: 'app-sports',
  standalone: false,
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent   {


  @Input() banner_heading: string="Sports";
  @Input() banner_video: string=environment.VideoUrl + '';
  Office_Id:any;
  bannerImg:string=environment.PhotoUrl + 'StudentWelfare-sports-banner.jpg';
  errorImage:any=environment.PhotoUrl + 'no_image_available_1.jpg';

  highlights1:string=environment.PhotoUrl + 'StudentWelfare-Sports-Highlights-1.png';
  highlights2:string=environment.PhotoUrl + 'StudentWelfare-Sports-Highlights-2.jpg';
  highlights3:string=environment.PhotoUrl + 'StudentWelfare-Sports-Highlights-3.jpg';
  highlights4:string=environment.PhotoUrl + 'StudentWelfare-Sports-Highlights-4.jpg';
  highlights5:string=environment.PhotoUrl + 'StudentWelfare-Sports-Highlights-5.jpg';

  sports_complex = [
    { src: environment.PhotoUrl + 'StudentWelfare-Sports-SportsComplex.jpg', description: 'Sports Complex' },
  ];


  Football_Grounds = [
    { src: environment.PhotoUrl + 'StudentWelfare-Sports-FootballGround.jpg', description: 'Football Grounds' },
  ];

  Badminton_Court = [
    { src: environment.PhotoUrl + 'StudentWelfare-Sports-Badminton-Court.jpg', description: 'Badminton Court' },
    { src: environment.PhotoUrl + 'StudentWelfare-Sports-Badminton-Court-1.jpg', description: 'Badminton Court' },
  ];

  Cricket_Grounds = [
    { src: environment.PhotoUrl + 'StudentWelfare-Sports-Cricket-ground.JPG', description: 'Cricket Grounds' },
    { src: environment.PhotoUrl + 'StudentWelfare-Sports-Cricket-Ground-1.JPG', description: 'Cricket Grounds' },
    // Add more images as needed
  ];

  Billiard = [
    { src: environment.PhotoUrl + 'StudentWelfare-Sports-pool-game.JPG', description: 'Billiard' },
  ];
  Activities_data: any;
  Award_data: any;

  constructor( private activateroute:ActivatedRoute,private route:Router, private ds:DataService){}


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

    setInterval(() => this.nextSlide(), 2500);
    this.getSportsData()
    this.getSportsAward()
  }

  getSportsData(){
    const Unit_Type_Id = 0;
    const section_id ='';
    const category_id=10;
    const emp_id ='';
    const Website_Content_ID ='';
    const PageNumber = 1
    const RowsPerPage = 6;
    this.ds.postapi(`ActivityList/${Unit_Type_Id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
      if(result){
        this.Activities_data=result;
           } else{
          this.Activities_data=[];
        } 
      },(error: any) => {
        console.error('Error fetching activities', error);
      })
  }

  getSportsAward(){
    const Unit_Type_Id = 0;
    const section_id ='';
    const category_id=30;
    const emp_id ='';
    const Website_Content_ID ='';
    const PageNumber = 1
    const RowsPerPage = 6;
    this.ds.postapi(`ActivityList/${Unit_Type_Id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
      if(result){
        this.Award_data=result;
           } else{
          this.Award_data=[];
        } 
      },(error: any) => {
        console.error('Error fetching activities', error);
      })
  }



  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.Badminton_Court.length;
  }

  OnErrorImage(event:any){
    event.target.src=this.errorImage
  }


}
