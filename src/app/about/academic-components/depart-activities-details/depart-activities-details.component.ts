import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-depart-activities-details',
  standalone: false,
  templateUrl: './depart-activities-details.component.html',
  styleUrls: ['./depart-activities-details.component.scss']
})
export class DepartActivitiesDetailsComponent {



  Activities_detail_data: any;
  Subject_Id:any;
  DepartmentFirst_Details:any;
  bannerImageUrl:any;
  catTitle2!:string;
  catTitle1!:string;
  constructor(private ds: DataService, private activateroute: ActivatedRoute,private route:Router ,private cms:CommonService) {}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((result) => {
      let Website_Content_ID = result.get('id');
      this.getActivitiesdetails(Website_Content_ID);
      const currentUrl = this.route.url;
 // Extract the Subject_Id after 'about/college-home/college/'
        const basePath = 'about/department/departmentDetail/';
        const startIdx = currentUrl.indexOf(basePath) + basePath.length;
        const endIdx = currentUrl.indexOf('/', startIdx); // End at the next slash after the ID
        this.Subject_Id = currentUrl.substring(startIdx, endIdx !== -1 ? endIdx : undefined); // Extract the '59'
        this.getdata(this.Subject_Id);
        this.setBannerImage(this.Subject_Id);
        const catData = this.cms.getCatData();
        this.catTitle1 = catData?.cattitle1;
        this.catTitle2 = catData?.cattitle2;

    });
  }

  getActivitiesdetails(id:any) {
    const Unit_ID = '';
    const section_id = '';
    const category_id = '';
    const emp_id = '';
    const Website_Content_ID = id;
    this.ds
      .postapi(
        `ActivityList/${Unit_ID},${category_id},${section_id},${emp_id},${Website_Content_ID}`,
        null
      )
      .subscribe((result: any) => {
        this.Activities_detail_data = result[0];
        
      });
  }
  
  getdata(id:string){
    const Subject_Id = id;
    const office_id = '';
    const headoffice_id = '';
    this.ds.postapi(`department/departmentDetail/${office_id},${Subject_Id},${headoffice_id}`,null).subscribe((result:any)=>{
      this.DepartmentFirst_Details = result.departmentInfo[0];
    })
  }

  setBannerImage(id: string): void {
    switch (id) {
      case '138':
        this.bannerImageUrl = environment.PhotoUrl + 'home-icon-APFE.jpg';
        break;
      case '284':
        this.bannerImageUrl = environment.PhotoUrl + 'home-icon-ABM.jpg';
        break;
        case '23':
          this.bannerImageUrl = environment.PhotoUrl + 'home-icon-agronomy.jpg';
          break;
      default:
        this.bannerImageUrl = environment.PhotoUrl + 'academic-departments-banner.jpg'; // Default image if no match
        break;
    }
  }

}
