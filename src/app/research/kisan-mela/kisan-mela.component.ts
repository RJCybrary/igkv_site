import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kisan-mela',
  standalone: false,
  templateUrl: './kisan-mela.component.html',
  styleUrls: ['./kisan-mela.component.scss']
})
export class KisanMelaComponent {

  bannerImg:string=environment.PhotoUrl + 'Kisan_Mela_banner.jpg';
  selectedYear: any;
  activeYear: any;


  Img1_2017:string=environment.PhotoUrl + 'kisanMela17 (1).JPG';
  Img2_2017:string=environment.PhotoUrl + 'kisanMela17 (2).JPG';
  Img3_2017:string=environment.PhotoUrl + 'kisanMela17 (3).JPG';
  Img4_2017:string=environment.PhotoUrl + 'kisanMela17 (4).JPG';
  Img5_2017:string=environment.PhotoUrl + 'kisanMela17 (5).JPG';
  Img6_2017:string=environment.PhotoUrl + 'kisanMela17 (6).JPG';
  Img7_2017:string=environment.PhotoUrl + 'kisanMela17 (7).JPG';
  Img8_2017:string=environment.PhotoUrl + 'kisanMela17 (8).JPG';

  Img1_2018:string=environment.PhotoUrl + 'kisan_mela18 (1).JPG';
  Img2_2018:string=environment.PhotoUrl + 'kisan_mela18 (2).JPG';
  Img3_2018:string=environment.PhotoUrl + 'kisan_mela18 (3).JPG';
  Img4_2018:string=environment.PhotoUrl + 'kisan_mela18 (4).JPG';

  Img1_2019:string=environment.PhotoUrl + 'Kisan_Mela_19-1.JPG';
  Img2_2019:string=environment.PhotoUrl + 'Kisan_Mela_19-2.JPG';
  Img3_2019:string=environment.PhotoUrl + 'Kisan_Mela_19-3.JPG';
  Img4_2019:string=environment.PhotoUrl + 'Kisan_Mela_19-4.JPG';
  Img5_2019:string=environment.PhotoUrl + 'Kisan_Mela_19-5.JPG';
  Img6_2019:string=environment.PhotoUrl + 'Kisan_Mela_19-6.JPG';


  Img1_2020:string=environment.PhotoUrl + 'kisan_mela20 (1).JPG';
  Img2_2020:string=environment.PhotoUrl + 'kisan_mela20 (2).JPG';
  Img3_2020:string=environment.PhotoUrl + 'kisan_mela20 (3).JPG';
  Img4_2020:string=environment.PhotoUrl + 'kisanmela2020 (1).JPG';
  Img5_2020:string=environment.PhotoUrl + 'kisanmela2020 (2).JPG';
  Img6_2020:string=environment.PhotoUrl + 'kisanmela2020 (3).JPG';


  Img1_2022:string=environment.PhotoUrl + 'Kisan_Mela_22-1.jpg';
  Img2_2022:string=environment.PhotoUrl + 'Kisan_Mela_22-2.jpg';
  Img3_2022:string=environment.PhotoUrl + 'Kisan_Mela_22-3.jpg';
  Img4_2022:string=environment.PhotoUrl + 'Kisan_Mela_22-4.jpg';
  Img5_2022:string=environment.PhotoUrl + 'Kisan_Mela_22-5.jpg';
  Img6_2022:string=environment.PhotoUrl + 'Kisan_Mela_22-6.jpg';

  
  Img1_2024:string=environment.PhotoUrl + 'kissanmela24-1.jpg';
  Img2_2024:string=environment.PhotoUrl + 'kissanmela24-2.jpg';
  Img3_2024:string=environment.PhotoUrl + 'kissanmela24-3.jpg';
  Img4_2024:string=environment.PhotoUrl + 'kissanmela24-4.jpg';
  Img5_2024:string=environment.PhotoUrl + 'kissanmela24-5.jpg';
  Img6_2024:string=environment.PhotoUrl + 'kissanmela24-6.jpg';

  ngOnInit(): void {
    this.openContent('year2022');
  }

  openContent(yearId: string) {
    this.selectedYear = yearId;
  }

  selectYear(year: string) {
    this.activeYear = year; // Sets the active year
    this.openContent(year); // Call your existing method if needed
  }

}


