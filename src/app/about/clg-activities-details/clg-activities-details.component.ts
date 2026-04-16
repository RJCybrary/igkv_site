import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clg-activities-details',
  standalone: false,
  templateUrl: './clg-activities-details.component.html',
  styleUrls: ['./clg-activities-details.component.scss']
})
export class ClgActivitiesDetailsComponent {

  Activities_detail_data: any;
  constructor(private ds: DataService, private activateroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((result) => {
      let Website_Content_ID = result.get('id');
      this.getActivitiesdetails(Website_Content_ID);
    });
  }

  getActivitiesdetails(id:any) {
    const Unit_ID = '';
    const section_id = '';
    const category_id = '';
    const emp_id = '';
    const Website_Content_ID = id;
    const RowsPerPage = 1;
    const PageNumber = 1;
    this.ds
      .postapi(
        `ActivityList/${Unit_ID},${category_id},${section_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        this.Activities_detail_data = result[0];
        
      });
  }
  
}
