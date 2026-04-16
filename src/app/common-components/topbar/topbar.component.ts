import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MenuSearchComponent } from '../menu-search/menu-search.component';
import { DataService } from 'src/app/services/data.service';
import { LanguageService } from 'src/app/services/language.service';
import { FontService } from 'src/app/services/font.service';
import { GeoService } from 'src/app/services/geo.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})


export class TopbarComponent implements OnInit, OnDestroy {

  locationData: any;
  isScrolled = true;
  homenavbar: boolean = true;
  menutype: boolean = false;
  backgroundImage: string = 'assets/home-mega-menu-bg.jpg';
  TopBarLogoIGKV: string = environment.PhotoUrl + 'home-igkv-main-logo-text.png';
  smallLogo: string = environment.PhotoUrl + 'home-footer-igkv-logo.png';
  isHomePage: boolean = true;
  showHover: boolean = true
  currentLanguage = 'en';
  isHindi: boolean = false;  // Initially set to false for English logo
  private readonly logoByLanguage: Record<string, { home: string; default: string }> = {
    en: {
      home: 'assets/home-igkv-main-logo-text-white.png',
      default: this.TopBarLogoIGKV
    },
    hn: {
      home: 'assets/home-igkv-main-logo-text-h-white.png',
      default: 'assets/home-igkv-main-logo-text-h-blue.png'
    },
    // Add Uzbek/Russian logo files here when available.
    uz: {
      home: 'assets/home-igkv-main-logo-text-u-white.png',
      // default: this.TopBarLogoIGKV
      default: 'assets/home-igkv-main-logo-text-u-blue.png'
    },
    ru: {
      home: 'assets/home-igkv-main-logo-text-r-white.png',
      // default: this.TopBarLogoIGKV
      default: 'assets/home-igkv-main-logo-text-r-blue.png'
    }
  };

  private readonly destroy$ = new Subject<void>();

  constructor(
    private languageService: LanguageService,
    private ds: DataService,
    private route: Router,
    private dialog: MatDialog,
    private font: FontService,
    private geoService: GeoService
  ) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.isHindi = this.currentLanguage === 'hn';
  }


  // Hybrid language switch: local JSON for en/hn, API translation for uz/ru.
  switchLanguage(language: string): void {
    this.languageService.switchLanguage(language);
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.isHindi = this.currentLanguage === 'hn';
  }

  onLanguageSelect(language: string): void {
    this.switchLanguage(language);
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((language) => {
        this.currentLanguage = language;
        this.isHindi = language === 'hn';
      });

    const savedLang =
      localStorage.getItem('app_language') ||
      localStorage.getItem('language') ||
      localStorage.getItem('lang');

    if (!savedLang) {
      this.geoService.getCountryDetails().subscribe({
        next: (data) => {
          const lang = this.getLanguageByCountry(data?.country);
          this.switchLanguage(lang);
        },
        error: () => this.switchLanguage('en')
      });
    }

    this.handleRouting();
  }

  handleRouting(): void {
    this.route.events.pipe(takeUntil(this.destroy$)).subscribe((event: any) => {

      // ✅ Detect homepage
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.route.url === '/';

        // ✅ Menu type logic
        const url = event.url;

        this.menutype = !(
          url.includes('/college/') ||
          url.includes('/kvk-home/kvk/') ||
          url.includes('/advisory')
        );
      }

      // ✅ Handle navigation start (for UI effects)
      if (event instanceof NavigationStart) {
        this.showHover = false;

        setTimeout(() => {
          this.showHover = true;
        }, 25);

        this.collapseNavbar();
      }

    });
  }


  // ✅ COUNTRY → LANGUAGE
  getLanguageByCountry(country: string): string {
    const map: any = {
      IN: 'en',
      UZ: 'uz',
      RU: 'ru'
    };

    return map[country?.toUpperCase()] || 'en';
  }

  get isUzbek(): boolean {
    return this.currentLanguage === 'uz';
  }

  getTopbarLogo(isHomeWhiteState: boolean): string {
    const config = this.logoByLanguage[this.currentLanguage] || this.logoByLanguage['en'];
    return isHomeWhiteState ? config.home : config.default;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // When page is scrolled more than 10px, the navbar background changes
    this.isScrolled = window.pageYOffset < 100;
  }


  collapseNavbar() {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse?.classList.contains('show')) {
      navbarCollapse.classList.remove('show');  // Removes the 'show' class to collapse
    }
  }


  openSearchPopup(): void {
    const dialogRef = this.dialog.open(MenuSearchComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // You can handle any result after the popup is closed if needed
    });
  }



  // for reset font size 
  increaseFont() {
    this.font.increaseFontSize();
  }
  decreaseFont() {
    this.font.decreaseFontSize();
  }
  resetFont() {
    this.font.resetFontSize();
  }

  toggleClass(className: string) {
    document.documentElement.classList.remove("high-contrast", "high-saturation", "low-saturation", "invert-colors");
    document.documentElement.classList.add(className);
  }

  resetFilters() {
    document.documentElement.classList.remove("high-contrast", "high-saturation", "low-saturation", "invert-colors");
  }

  //  big cursor --------------------------------------------
  isBigCursor = false;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isBigCursor) {
      const cursorSize = '50'; // Adjust size as needed
      document.documentElement.style.cursor = `url('data:image/svg+xml,\
      <svg xmlns="http://www.w3.org/2000/svg" width="${cursorSize}" height="${cursorSize}" viewBox="0 0 24 24">\
        <path d="M2 2 L10 22 L15 17 L22 20 L17 15 L22 10 Z" fill="black" stroke="white" stroke-width="2"/>\
      </svg>') 10 10, auto`;
    } else {
      document.documentElement.style.cursor = 'auto'; // Reset to normal cursor
    }
  }

  toggleBigCursor() {
    this.isBigCursor = !this.isBigCursor;
  }

  //  for hide image ------------------------------------------
  isImagesHidden = false;

  toggleImages() {
    this.isImagesHidden = !this.isImagesHidden;
    document.body.classList.toggle('hide-images', this.isImagesHidden);
  }

  getCountryDetails() {
    this.ds
      .getapi('homeDashboard/getCountryDetails')
      .subscribe((result: any) => {
        console.warn('country-details', result);

      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
