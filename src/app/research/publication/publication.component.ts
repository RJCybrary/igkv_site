import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-publication',
  standalone: false,
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
})

export class PublicationComponent {
  publicationType: any;
  publicationList_Data: any;
  loding: boolean = true;
  errorImage: any = environment.PhotoUrl + 'no_image_available.jpg';
  bannerImg: string = environment.PhotoUrl + 'research-publication-banner.jpg';
  bannerHeading!: string;
  unit_id: any;
  Activities_Id: any;
  office_id: any;
  showpublication: boolean = false;
  newsYear: any;
  selectedSubMonthId: any;
  top_news:any;
  constructor(private ds: DataService, private activateroute: ActivatedRoute) {}

  newsletter = [
    {
      title: 'January to March 2024',
      image: 'assets/images/news-letter-01.jpg',
      File_URL:
        '_Attachment/web/news_notificaiton/2024/0/8/Press Release_-_5157_20240612013557_0_4fa8c003.pdf',
    },
    // {
    //   title: 'October to December 2023',
    //   image: 'assets/images/news-letter-02.jpg',
    //   File_URL:
    //     '_Attachment/web/news_notificaiton/2024/0/8/Press Release_-_5156_20240612125250_0_19959ac0.pdf',
    // },
  ];

  ngOnInit() {
    this.activateroute.paramMap.subscribe((result) => {
      this.office_id = result.get('id1');
      this.publicationType = result.get('id2');

      if (this.publicationType === 'newsletter') {
        this.showpublication = false;
      } else {
        this.getdata();
        this.showpublication = true;
      }
    });
    this.get_News_BysubCategory();
  }

  getdata() {
    const IGKV_Publication_ID = '';
    const office_id = this.office_id || '';
    this.ds
      .postapi(
        `publication/publicationList/${this.publicationType},${IGKV_Publication_ID},${office_id}`,
        null
      )
      .subscribe(
        (result: any) => {
          if (result && result.length > 0) {
            this.publicationList_Data = result;
            this.bannerHeading = this.publicationList_Data[0]?.Publication_Category_Name_E;
          } else {
            this.publicationList_Data = [];
            switch (this.publicationType) {
            case '1':
            this.bannerHeading = 'Books And Magzines';
            break;

            case '3':
            this.bannerHeading = 'Publications';
            break;

            case '4':
            this.bannerHeading = 'Journals';
            break;

            case '5':
            this.bannerHeading = 'Research Papers';
            break;
          default:
            this.bannerHeading = '';
        }
          }
          this.loding = false;
        },
        (error) => {
          console.error('Error fetching publication', error);
        }
      );
  }

  OnErrorImage(event: any) {
    event.target.src = this.errorImage;
  }

  /* News by sub category */
get_News_BysubCategory(){
  // this.isLoading = true;
  this.newsYear = 0;
  this.selectedSubMonthId = 0;
  const News_Category_ID = 69 ;
  const news_parent_category_id = 8;
  const unit_ID = 0;
  const Start_Date = '';
  const End_Date = '';
  const news_id = '';
  const Unit_Type_Id = '';
  const year = '';
  const month = '';
  const Main_Title =  '';
  const startRowFrom = '';
  const adjustedStartRowFrom = '';
  const queryString = `${News_Category_ID},${news_parent_category_id},${unit_ID},${Start_Date},${End_Date},${news_id},${Unit_Type_Id},${year},${month},${Main_Title},${adjustedStartRowFrom},${startRowFrom}`;
  this.ds.postapi(`news/getNewsDetail/${queryString}`,null).subscribe((result:any)=>{
    if(result && result.newsData && result.newsData.length > 0){
      this.top_news=result.newsData;
    }else{
      this.top_news=[];
    }
  },(error)=>{
    console.error('Error fetching news by sub category', error);
  })
}
}
