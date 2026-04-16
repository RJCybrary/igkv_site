import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-phytosanitory-lab',
  standalone: false,
  templateUrl: './phytosanitory-lab.component.html',
  styleUrls: ['./phytosanitory-lab.component.scss']
})
export class PhytosanitoryLabComponent {

  Staff_List: any;
  bannerImg:String=environment.PhotoUrl +  'reseach-Phytosanitary_Lab-banner.jpeg';
  HVCImg:String=environment.PhotoUrl + 'about-hvc-Image-2.jpg';
  LiquidImg:String=environment.PhotoUrl + 'research-PhytosanitaryLab-Facilities-Liquid.jpg';
  GasImg:String=environment.PhotoUrl + 'research-PhytosanitaryLab-Falcilities-Gas.jpg';
  MassImg:String=environment.PhotoUrl + 'research-PhytosanitaryLab-Facilities-Mass.jpg';
  Gallery1:String=environment.PhotoUrl + 'research-PhytosanitaryLab-Gallery1.jpg';
  Gallery2:String=environment.PhotoUrl + 'research-PhytosanitaryLab-Gallery2.jpg';
  Gallery3:String=environment.PhotoUrl + 'research-PhytosanitaryLab-Gallery3.jpg';
  Gallery4:String=environment.PhotoUrl + 'research-PhytosanitaryLab-Gallery4.jpg';
  Gallery5:String=environment.PhotoUrl + 'research-PhytosanitaryLab-Gallery5.jpg';
  Gallery6:String=environment.PhotoUrl + 'research-PhytosanitaryLab-Gallery6.jpg';
  
  getSliceIndices(length: number, chunkSize: number): number[] {
    const indices = [];
    for (let i = 0; i < length; i += chunkSize) {
      indices.push(i);
    }
    return indices;
  }

}
