import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chancellor',
  standalone: false,
  templateUrl: './chancellor.component.html',
  styleUrls: ['./chancellor.component.scss'],
})
export class ChancellorComponent {

  bannerUrl:String=environment.PhotoUrl + 'about-chancellor-banner.JPG';
  ChancellorIMG:String=environment.PhotoUrl + 'about-chancellor-image.jpg';
}
