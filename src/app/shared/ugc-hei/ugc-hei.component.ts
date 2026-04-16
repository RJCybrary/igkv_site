import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ugc-hei',
  standalone: false,
  templateUrl: './ugc-hei.component.html',
  styleUrls: ['./ugc-hei.component.scss']
})
export class UgcHeiComponent {
  constructor(private router: Router) {}

    navigateTo(route: string): void {
      this.router.navigate([route]); 
    }
    goToAbout() {
      this.router.navigate(['/about/about-overview']); 
    }
    goToAct() {
      this.router.navigate(['/about/univ-act']); 
    }
    goToClg() {
      this.router.navigate(['/about/college-home']); 
    }
    goToChance() {
      this.router.navigate(['/about/Chancellor']); 
    }
    goToVC() {
      this.router.navigate(['/about/vice-chancellor']); 
    }
    goToRagis() {
      this.router.navigate(['/about/Offices', 2]); 
    }
    goToCopm() {
      this.router.navigate(['/about/Offices',3]); 
    }

    goToDI() {
      this.router.navigate(['/research/director/',111]); 
    }
    goToAdm(id:number) {
      this.router.navigate(['/about/Administrative/',id]); 
    }

    goToProg() {
      this.router.navigate(['/research/director/',111]); 
    }
    goToStaff() {
      this.router.navigate(['/about/staff/',0]); 
    }
    goToLib() {
      this.router.navigate(['/research/library-overview']); 
    }
    goToAdApl() {
      this.router.navigate(['/about/how-to-apply']); 
    }
    goToAdAplInt() {
      this.router.navigate(['/research/Pre-arrival']); 
    }
    goToProj() {
      this.router.navigate(['/research/sponcerd-project']); 
    }
    goToUfac() {
      this.router.navigate(['/research/facilities-infrastructure']); 
    }
    goToSports() {
      this.router.navigate(['/research/sports-overview']); 
    }
    goToNCC() {
      this.router.navigate(['/research/ncc-overview']); 
    }
    goToNSS() {
      this.router.navigate(['/research/nss-overview']); 
    }
    goToHostel() {
      this.router.navigate(['/research/accommodation-overview']); 
    }
    goToOtherNews(id:number) {
      this.router.navigate(['/about/other-news',id]); 
    }
    goToNews() {
      this.router.navigate(['/about/news',0]); 
    }
    goToEvent() {
      this.router.navigate(['/about/activities/category/',24]); 
    }
    goToCont() {
      this.router.navigate(['/about/who-is-who/members-list/',1]); 
    }
    goToMou() {
      this.router.navigate(['/about/other-news/',57]); 
    }
    goToHealth() {
      this.router.navigate(['/about/Offices/',5]); 
    }
    goToPrinciple() {
      this.router.navigate(['/about/who-is-who/members-list/',10]); 
    }
    goToFacility() {
      this.router.navigate(['/research/facilities-infrastructure']); 
    }
    goToTelephone() {
      this.router.navigate(['/contact']); 
    }
    goTowhoswho() {
      this.router.navigate(['/about/who-is-who/members-list/',1]); 
    }
    goToannualRepo() {
      this.router.navigate(['/about/annual-report']); 
    }
    goToInclubation(){
      this.router.navigate(['/research/lab&Facilities/',1072]); 
    }

    goToAnnounce(){
      this.router.navigate(['/about/activities/',28]); 
    }
    goToGallary(){
      this.router.navigate(['/about/gallery',0]); 
    }
    goToDepartment(){
      this.router.navigate(['/about/department']); 
    }


}
