import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-clg-events-common',
  standalone: false,
  templateUrl: './clg-events-common.component.html',
  styleUrls: ['./clg-events-common.component.scss']
})
export class ClgEventsCommonComponent {
  @Input() event_data:any;
}
