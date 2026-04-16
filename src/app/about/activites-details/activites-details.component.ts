import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-activites-details',
  standalone: false,
  templateUrl: './activites-details.component.html',
  styleUrls: ['./activites-details.component.scss'],
})
export class ActivitesDetailsComponent {
  Website_Content_ID: any;
  Activities_detail_data: any;
  Event_List: any;
  Activities_data: any;
  catTitle1:any;
  catTitle2:any;
  catId:any;
  lastroute:any;
  showCategory:boolean = false;
  showVcMenu:boolean = false;
  bannerImg:String=environment.PhotoUrl + 'about-activities-banner.jpg';
  constructor(private ds: DataService, private activateroute: ActivatedRoute,public router: Router, private cms:CommonService) {}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((result) => {
      this.Website_Content_ID = result.get('id');
      const catData = this.cms.getCatData();
      this.catTitle1 = catData?.cattitle1;
      this.catTitle2 = catData?.cattitle2;
      this.catId =  catData?.catId;
      this.lastroute =  catData?.lastroute;
      
      this.getActivitiesdetails();
      const currentUrl = this.router.url;
      if(currentUrl.includes('about/activities')){
        this.getEventList(4);
        this.showCategory = true;
      }
      if(currentUrl.includes('about/vc/activities')){
        this.showVcMenu = true;
      }
    });
  }

  getActivitiesdetails() {
    const Unit_ID = '';
    const section_id = '';
    const category_id = '';
    const emp_id = '';
    const Website_Content_ID = this.Website_Content_ID;
    const RowsPerPage = 1;
    const PageNumber = 1;
    this.ds
      .postapi(
        `ActivityList/${Unit_ID},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        this.Activities_detail_data = result[0];
        
      });
  }

  getEventList(id: any) {
    const Unit_Type_Id = id;
    this.ds
      .postapi(`ActivityList/eventList/${Unit_Type_Id}`, null)
      .subscribe((result: any) => {
        this.Event_List = result;
      })
  }

  routeToMainNews() {
    
  }
  onSelectCategorysmall(event: any) {
    const selectedValue = event.target.value;
    this.router.navigate(['/about/activities/:id/category/',selectedValue]);
  }

}
