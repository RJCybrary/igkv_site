import { getLocaleMonthNames } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-vc-menubar',
  standalone: false,
  templateUrl: './vc-menubar.component.html',
  styleUrls: ['./vc-menubar.component.scss']
})
export class VcMenubarComponent implements OnInit {
  menu:boolean=true

ngOnInit(): void {
  
}

  toggleMenu() {
    this.menu=!this.menu
  }

  
}
