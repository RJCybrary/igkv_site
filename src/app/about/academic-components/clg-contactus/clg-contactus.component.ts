import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-clg-contactus',
  standalone: false,
  templateUrl: './clg-contactus.component.html',
  styleUrls: ['./clg-contactus.component.scss']
})
export class ClgContactusComponent {
  @ Input() contact_data:any

  constructor(){}
}
