import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-int-programs',
  standalone: false,
  templateUrl: './int-programs.component.html',
  styleUrls: ['./int-programs.component.scss']
})
export class IntProgramsComponent {
  bannerImg:string=environment.PhotoUrl + 'International-Guidlinesforvisa.jpg';
}
