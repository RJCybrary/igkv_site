import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-int-programm-fee',
  standalone: false,
  templateUrl: './int-programm-fee.component.html',
  styleUrls: ['./int-programm-fee.component.scss']
})
export class IntProgrammFeeComponent {
  bannerImg:string=environment.PhotoUrl + 'International-ProgramFee-banner.jpg';
  
}
