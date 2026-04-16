import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-int-payment-procedure',
  standalone: false,
  templateUrl: './int-payment-procedure.component.html',
  styleUrls: ['./int-payment-procedure.component.scss']
})
export class IntPaymentProcedureComponent {

  bannerImg:string=environment.PhotoUrl + 'International-payement-procedure.jpg';
}
