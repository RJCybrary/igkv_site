import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clg-lab',
  standalone: false,
  templateUrl: './clg-lab.component.html',
  styleUrls: ['./clg-lab.component.scss']
})
export class ClgLabComponent {

  bannerImg:string=environment.PhotoUrl + 'StudentWelfare-Facilities&Infra-banner.jpg';
  RRL:String=environment.PhotoUrl +'research-RRL-banner.JPG';
  PhytodanitaryLab:String=environment.PhotoUrl + 'reseach-Phytosanitary_Lab-banner.jpeg';
  MushroomLab:String=environment.PhotoUrl +'	research-mushroom-lab-banner.JPG';
  TCL:String=environment.PhotoUrl + 'research-Tissue-Culture-Lab-banner.jpg';
  Office_Id:any;

  constructor( private activateroute:ActivatedRoute,private route:Router){}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result=>{
      this.Office_Id=result.get('id')
      if(this.Office_Id == 59){
        //nothing to do
      }
      else{
        this.route.navigateByUrl(`about/college-home/college/${this.Office_Id}/cont/404`);
      }
     })

  }

  

}
