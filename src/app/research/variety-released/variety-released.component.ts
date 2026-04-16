import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-variety-released',
  standalone: false,
  templateUrl: './variety-released.component.html',
  styleUrls: ['./variety-released.component.scss']
})
export class VarietyReleasedComponent {

  images:any;
  bannerImg:string=environment.PhotoUrl + 'research-variety-releases-banner.jpg';
  variety_image:string=environment.PhotoUrl + 'research-variety-image.jpg';
  errorImage:string=environment.PhotoUrl +'no_preview_image.png';
  selectedCrop: any | null = null;
  selectedVeraiety2: any | null = null;
  Variety_Data: any;
  crop_Data: any;
  paginatedContents: any[] | undefined;
  filteredContents!: any[]; 
  pageSize: number = 5;
  currentPage: number = 0;
  dashborad_data: any;
  Crop_data: any;
  variety_data: any;
  Variety_list: any;
  office: any;
 
  constructor(private ds: DataService,private paginationService: PaginationService) {}

  currentSlide = 0;

  ngOnInit(): void {
    this.getCrop();
    this.getVarityById();
    this.getDashborad();
    this.getVarity();
    this.clearSelections();
  }



    clearSelections() {
      this.selectedVeraiety2 = '';
      this.selectedCrop = '';

      // Optionally, clear the data arrays (if you want to reset the dropdown options as well)
      // this.filteredContents = [];
      // this.crop_Data = [];
    }

  getCrop(){
      this.ds.getapi(`varietyreleased/crop`).subscribe((result:any)=>{
        this.crop_Data=result
      })  
  }
  getVarity(){
    this.ds.postapi(`varietyreleased/,`, null).subscribe((result: any) => {
      this.Variety_list = result; 
    });
  }

  getVarityById(){
    const Developed_Varieties_ID = this.selectedVeraiety2 || ',';
    const crop_ID = this.selectedCrop || ',';
    const queryparam = `${crop_ID},${Developed_Varieties_ID}`
    
    this.ds.postapi(`varietyreleased/${queryparam}`, null).subscribe((result: any) => {
      this.Variety_Data = result; 
      this.filteredContents = [...this.Variety_Data];
      this.applyPagination();
    });
  }

  getDashborad(){
    this.ds.getapi(`varietyreleased/dash`).subscribe((result:any)=>{
      this.variety_data=result[0][0]
      this.Crop_data=result[1][0]
    })  
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

  refreshPage() {
    window.location.reload();
  }

  onErrorImage(event:any){
    event.target.src=this.errorImage;
  }

}
