import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-int-admission-rule',
  standalone: false,
  templateUrl: './int-admission-rule.component.html',
  styleUrls: ['./int-admission-rule.component.scss']
})
export class IntAdmissionRuleComponent {
  bannerImg:string=environment.PhotoUrl + 'International-Admission-process-banner.jpg';
}
