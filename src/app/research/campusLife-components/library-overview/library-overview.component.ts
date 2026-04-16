import { Component, EnvironmentInjector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-library-overview',
  standalone: false,
  templateUrl: './library-overview.component.html',
  styleUrls: ['./library-overview.component.scss']
})
export class LibraryOverviewComponent {
  Office_Id:any;
  bannerImg:String=environment.PhotoUrl + 'StudentWelfare-Library-banner.jpg';
  LabrarianImg:String=environment.PhotoUrl + 'StudentWelfare-Library-librarian image.png';
  ebookLogo:String=environment.PhotoUrl + 'StudentWelfare-Library-icon-ebook.png';
  JournalLogo:String=environment.PhotoUrl + 'StudentWelfare-Library-icon-journal.png';
  e_paperLogo:String=environment.PhotoUrl + 'StudentWelfare-Library-icon-epaper.png';
  RepositoryLogo:String=environment.PhotoUrl + 'StudentWelfare-Library-icon-repository.png';
  ThesisLogo:String=environment.PhotoUrl + 'StudentWelfare-Library-icon-thesis.png';
  OpacLogo:string=environment.PhotoUrl + 'StudentWelfare-Library-icon-OPAC.png';

  InsideLibraryImg:string=environment.PhotoUrl + 'StudentWelfare-Library-Facility-InsideLibrary.jpg';
  OutSideLibraryImg:String=environment.PhotoUrl + 'Outside_Library_Image.jpg';
  OtherServicesImg:String=environment.PhotoUrl + 'Other_services_library.jpg';

  AwardImg1:string=environment.PhotoUrl + 'StudentWelfare-Library-award image-1.png';
  AwardImg2:string=environment.PhotoUrl + 'StudentWelfare-Library-award-image-2.png';

  GalleryImg1:String=environment.PhotoUrl + 'StudentWelfare-Library-Infrastructure- (1).jpg';
  GalleryImg2:String=environment.PhotoUrl + 'StudentWelfare-Library-Infrastructure- (1).png';
  GalleryImg3:String=environment.PhotoUrl + 'StudentWelfare-Library-Infrastructure- (2).jpg';
  GalleryImg4:String=environment.PhotoUrl + 'StudentWelfare-Library-Infrastructure- (2).png';
  GalleryImg5:String=environment.PhotoUrl + 'StudentWelfare-Library-Infrastructure- (3).jpg';
  GalleryImg6:String=environment.PhotoUrl + 'StudentWelfare-Library-Infrastructure- (4).JPG';

  ContactImg:string=environment.PhotoUrl + 'StudentWelfare-Library-banner.jpg';
  constructor( private activateroute:ActivatedRoute,private route:Router){}


  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result=>{
      this.Office_Id=result.get('id')
      const currentUrl = this.route.url;
      if(currentUrl.includes('college-home/college/')){
        if(this.Office_Id == 59){
          //nothing to do
        }
        else{
          this.route.navigateByUrl(`about/college-home/college/${this.Office_Id}/cont/404`);
        }
      }
     })

  }


}
