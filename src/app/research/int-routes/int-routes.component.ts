import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-int-routes',
  standalone: false,
  templateUrl: './int-routes.component.html',
  styleUrls: ['./int-routes.component.scss']
})
export class IntRoutesComponent {

constructor(public router: Router){}

  routeTowhyChoose() {
    this.router.navigate(['/research/international-overview']);
  }

  routeToadmission() {
    this.router.navigate(['/research/international-admission']);
  }

  routeToapply() {
    this.router.navigate(['/research/how-to-apply']);
  }

  routeToprogramfee() {
    this.router.navigate(['/research/programfee']);
  }

  routeToadmissionrule() {
    this.router.navigate(['/research/admission-rule']);
  }

  routeTopayment() {
    this.router.navigate(['/research/Payement-procedure']);
  }

  routeToprearrival() {
    this.router.navigate(['/research/Pre-arrival']);
  }

  routeTopostarrival() {
    this.router.navigate(['/research/Post-arrival']);
  }

  routeToabroad() {
    this.router.navigate(['/research/abroad-overview']);
  }
  routeToProgram() {
    this.router.navigate(['/research/Programs']);
  }

  routeToexamination() {
    this.router.navigate(['/research/Examination']);
  }


}
