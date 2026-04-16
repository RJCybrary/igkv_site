import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() banner_heading:any=0;
  @Input() banner_sub_heading!:string;
  @Input() banner_img:any=0;

}
