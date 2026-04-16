import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-how-to-apply',
  standalone: false,
  templateUrl: './how-to-apply.component.html',
  styleUrls: ['./how-to-apply.component.scss']
})
export class HowToApplyComponent {

  bannerImg:string=environment.PhotoUrl + 'admission_apply_banner.jpg';
  igkvImg:string=environment.PhotoUrl + 'about-overview-banner.jpg';

  ug_couseling_guidelines:string=environment.DocumentUrl+'UG_Counseling_Guidlines.pdf';
  ug_admission_rule:string=environment.DocumentUrl+'UG_Admission_Rule_24_25.pdf';
  ug_couseling_form_filling_guidelines:string=environment.DocumentUrl+'UG_Registration_Guidlines.pdf';

  Phd_detailed_advertisement_24_25:string=environment.DocumentUrl + 'Phd_Detailed_Advertisement_24_25.pdf';
  Phd_admission_rule_form_filling_guidelines:string=environment.DocumentUrl +'Phd_Admission_Rule.pdf';
  Phd_instruction_for_examinee_24_25:string=environment.DocumentUrl+'Phd_Instuctions_for_Examinee_24_25.pdf';

  PG_admission_rule_counseling_fill_form_guidelines:string=environment.DocumentUrl+'PG_admission_rule.pdf';
  PG_detailed_notice:string=environment.DocumentUrl + 'PG_detailed_notice24_25.pdf';
  PG_instructions_for_examinee:string=environment.DocumentUrl + 'PG_instructions_for_examinee_24_25.pdf';
}
