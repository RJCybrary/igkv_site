import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-event-common',
  standalone: false,
  templateUrl: './event-common.component.html',
  styleUrls: ['./event-common.component.scss']
})
export class EventCommonComponent {
  @Input() event_data:any;
}
