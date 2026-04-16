import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { PaginationService } from 'src/app/services/pagination.service';
import { environment } from 'src/environments/environment';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-office-wise-project',
  standalone: false,
  templateUrl: './office-wise-project.component.html',
  styleUrls: ['./office-wise-project.component.scss']
})
export class OfficeWiseProjectComponent {


  unit_id:any;
  imageUrl:string=environment.PhotoUrl + 'research-projects-banner.jpg';
  scheme_data: any;
  filteredContents!: any[]; 
  paginatedContents: any[] | undefined;
  pageSize: number = 5;
  currentPage: number = 0;


 constructor(private ds:DataService, private activateroute: ActivatedRoute,private paginationService: PaginationService
 ){}

 ngOnInit(): void {
  this.activateroute.paramMap.subscribe((result) => {
    this.unit_id = result.get('id');
   

  })
  this.getScheme()
 }

  getScheme() {
    const fin_year = 37;
    const Source_Code = '';
    const MajorHead_Code = '';
    const office_id = this.unit_id;
    this.ds.postapi(`project/getProjectforOffice/${fin_year},${Source_Code},${MajorHead_Code},${office_id}`, null).subscribe((result: any) => {
      this.scheme_data = result;
      this.filteredContents = [...this.scheme_data];
      this.applyPagination();
    });
  }

   /* code for pagination */
   applyPagination(): void {
    this.paginatedContents = this.paginationService.paginate(
      this.filteredContents,
      this.currentPage,
      this.pageSize
    );
  }

  onPageChange(pageEvent: PageEvent): void {
    this.currentPage = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    this.applyPagination();
  }

}
