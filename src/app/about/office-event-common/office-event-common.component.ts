import { Component,Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-office-event-common',
  standalone: false,
  templateUrl: './office-event-common.component.html',
  styleUrls: ['./office-event-common.component.scss']
})
export class OfficeEventCommonComponent {
  @Input() event_data:any;
  @ Input() setData_details:any;
  
  constructor(
    private cms :CommonService
  ) {}

  event_data_details:any;
  ngOnInit(): void {
    this.event_data_details=this.event_data
  }

  setdetails(){
    this.cms.setCatData(this.setData_details.title1,'Events','','/about/Offices/'+this.setData_details.unit_id +'/events')
  }

}