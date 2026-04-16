import { Component,ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

interface Content { // The Content interface
  Column1: string;
  web_content_date2: string;
  Content_Title: string;
  Website_Content_ID: number;
}

@Component({
  selector: 'app-kvk-award-viewmore',
  standalone: false,
  templateUrl: './kvk-award-viewmore.component.html',
  styleUrls: ['./kvk-award-viewmore.component.scss']
})
export class KvkAwardViewmoreComponent {

    /* for pagination */
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    pageSize = 10;
    currentPage = 0;
    paginatedContents: Content[] = [];

  constructor(private ds:DataService, private activateroute:ActivatedRoute,private route:Router){}
 
  award_data:any;
  kvk_id:any;
  errorImage: any=environment.PhotoUrl + 'no_preview_image.png';

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(() => {
      const currentUrl = this.route.url;
 // Extract the kvk_id after 'research/kvk-home/kvk'
        const basePath = 'research/kvk-home/kvk/';
        const startIdx = currentUrl.indexOf(basePath) + basePath.length;
        const endIdx = currentUrl.indexOf('/', startIdx); // End at the next slash after the ID
        this.kvk_id = currentUrl.substring(startIdx, endIdx !== -1 ? endIdx : undefined); // Extract the '59'
        this.getawarddetails(this.kvk_id);
    });
  }

  getawarddetails(id:string) {
    const unit_id = id;
    const section_id = 5;
    const category_id = '';
    const emp_id = '';
    const Website_Content_ID = '';
    const RowsPerPage = 100;
    const PageNumber = 1;
    this.ds
      .postapi(
        `ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,
        null
      )
      .subscribe((result: any) => {
        this.award_data = result;
        this.updatePaginatedContents();

      });
  }

  onErrorImage(event: any) {
    event.target.src = this.errorImage;
  }

   /* code for pagination */

   onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedContents();
  }
  
  updatePaginatedContents() {
    
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedContents = this.award_data.slice(startIndex, endIndex);
    
  }

}
