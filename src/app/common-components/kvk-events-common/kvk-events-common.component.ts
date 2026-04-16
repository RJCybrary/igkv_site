import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-kvk-events-common',
  standalone: false,
  templateUrl: './kvk-events-common.component.html',
  styleUrls: ['./kvk-events-common.component.scss']
})
export class KvkEventsCommonComponent {
  @Input() event_data:any;
  
}
