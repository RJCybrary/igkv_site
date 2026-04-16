import { Component,ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

interface Content { // The Content interface
  Column1: string;
  web_content_date: string;
  Content_Title: string;
  Website_Content_ID: number;
}

@Component({
  selector: 'app-student-corner-events-viewmore',
  standalone: false,
  templateUrl: './student-corner-events-viewmore.component.html',
  styleUrls: ['./student-corner-events-viewmore.component.scss']
})
export class StudentCornerEventsViewmoreComponent {
  
    /* for pagination */
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    pageSize = 10;
    currentPage = 0;
    paginatedContents: Content[] = [];

  constructor(private ds:DataService){}
    banner_heading:string = "Students Events";
    bannerImage:any=environment.PhotoUrl + 'Student_Corner.jpg';

  event_data:any;
  ngOnInit(): void {
    this.geteventdetails();
  }

  geteventdetails(){
    const unit_id = '';
    const section_id =19;
    const category_id='';
    const emp_id ='';
    const Website_Content_ID='';
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID}`,null).subscribe((result:any)=>{
        this.event_data=result;
        this.updatePaginatedContents();
      })
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
      this.paginatedContents = this.event_data.slice(startIndex, endIndex);
      
    }

}
