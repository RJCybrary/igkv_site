import { Component,Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-office-awards-common',
  standalone: false,
  templateUrl: './office-awards-common.component.html',
  styleUrls: ['./office-awards-common.component.scss']
})
export class OfficeAwardsCommonComponent {

  @Input() award_data: any;
  @ Input() setData_details:any;

  constructor(private cms :CommonService) {}
  setdetails(){
    this.cms.setCatData(this.setData_details.title1,'Awards','','/about/Offices/'+this.setData_details.unit_id +'/awards')
  }
}
 