import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { DataService } from 'src/app/services/data.service';
import { ChangeDetectorRef } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'app-happenings-event',
  standalone: false,
  templateUrl: './happenings-event.component.html',
  styleUrls: ['./happenings-event.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HappeningsEventComponent implements OnInit, OnDestroy {

  Activity_data: any[] = [];
  currentSlideIndex: number = 0;
  autoSlideInterval: any;
  currentLanguage: any;

  constructor(private ds: DataService, private cdr: ChangeDetectorRef,private cms :CommonService, private laguage:LanguageService) {}

  ngOnInit(): void {
    this.getactivitydetails();
    this.startAutoSlide();
    this.laguage.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
      // this.loadContent(); // Optional: Reload content if needed
    });
  }

  setdetails(){
    this.cms.setCatData('Happenings At IGKV','Happenings At IGKV','0','/about/activities/')
  }

  getactivitydetails() {
    const unit_id = 0;
    const section_id = 1;
    const category_id = '';
    const emp_id = '';
    const Website_Content_ID = '';
    const PageNumber = 1;
    const RowsPerPage = 5;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        if(result){
          this.Activity_data = result.map((item: any) => {
            return {
              ...item,
              Content_Description: item.Content_Description.replace(/<\/?(p|h4|h3|br)>/g, '') // Removes <p>, </p>, <h4>, and </h4> tags
            };
          });
        } else{
          this.Activity_data = [];
        }
      },(error)=>{
        console.error('Error fetching activities', error);
      });
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // change slide every 5 seconds
  }

  testClick(): void {
    this.cdr.detectChanges(); // Manually trigger change detection if needed
  }
  
    nextSlide(): void {
      if (this.Activity_data.length > 0) {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.Activity_data.length;
      }
    }

  prevSlide(): void {
    
    if (this.Activity_data.length > 0) {
      this.currentSlideIndex = (this.currentSlideIndex - 1 + this.Activity_data.length) % this.Activity_data.length;
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }
}
