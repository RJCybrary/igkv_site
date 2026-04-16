import { Component,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-kvk-award-common',
  standalone: false,
  templateUrl: './kvk-award-common.component.html',
  styleUrls: ['./kvk-award-common.component.scss']
})
export class KvkAwardCommonComponent {

  @Input() award_data: any;
  constructor(private dialog: MatDialog) {
    
  }
  
}
