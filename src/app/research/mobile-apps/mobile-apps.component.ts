import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mobile-apps',
  standalone: false,
  templateUrl: './mobile-apps.component.html',
  styleUrls: ['./mobile-apps.component.scss']
})
export class MobileAppsComponent {
  Mobile_Id:any;

  CropDrImg:string=environment.VideoUrl + 'test-crop-doctor-2.0.gif';
  SankhyaImg:string=environment.PhotoUrl + 'Farm-sankhya-img.png';
  E_haatImg:string=environment.PhotoUrl + 'Farm-e-haat-img.png';
  E_krishiPathsalaImg:string=environment.PhotoUrl + 'Farm-e-krishi-pathsala-img.png';
  E_RojgarImg:string=environment.PhotoUrl + 'Farm-e-krishi-rojgar-img.png';
  MilletImg:string=environment.PhotoUrl + 'Farm-millet-app-img.png';
  E_KrishiYantraImg:string=environment.PhotoUrl + 'Farm-e-krishi-yantra-img.png';

  CropDrLogo:string=environment.PhotoUrl + 'Farm-Crop_Doctor.jpg';
  SankhayaLogo:string=environment.PhotoUrl + 'Farm-logo_sankhya.png';
  E_haatLogo:string=environment.PhotoUrl + 'Farm-ehaat-logo.png';
  E_KrishiPathsalaLogo:string=environment.PhotoUrl + 'e-Krishi_pathsala_logo.png';
  E_rojgarLogo:string = environment.PhotoUrl + 'eKrishi_Rojgar-logo.png';
  MilletLogo:string = environment.PhotoUrl + 'Millet_Doctor-logo.png';
  E_KrishiYantraLogo:string = environment.PhotoUrl + 'Farm-eKrishi_yantra-logo.png';

  constructor(private activateroute:ActivatedRoute){}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result=>{
      this.Mobile_Id=result.get('id')
     })
  }
}
