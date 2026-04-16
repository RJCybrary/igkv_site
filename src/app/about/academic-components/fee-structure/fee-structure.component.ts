import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fee-structure',
  standalone: false,
  templateUrl: './fee-structure.component.html',
  styleUrls: ['./fee-structure.component.scss']
})
export class FeeStructureComponent {

  bannerImg:string=environment.PhotoUrl + 'academic-Fee-Structure-Banner.jpg';
  Ug_fee_structure_govt:string=environment.DocumentUrl +'UG_Fee_Details_Government_College.pdf';
  Ug_fee_structure_private:string=environment.DocumentUrl +'UG_Fee_Details_Private_College.pdf';
  PG_Fee_Structure_24_25:string=environment.DocumentUrl +'PG_Fee_Details_24_25.pdf';
  Phd_Fee_Structure_24_25:string=environment.DocumentUrl +'Phd_Fee_Details_24_25.pdf';


}
