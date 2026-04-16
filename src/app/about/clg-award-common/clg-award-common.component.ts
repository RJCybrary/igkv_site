import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-clg-award-common',
  standalone: false,
  templateUrl: './clg-award-common.component.html',
  styleUrls: ['./clg-award-common.component.scss']
})
export class ClgAwardCommonComponent {
  @Input() award_data: any;

  Office_Id:any;
  constructor( ){}


}
