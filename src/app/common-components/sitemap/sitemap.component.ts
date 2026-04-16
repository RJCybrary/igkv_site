import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sitemap',
  standalone: false,
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent {

bannerImg:String=environment.PhotoUrl + 'about-activities-banner.jpg';
}
