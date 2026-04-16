import { StickyDirection } from '@angular/cdk/table';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-international-overview',
  standalone: false,
  templateUrl: './international-overview.component.html',
  styleUrls: ['./international-overview.component.scss']
})
export class InternationalOverviewComponent {

  bannerImg:string=environment.PhotoUrl + 'International-WhychooseIGKV-banner.jpg';
  globImg:string=environment.PhotoUrl + 'International-WhyChooseIgkv-international-relation-iimage.jpg'
  Latest_EventsImg1:string=environment.PhotoUrl + 'International-WhyChooseIgkv-LatestEvents (1).jpg';
  Latest_EventsImg2:string=environment.PhotoUrl + 'International-WhyChooseIgkv-LatestEvents (2).jpg';
  Latest_EventsImg3:string=environment.PhotoUrl + 'International-WhyChooseIgkv-LatestEvents (3).jpg';

  Gallery_Img1:string=environment.PhotoUrl + 'International-WhyChooseIgkv-Gallery- (1).jpg';
  Gallery_Img2:string=environment.PhotoUrl + 'International-WhyChooseIgkv-Gallery- (2).jpg';
  Gallery_Img3:string=environment.PhotoUrl + 'International-WhyChooseIgkv-Gallery- (3).jpg';
  Gallery_Img4:string=environment.PhotoUrl + 'International-WhyChooseIgkv-Gallery- (4).jpg';

}
