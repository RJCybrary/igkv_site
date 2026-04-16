import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { LanguageService } from 'src/app/services/language.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private ds:DataService,private languageService: LanguageService,private route: Router) {
    
  }

  visitor_count:any
  showFooter:boolean = true;

  FooterLogoIGKV: string = environment.PhotoUrl + 'home-footer-igkv-logo.png';
  FooterLogoNIC: string = environment.PhotoUrl + 'NIC-LOGO-IDENTITY-VARIANTS_blue-01 (1).png';

  ngOnInit(): void {

    this.getVisitorCount();
     this.route.events.subscribe((val: any) => {
          if (val.url) {
            if (val.url.includes('/advisory')) {
              this.showFooter=false;
               } else {
                this.showFooter=true;
              }
          }
        });
  }

  // Passout Students 
  getVisitorCount() {
    this.ds
      .getapi('homeDashboard/getVistedCount')
      .subscribe((result: any) => {
        this.visitor_count = result
      });
  }



// changeLanguage(language: string): void {
//   this.languageService.setLanguage(language);
// }

// get currentLanguage(): string {
//   return this.languageService.getCurrentLanguage();
// }
}

