import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

interface Content { // The Content interface
  Column1: string;
  web_content_date: string;
  Content_Title: string;
  web_content_date2: string;
  Website_Content_ID: number;
}

@Component({
  selector: 'app-student-corner-awards-viewmore',
  standalone: false,
  templateUrl: './student-corner-awards-viewmore.component.html',
  styleUrls: ['./student-corner-awards-viewmore.component.scss']
})
export class StudentCornerAwardsViewmoreComponent {

   /* for pagination */
   @ViewChild(MatPaginator)
   paginator!: MatPaginator;
   pageSize = 10;
   currentPage = 0;
   paginatedContents: Content[] = [];
 
  constructor(private ds:DataService){ }

  banner_heading:string = "Students Awards"
  bannerImage:any=environment.PhotoUrl + 'Student_Corner.jpg';

  ngOnInit(): void {
    this.getawarddetails();
  }
award_data:any;

  getawarddetails(){
    const unit_id = '';
    const section_id =5;
    const category_id='';
    const emp_id ='';
    const Website_Content_ID='';
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID}`,null).subscribe((result:any)=>{
        this.award_data = result;
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
    this.paginatedContents = this.award_data.slice(startIndex, endIndex);
    
  } 

}
