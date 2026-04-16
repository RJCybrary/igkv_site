import { Component, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

interface Content { // The Content interface
  employee_name: string;
  from_date: string;
  to_date: string;
  web_content_date2: string;
  Content_Description: string;
  imgURL: any;
}

@Component({
  selector: 'app-former-vice-chancellors',
  standalone: false,
  templateUrl: './former-vice-chancellors.component.html',
  styleUrls: ['./former-vice-chancellors.component.scss']
})
export class FormerViceChancellorsComponent {

    /* for pagination */
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    pageSize = 10;
    currentPage = 0;
    paginatedContents: Content[] = [];

  vcList_data: any;
  imageUrl:String=environment.PhotoUrl + 'about-vc-banner-2.jpg';
  HVCImg:String=environment.PhotoUrl+ 'desk-of-vc-image.jpg';
  ImageNotFound:String=environment.PhotoUrl + 'Img_notFound.png';
  constructor(private ds:DataService){}

  ngOnInit(): void {
   this.getdata();
  }

  getdata(){
    this.ds.postapi('viceChancellore/formerVC',null).subscribe((result:any)=>{
      this.vcList_data = result;
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
  this.paginatedContents = this.vcList_data.slice(startIndex, endIndex);
}
  
}
