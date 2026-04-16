import { ChangeDetectorRef, Component,ElementRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-our-project',
  standalone: false,
  templateUrl: './our-project.component.html',
  styleUrls: ['./our-project.component.scss']
})
export class OurProjectComponent {
  projectDash_Data: any;
  funding_source:any;
  MajorHead: any;
  show_data:boolean=false;
  bannerName: any;
  projectDetail_data: any;
  PostList: any;
  Source_Code:any;
  session_data: any;
  Financial_Year: any;
  loading: boolean = true;


  constructor(private ds:DataService,private activateroute:ActivatedRoute, private el: ElementRef,  private cdr: ChangeDetectorRef){}



  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result=>{
      this.Financial_Year=result.get('id')
      this.getHeadWisePrrojectDashboard();
      this.show_data=false
     })
  }

  getHeadWisePrrojectDashboard(){
    this.ds.postapi(`project/projectList/${this.Financial_Year}`,null).subscribe((result:any)=>{
    this.projectDash_Data = result.totalProjectCountSourceWise;
    this.bannerName = result.totalProjectCountSourceWise[0];
    this.loading = false;
    })
}



viewDetail(data: any) {
  this.MajorHead = data;
  this.getProjectDetailWithPi(this.MajorHead);
}


getProjectDetailWithPi(id: any) {
  const fin_year = '';
  this.ds.postapi(`project/projectList/${fin_year},${this.Source_Code},${id}`, null).subscribe((result: any) => {
    this.projectDetail_data = result.totalProjectCountWithPIWise;
    this.show_data = true;
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
