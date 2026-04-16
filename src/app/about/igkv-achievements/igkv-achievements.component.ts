import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-igkv-achievements',
  standalone: false,
  templateUrl: './igkv-achievements.component.html',
  styleUrls: ['./igkv-achievements.component.scss']
})
export class IgkvAchievementsComponent {


 imageUrl: string = environment.PhotoUrl +'about-vcsecretariat-banner.jpg';
 imageUrlside: string = environment.PhotoUrl +'ssr.jpg';
 bannerHeading : string =  "IGKV 5 Year Achievements"

}
