import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-publicaion-dashboard',
  standalone: false,
  templateUrl: './publicaion-dashboard.component.html',
  styleUrls: ['./publicaion-dashboard.component.scss']
})
export class PublicaionDashboardComponent {
  bannerIMG:String=environment.PhotoUrl +'research-publication-banner.jpg';
  constructor(private router: Router) {}

  links = [
    { title: 'Books & Magazines', route: ['research/publication', 0, 1] },
    { title: 'Publications', route: ['research/publication', 0, 3] },
    { title: 'Journals', route: ['research/publication', 0, 4] },
    { title: 'Research Paper', route: ['research/publication', '', 5] },
    { title: 'IGKV Newsletter', route: ['research/publication', 0, 'newsletter'] },
    {
      title: 'IGKV At a Glance',
      url: 'https://igkv.ac.in/_Attachment/__impfix/IGKVataglance2024.pdf',
      isExternal: true
    }
  ];
  

  navigateTo(link: any): void {
    if (link.isExternal) {
      window.open(link.url, '_blank');
    } else {
      this.router.navigate(link.route);
    }
  }
  
  
}
