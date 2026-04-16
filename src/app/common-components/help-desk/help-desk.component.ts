import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-help-desk',
  standalone: false,
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.scss']
})
export class HelpDeskComponent {
  bannerImg:String=environment.PhotoUrl + 'Extension-KVK-banner.jpg';

  pdfUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://igkv.ac.in//images/Telephone_Directory2025.pdf');
  }  
}
