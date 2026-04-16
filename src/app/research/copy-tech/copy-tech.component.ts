import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-copy-tech',
  standalone: false,
  templateUrl: './copy-tech.component.html',
  styleUrls: ['./copy-tech.component.scss'],
})
export class CopyTechComponent {
  bannerImage:any;
  bannerName:any;
  technology_data: any;
  constructor(private route: Router,private activateroute: ActivatedRoute,private ds: DataService) {}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((result) => {
    
      const currentUrl = this.route.url;
      
      if (currentUrl.includes('/Technologies-Developed')) {
        this.bannerImage = environment.PhotoUrl+ 'research-technology-developed-banner.jpg';
        this.bannerName = 'Technologies Developed';
      } else {
        this.bannerImage = environment.PhotoUrl + 'research-copyrights-banner.jpg';
        this.bannerName = 'Copyright';
        // this.getPatentsCopyright('c');
      }
    });
    this.getData();
  }

  getData(){
      this.ds.getapi(`patents_copyright/getTechnology`).subscribe((result:any)=>{
        this.technology_data=result
      })
  }





}
