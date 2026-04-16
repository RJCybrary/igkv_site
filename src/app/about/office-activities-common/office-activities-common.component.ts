import { Component,Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-office-activities-common',
  standalone: false,
  templateUrl: './office-activities-common.component.html',
  styleUrls: ['./office-activities-common.component.scss']
})
export class OfficeActivitiesCommonComponent {

  @ Input() activity_details:any;
  @ Input() setData_details:any;

  constructor(private cms :CommonService) {}

    setdetails(){
      this.cms.setCatData(this.setData_details.title1,'Activities','','/about/Offices/'+this.setData_details.unit_id +'/activities')
    }
}
