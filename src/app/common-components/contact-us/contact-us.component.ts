import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

ngOnInit(): void {  }

constructor(){}
@ Input() contact_data:any = null;

}
