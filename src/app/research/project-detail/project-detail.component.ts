import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  Financial_Year: any;
  projectDetail_data: any;
  show_data:boolean=false;
  id1: any;
  MajorHead: any;
  projectDash_Data: any;
  bannerName: any;
  id2: any;


  constructor(private ds:DataService,private activateroute:ActivatedRoute, private el: ElementRef,  private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(params =>{
      this.id1=params.get('id')
      this.id2 = params.get('id2');
      this.show_data=false;
      this.getHeadWisePrrojectDashboard()
     })
  }

  getHeadWisePrrojectDashboard(){
  //  const fin_year = '';
    this.ds.postapi(`project/projectList/${this.id1},${this.id2}`,null).subscribe((result:any)=>{
    this.projectDash_Data = result.totalProjectCountSourceAndMajorHeadWise;
    this.bannerName = result.totalProjectCountSourceAndMajorHeadWise[0];
    })
}


  viewDetail(data: any) {
    this.MajorHead = data;
    this.getProjectDetailWithPi(this.MajorHead);
  }


  getProjectDetailWithPi(id: any) {
    const fin_year = '';
    this.ds.postapi(`project/projectList/${this.id1},${this.id2},${id}`, null).subscribe((result: any) => {
      this.projectDetail_data = result.totalProjectCountWithPIWise;
      this.show_data = true;
  
      // Scroll to the element once it's in the DOM
      setTimeout(() => {
        const projectDetailRow = this.el.nativeElement.querySelector('#projectDetailRow');
        if (projectDetailRow) {
          projectDetailRow.scrollIntoView({
            behavior: 'instant', // or 'auto'
          });
        }
      });
    });
  }


}
