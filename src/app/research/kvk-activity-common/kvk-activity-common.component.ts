import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-kvk-activity-common',
  standalone: false,
  templateUrl: './kvk-activity-common.component.html',
  styleUrls: ['./kvk-activity-common.component.scss']
})
export class KvkActivityCommonComponent {
  @ Input() activity_details:any;
}
