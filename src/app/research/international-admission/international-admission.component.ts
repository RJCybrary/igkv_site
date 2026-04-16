import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-international-admission',
  standalone: false,
  templateUrl: './international-admission.component.html',
  styleUrls: ['./international-admission.component.scss']
})
export class InternationalAdmissionComponent {
  bannerImg:string=environment.PhotoUrl + 'International-Admission-process-banner.jpg';
}
