import { Component,ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

interface Content { // The Content interface
  Column1: string;
  web_content_date2: string;
  Content_Title: string;
  Website_Content_ID: number;
}


@Component({
  selector: 'app-depart-awards-viewmore',
  standalone: false,
  templateUrl: './depart-awards-viewmore.component.html',
  styleUrls: ['./depart-awards-viewmore.component.scss']
})
export class DepartAwardsViewmoreComponent {

  
  /* for pagination */
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  pageSize = 10;
  currentPage = 0;
  paginatedContents: Content[] = [];

  
  constructor(private ds:DataService, private activateroute:ActivatedRoute,private route:Router,private cms:CommonService){}
  DepartmentFirst_Details: any;
  award_data:any;
  Subject_Id:any;
  bannerImageUrl: any;
  errorImage: any=environment.PhotoUrl + 'no_preview_image.png';

 ngOnInit(): void {
    this.activateroute.paramMap.subscribe(() => {
      const currentUrl = this.route.url;
 // Extract the Subject_Id after 'about/college-home/college/'
        const basePath = 'about/department/departmentDetail/';
        const startIdx = currentUrl.indexOf(basePath) + basePath.length;
        const endIdx = currentUrl.indexOf('/', startIdx); // End at the next slash after the ID
        this.Subject_Id = currentUrl.substring(startIdx, endIdx !== -1 ? endIdx : undefined); // Extract the '59'
        this.getdata(this.Subject_Id);
        this.getawarddetails(this.Subject_Id);
        this.setBannerImage(this.Subject_Id);
       
  
    });
  }

  getawarddetails(id:string){
    const unit_id = id;
    const section_id = '';
    const category_id=11;
    const emp_id ='';
    const Website_Content_ID='';
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID}`,null).subscribe((result:any)=>{
        this.award_data = result;
        this.updatePaginatedContents();
      })
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

  onErrorImage(event: any) {
    event.target.src = this.errorImage;
  }

    /* code for pagination */

    onPageChange(event: PageEvent) {
      this.currentPage = event.pageIndex;
      this.pageSize = event.pageSize;
      this.updatePaginatedContents();
    }
    
    updatePaginatedContents() {
      const startIndex = this.currentPage * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.paginatedContents = this.award_data.slice(startIndex, endIndex);
      
    }
}
