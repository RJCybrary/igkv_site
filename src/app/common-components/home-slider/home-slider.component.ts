import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-slider',
  standalone: false,
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {
  banner_data: any;
   bannervideo: string = environment.VideoUrl + 'intro_Video.mp4';
   mobilebannervideo: string = environment.VideoUrl + 'intro_mobile.mp4';
  // bannervideo: string = 'assets/video/Intro_Video.mp4';
  // mobilebannervideo: string = 'assets/video/m_intro_Video.mp4';
  isVideoLoaded: boolean = true;
  constructor(private ds: DataService, private activateroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.preloadVideo();
  }

  preloadVideo(): void {
    const video = document.createElement('video');
    video.src = this.bannervideo;
    video.load(); // Start preloading
    video.oncanplaythrough = () => {
      this.isVideoLoaded = true; // Mark as loaded
    };
  }
}
