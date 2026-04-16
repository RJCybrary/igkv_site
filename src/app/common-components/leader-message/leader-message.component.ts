import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-leader-message',
  standalone: false,
  templateUrl: './leader-message.component.html',
  styleUrls: ['./leader-message.component.scss']
})
export class LeaderMessageComponent {

  leaders = [
    {
      message: "The Chhattisgarh state is very large and has the diverse agro-climatic situations pose a great challenge for agriculture development. The Indira Gandhi Krishi Vishwavidyalaya is responsible for quality education, research and extension activities for enhancing agricultural productivity, profitability, livelihood enhancement and diversification of agriculture in the state of Chhattisgarh.",
      name: "Dr. Girish Chandel",
      post: "Vice Chancellor",
      imageSrc: environment.PhotoUrl + 'abcd-removebg-preview.png',
      quote: "Leading the way towards a brighter future, one step at a time."
    },
    {
      message: "",
      name: "Shri Vishnu Deo Sai",
      post: "Hon'ble Chief Minister of Chhattisgarh",
      imageSrc: environment.PhotoUrl + 'cm.png',
      quote: "Empowering farmers with knowledge and technology."
    },
    {
      message: "",
      name: "Shri Ramen Deka",
      post: "Hon'ble Governor of Chhattisgarh and Chancellor",
      imageSrc: environment.PhotoUrl + 'chancellor1.png',
      quote: "Empowering farmers with knowledge and technology."
    },
    
  ];
  // leaders = [
  //   {
  //     message: "The Chhattisgarh state is very large and has the diverse agro-climatic situations pose a great challenge for agriculture development. The Indira Gandhi Krishi Vishwavidyalaya is responsible for quality education, research and extension activities for enhancing agricultural productivity, profitability, livelihood enhancement and diversification of agriculture in the state of Chhattisgarh.",
  //     name: "Dr. Girish Chandel",
  //     post: "Vice Chancellor",
  //     imageSrc: environment.PhotoUrl + 'abcd-removebg-preview.png',
  //     quote: "Leading the way towards a brighter future, one step at a time."
  //   },
  //   {
  //     message: "Chhattisgarh, with its vast expanse and diverse agro-climatic conditions, presents unique challenges and opportunities for agricultural development. Indira Gandhi Krishi Vishwavidyalaya plays a pivotal role in addressing these challenges through its commitment to quality education, innovative research, and effective extension activities. The university is dedicated to enhancing agricultural productivity, promoting profitability, diversifying agricultural practices, and improving livelihoods across the state of Chhattisgarh.",
  //     name: "Shri Vishnu Deo Sai",
  //     post: "Hon'ble Chief Minister of Chhattisgarh",
  //     imageSrc: environment.PhotoUrl + 'cm.png',
  //     quote: "Empowering farmers with knowledge and technology."
  //   },
  //   {
  //     message: "Chhattisgarh's extensive geography and diverse agro-climatic conditions offer both challenges and opportunities for agricultural growth. Indira Gandhi Krishi Vishwavidyalaya is at the forefront of driving progress in agriculture through excellence in education, cutting-edge research, and proactive extension services. The university strives to boost agricultural productivity, ensure sustainable profitability, encourage diversification, and uplift the livelihoods of farmers across the state.",
  //     name: "Shri Ramen Deka",
  //     post: "Hon'ble Governor of Chhattisgarh and Chancellor",
  //     imageSrc: environment.PhotoUrl + 'chancellor1.png',
  //     quote: "Empowering farmers with knowledge and technology."
  //   },
    
  // ];

  currentLeaderIndex = 0;
  currentLeader = this.leaders[this.currentLeaderIndex];
  preloadedImages: { [key: string]: HTMLImageElement } = {};

  ngOnInit(): void {


    // Preload all images
    this.leaders.forEach((leader) => {
      const img = new Image();
      img.src = leader.imageSrc; // Start preloading the image
      this.preloadedImages[leader.imageSrc] = img; // Store the preloaded image
    });


    setInterval(() => {
      this.currentLeaderIndex = (this.currentLeaderIndex + 1) % this.leaders.length;
      this.currentLeader = this.leaders[this.currentLeaderIndex];
    }, 5000); // Change every 5 seconds
  }
  
  getLeaderImage(): string {
    return this.preloadedImages[this.currentLeader.imageSrc]?.src || this.currentLeader.imageSrc;
  }



}
