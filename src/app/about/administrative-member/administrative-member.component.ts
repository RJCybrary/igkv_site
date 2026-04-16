  import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-administrative-member',
  standalone: false,
  templateUrl: './administrative-member.component.html',
  styleUrls: ['./administrative-member.component.scss']
})
export class AdministrativeMemberComponent {
  GetingNews: any;

  constructor(private ds:DataService,private activateroute:ActivatedRoute, public router:Router){}
  Administrative_Board_ID:any;
  Employee_List:any;
  loading: boolean = true;
  imageUrl: string = environment.PhotoUrl +'about-administrative-member-banner.jpg';

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result=>{
      this.Administrative_Board_ID=result.get('id')
      this.getdata();
      this.getNewsForAcdCou();
     })
  }

   @ViewChild('targetDiv') targetDiv!: ElementRef;
  
   ngAfterViewInit() {
     // Now the ViewChild is initialized after the view is fully rendered
   }
  
   scrollToDiv(): void {
     if (this.targetDiv) {
       this.targetDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }
   }

  getNewsForAcdCou() {
    const isHeading = 'C';
    this.ds.postapi(`news/getAcaCounNews/${isHeading}`, null).subscribe(
      (result: any) => {
        if (result ) {
          // Process the result to extract the URL
          this.GetingNews = result.map((news: any) => {
            const linkParts = news.link.split('|'); // Split the link by '|'
            return {
              ...news, // Spread the original data
              TargetUrl: linkParts[9], // Extract the 10th element (index 9)
            };
          });
          this.loading = false;
        } else {
          this.GetingNews = [];
        }
      },
      (error) => {
        console.error('Error fetching employee data', error);
      }
    );
  }
  

  getdata(){
    this.ds.postapi(`WhoisWhosPostList/Administrative/${this.Administrative_Board_ID}`,null).subscribe((result:any)=>{
      if(result){
        this.Employee_List=result;
        this.loading = false;
      } else{
        this.Employee_List=[];
      }
    },(error)=>{
      console.error('Error fetching employee data', error);
    })
  }
  
  routetoprofile(empid:any){
    this.router.navigate(['about/employeeProfile',empid])
    }

    errorImage: any=environment.PhotoUrl + 'Img_notFound.png';


    onErrorImage(event: any) {
      event.target.src = this.errorImage;
    }


  

}
