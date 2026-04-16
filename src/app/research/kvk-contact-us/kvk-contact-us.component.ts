import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-kvk-contact-us',
  standalone: false,
  templateUrl: './kvk-contact-us.component.html',
  styleUrls: ['./kvk-contact-us.component.scss']
})
export class KvkContactUsComponent {
  @ Input() contact_data:any;
  
}
