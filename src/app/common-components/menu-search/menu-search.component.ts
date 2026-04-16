import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';


const MENU_ITEMS = [
  { title: 'Overview', route: '/about/about-overview' },
  { title: 'Who is Who', route: '/about/who-is-who/members-list/1' },
  { title: 'Board of Management', route: "about/Administrative/1" },
  { title: 'Administrative Council', route: "about/Administrative/3" },
  { title: 'Academic Council', route: 'about/Administrative/3' },
  { title: 'Chancellor', route: 'about/Chancellor' },
  { title: 'Desk Of Vice Chancellor', route: 'about/vice-chancellor' },
  { title: 'VC Secretariat', route: "about/Offices/1" },
  { title: 'Registrar Office', route: "about/Offices/2" },
  { title: 'Comptroller Office', route: "about/Offices/3" },
  { title: 'Medical Unit', route: "about/Offices/5" },
  { title: 'National Awards', route: "about/awards-achieve/25" },
  { title: 'Student Awards', route: "about/awards-achieve/26" },
  { title: 'Sports Awards', route: "about/awards-achieve/30" },
  { title: 'Cultutral Awards', route: "about/awards-achieve/31" },
  { title: 'IGKV Appreciation', route: "about/awards-achieve/27" },
  { title: 'University Service Regulations', route: "about/other-news/19" },
  { title: 'Photo Gallery', route: "about/gallery/0" },
  { title: 'Seniority List', route: "about/other-news/18" },
  { title: 'Video Gallery', route: "about/video-gallery/0" },
  { title: 'Facebook', route: "https://www.facebook.com/igkvkisan", external: true },
  { title: 'Youtube', route: "https://www.youtube.com/playlist?list=UUkzs-8I9dPquYO_e4MEno9A", external: true },
  { title: 'Instagram', route: "https://www.instagram.com/igkv_kisan/", external: true },
  { title: 'Twitter', route: "https://twitter.com/igkv_kisan", external: true },
  { title: 'Upcoming events', route: "about/activities/28" },
  { title: 'All Activities', route: "about/activities/all" },
  { title: 'Directorate of Instruction', route: "research/director/111" },
  { title: 'Colleges', route: "about/college-home" },
  { title: 'Departments', route: "about/department" },
  { title: 'Staff', route: "about/staff/0" },
  { title: 'Alumni', route: "https://igkv.ac.in/alumni/alumnihomepage.aspx", external: true },
  { title: 'Placement', route: "about/err404" },
  { title: 'Agriculture Faculty', route: "about/faculty/1" },
  { title: 'Agriculture Engineering Faculty', route: "about/faculty/2" },
  { title: 'Horticulture Faculty', route: "about/faculty/3" },
  { title: 'UG (Degree Program)', route: "about/program/1" },
  { title: 'PG (Degree Program)', route: "about/program/2" },
  { title: 'Ph.D (Degree Program)', route: "about/program/3" },
  { title: 'Apply', route: "about/how-to-apply" },
  { title: 'Fee Structure', route: "about/fee-structure" },
  { title: 'FAQs', route: "about/faq" },
  { title: 'Directorate of Research Services', route: "research/director/100" },
  { title: 'Projects', route: "research/sponcerd-project" },
  { title: 'Patents', route: "research/patent" },
  { title: 'Copyright', route: "research/Copy" },
  { title: 'Variety released', route: "research/varietyReleased" },
  { title: 'Technology Developed', route: "research/Technologies-Developed" },
  { title: 'Books', route: "research/publication/1" },
  { title: 'Publications', route: "research/publication/3" },
  { title: 'Journals', route: "research/publication/4" },
  { title: 'guest-house', route: "research/guest-house" },
  { title: 'Knowledge & Technology Resource Centre', route: "research/lab&Facilities/1073" },
  { title: 'Rh. Richharia Lab', route: "research/lab&Facilities/1070" },
  { title: 'IGKV R-ABI', route: "research/lab&Facilities/1072" },
  { title: 'Tissue Culture Lab', route: "research/lab&Facilities/1014" },
  { title: 'Bio Control Lab', route: "research/lab&Facilities/1004" },
  { title: 'Mushroom Spawan Lab', route: "research/lab&Facilities/1071" },
  { title: 'Phytosanitary Lab', route: "research/phytosanitary-lab" },
  { title: 'Agro Industrial Biotechnology', route: "research/coa/1009" },
  { title: 'Non Timber Forest Produce & Medical And Aromatic Plants', route: "research/coa/1012" },
  { title: 'Protective Cultivation & Precision Farming', route: "research/coa/1010" },
  { title: 'MOUs', route: "about/other-news/57" },
  { title: 'Directorate of Extension Services', route: "research/director" },
  { title: 'Krishi Vigyan Kendra (KVKs)', route: "research/kvk-home" },
  { title: 'JAI', route: "https://igkv.ac.in/jai/jaihome.aspx", external: true },
  { title: 'LMTdb', route: "https://igkv.ac.in/xenom/index.aspx", external: true },
  { title: 'ATIC', route: "research/atic" },
  { title: 'Kisan Mela', route: "research/kisan-mela" },
  { title: 'Training', route: "research/training/15" },
  { title: 'FLD', route: "research/fld/13" },
  { title: 'Crop Doctor', route: "research/Mobile-apps/1" },
  { title: 'Sankhya', route: "research/Mobile-apps/2" },
  { title: 'e-HAAT', route: "research/Mobile-apps/3" },
  { title: 'e-Krishi Yantra', route: "research/Mobile-apps/4" },
  { title: 'e-Krishi Rojgar', route: "research/Mobile-apps/5" },
  { title: 'Millet Doctor', route: "research/Mobile-apps/6" },
  { title: 'e-Krishi Pathshala', route: "research/Mobile-apps/7" },
  { title: 'Dean Student Walfare', route: "research/director/57" },
  { title: 'Sports', route: "research/sports-overview" },
  { title: 'Facilities & Infrastructures', route: "research/facilities-infrastructure" },
  { title: 'Public Services', route: "research/public-service" },
  { title: 'Art & Culture', route: "research/art-culture" },
  { title: 'NCC', route: "research/ncc-overview" },
  { title: 'NSS', route: "research/nss-overview" },
  { title: 'Accommodation', route: "research/accommodation-overview" },
  { title: 'Girls Hostel', route: "research/girls-hostel-overview" },
  { title: 'Boys Hostel', route: "research/boys-hostel-overview" },
  { title: 'Safety & Security', route: "research/safety-security" },
  { title: 'Nehru Library', route: "research/library-overview" },
  { title: 'Director Farm', route: "research/director/112" },
  { title: 'Success Story', route: "research/succesStory" },
  { title: 'Smart Kisan', route: "https://igkv.ac.in/smartkisan/Auth/loginpage.aspx", external: true },
  { title: 'Poultry', route: "research/farming/1" },
  { title: 'Bee Keeping', route: "research/farming/2" },
  { title: 'Fisheries', route: "research/farming/3" },
  { title: 'Lakh', route: "research/farming/4" },
  { title: 'Marigold', route: "research/farming/5" },
  { title: 'Quail', route: "research/farming/6" },
  { title: 'Recruitment', route: "https://igkv.ac.in/recruitmenthome.aspx", external: true },
  { title: 'Admission', route: "https://igkv.ac.in/counselinghomenew.aspx", external: true },
  { title: 'Why Choose IGKV', route: "research/international-overview" },
  { title: 'Admission Process', route: "research/international-admission" },
  { title: 'How to apply', route: "research/how-to-apply" },
  { title: 'Programme Fee', route: "research/programfee" },
  { title: 'Admission Rules', route: "research/admission-rule" },
  { title: 'Payment Procedure', route: "research/Payement-procedure" },
  { title: 'Pre-Arrival Information', route: "research/Pre-arrival" },
  { title: 'Student Corner', route: "about/student" },
  { title: 'Employee Corner', route: "about/staff/0" },
  { title: 'News & Notifications', route: "about/news" },
  { title: 'Site Map', route: "about/sitemaps" },


  { title: "College of Agriculture, Raipur", route: "about/college-home/college/59" },
  { title: "BTC College Of Agriculture and Research Station, Bilaspur", route: "about/college-home/college/60" },
  { title: "RMD College of Agriculture & Res. Stn., Ambikapur", route: "about/college-home/college/62" },
  { title: "SG College of Agriculture & Res. Stn., Jagdalpur", route: "about/college-home/college/61" },
  { title: "BRSM College of Agril. Engg. and Tech. & RS, Mungeli", route: "about/college-home/college/86" },
  { title: "SK College of Agriculture & Res. Stn., Kawardha", route: "about/college-home/college/63" },
  { title: "College of Agriculture & Res. Stn., Janjgir-Champa", route: "about/college-home/college/64" },
  { title: "DKS College of Agriculture & Res. Stn., Bhatapara", route: "about/college-home/college/65" },
  { title: "College of Agriculture & Res. Stn., Kanker", route: "about/college-home/college/70" },
  { title: "College of Agriculture & Res. Stn., Bemetara", route: "about/college-home/college/69" },
  { title: "College of Agriculture & Res. Stn., Korea", route: "about/college-home/college/58" },
  { title: "College of Agriculture & Res. Stn., Raigarh", route: "about/college-home/college/67" },
  { title: "SKS College of Agriculture & Res. Stn., Rajnandgaon", route: "about/college-home/college/66" },
  { title: "SV College of Agril. Engg. and Tech. & RS, Raipur", route: "about/college-home/college/117" },
  { title: "College of Agriculture & Res. Stn., Chhuikhadan", route: "about/college-home/college/1037" },
  { title: "College of Agriculture & Res. Stn., Gariaband", route: "about/college-home/college/1038" },
  { title: "College of Agriculture & Res. Stn., Jashpur", route: "about/college-home/college/1041" },
  { title: "College of Agriculture & Res. Stn., Korba", route: "about/college-home/college/1040" },
  { title: "College of Agriculture & Res. Stn., Kurud", route: "about/college-home/college/1039" },
  { title: "College of Agriculture & Res. Stn., Mahasamund", route: "about/college-home/college/1042" },
  { title: "College of Agriculture & Res. Stn., Narayanpur", route: "about/college-home/college/1034" },
  { title: "College of Agriculture & Res. Stn., Marra, Patan", route: "about/college-home/college/1043" },
  { title: "College of Agriculture & Res. Stn., Saja, Bemetara", route: "about/college-home/college/1044" },
  { title: "College of Agriculture, Lormi, Mungeli", route: "about/college-home/college/1056" },
  { title: "College of Food Technology, Raipur", route: "about/college-home/college/1051" },
  { title: "College of Agriculture pakhanjore (Kanker)", route: "about/college-home/college/1067" },
  { title: "College of Agriculture Pratappur (Surajpur)", route: "about/college-home/college/1068" },
  { title: "College of Agriculture Shankargarh (Balrampur)", route: "about/college-home/college/1069" },


  { title: "College of Agriculture, Raipur", route: "research/kvk-home/kvk/1018" },
  { title: "BTC College Of Agriculture and Research Station,Bilaspur", route: "research/kvk-home/kvk/14" },
  { title: "Krishi Vigyan Kendra, Ambikapur", route: "research/kvk-home/kvk/16" },
  { title: "Krishi Vigyan Kendra, Balod", route: "research/kvk-home/kvk/1035" },
  { title: "Krishi Vigyan Kendra, Balrampur", route: "research/kvk-home/kvk/47" },
  { title: "Krishi Vigyan Kendra, Bemetara", route: "research/kvk-home/kvk/1030" },
  { title: "Krishi Vigyan Kendra, Bhatapara", route: "research/kvk-home/kvk/19" },
  { title: "Krishi Vigyan Kendra, Bijapur", route: "research/kvk-home/kvk/27" },
  { title: "Krishi Vigyan Kendra, Bilaspur", route: "research/kvk-home/kvk/20" },
  { title: "Krishi Vigyan Kendra, Dantewada", route: "research/kvk-home/kvk/38" },
  { title: "Krishi Vigyan Kendra, Dhamatari", route: "research/kvk-home/kvk/18" },
  { title: "Krishi Vigyan Kendra, Durg", route: "research/kvk-home/kvk/1029" },
  { title: "Krishi Vigyan Kendra, Gariyaband", route: "research/kvk-home/kvk/48" },
  { title: "Krishi Vigyan Kendra, Jagdalpur", route: "research/kvk-home/kvk/17" },
  { title: "Krishi Vigyan Kendra, Janjgir-Champa", route: "research/kvk-home/kvk/21" },
  { title: "Krishi Vigyan Kendra, Jashpur", route: "research/kvk-home/kvk/25" },
  { title: "Krishi Vigyan Kendra, Kabirdham", route: "research/kvk-home/kvk/26" },
  { title: "Krishi Vigyan Kendra, Kanker", route: "research/kvk-home/kvk/24" },
  { title: "Krishi Vigyan Kendra, Kondagaon", route: "research/kvk-home/kvk/1045" },
  { title: "Krishi Vigyan Kendra, Korba", route: "research/kvk-home/kvk/23" },
  { title: "Krishi Vigyan Kendra, Korea", route: "research/kvk-home/kvk/43" },
  { title: "Krishi Vigyan Kendra, MahaSamund", route: "research/kvk-home/kvk/20" },
  { title: "Krishi Vigyan Kendra, Mainpat", route: "research/kvk-home/kvk/1033" },
  { title: "Krishi Vigyan Kendra, Mungeli", route: "research/kvk-home/kvk/1031" },
  { title: "Krishi Vigyan Kendra, Narayanpur", route: "research/kvk-home/kvk/46" },
  { title: "Krishi Vigyan Kendra, Raigarh", route: "research/kvk-home/kvk/22" },
  { title: "Krishi Vigyan Kendra, Raipur", route: "research/kvk-home/kvk/1018" },
  { title: "Krishi Vigyan Kendra, Rajnandgaon", route: "research/kvk-home/kvk/42" },
  { title: "Krishi Vigyan Kendra, Sukma", route: "research/kvk-home/kvk/1036" }


];

@Component({
  selector: 'app-menu-search',
  standalone: false,
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.scss']
})
export class MenuSearchComponent {

  searchQuery: string = ''; // Holds the search input
  filteredMenu = MENU_ITEMS; // All menu items by default

  constructor(private router: Router, public dialogRef: MatDialogRef<MenuSearchComponent>) { }

  ngOnInit(): void { }

  // This method filters the menu based on the search query
  onSearch(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredMenu = MENU_ITEMS; // If no search query, show all items
    } else {
      this.filteredMenu = MENU_ITEMS.filter(menu =>
        menu.title.toLowerCase().includes(this.searchQuery.toLowerCase()) // Filter based on query
      );
    }
  }

  // This method is called when a user clicks on a menu item to navigate
  // navigateTo(route: string): void {
  //   this.router.navigate([route]); // Navigate to the selected route
  //   this.dialogRef.close();
  // }

  navigateTo(route: string, external: boolean = false): void {
    if (external) {
      // Redirect to old website / external URL
      window.location.href = route;
    } else {
      // Navigate inside Angular app
      this.router.navigate([route]);
    }
    this.dialogRef.close();
  }


  closeDialog(): void {
    this.dialogRef.close();
  }

}
