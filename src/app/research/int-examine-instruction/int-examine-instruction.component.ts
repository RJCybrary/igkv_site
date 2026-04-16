import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-int-examine-instruction',
  standalone: false,
  templateUrl: './int-examine-instruction.component.html',
  styleUrls: ['./int-examine-instruction.component.scss']
})
export class IntExamineInstructionComponent {
  bannerImg:string=environment.PhotoUrl + 'International-examinatonInstruction.jpg';
}
