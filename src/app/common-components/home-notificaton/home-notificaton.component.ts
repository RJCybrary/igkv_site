import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationEnd ,Router} from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-home-notificaton',
  standalone: false,
  templateUrl: './home-notificaton.component.html',
  styleUrls: ['./home-notificaton.component.scss'],
})
export class HomeNotificatonComponent implements OnInit {

  @Input() message!: string;
  @Input() isCollege!: boolean;
  @Input() isKvk!: boolean;
  currentUrl!:string;
  constructor(private laguage : LanguageService ,private ds: DataService,private activateroute: ActivatedRoute, public router: Router) {}

  newsCategory: any;
  top_news: any;
  top_news_bycategory: any;
  subNewsCategory: any;
  mainCategory: any;
  subCategory: any;
  unit_id:any;
  currentLanguage:any

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((result)=>{
      this.unit_id = result.get('id');
      if(this.unit_id == null || this.unit_id == ''){
        this.unit_id = 0; 
      }
      this.get_MainNews_category(this.unit_id);
      this.get_Top_news(this.unit_id);

      this.laguage.currentLanguage$.subscribe((language) => {
        this.currentLanguage = language;
      });


    })

    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.currentUrl = this.router.url;
    //     this.get_MainNews_category(this.unit_id);
    //     this.get_Top_news(this.unit_id);
    //   }
    // });
  }



  onSelectCategorysmall(event: any){
    const selectedNewsCategoryId = event.target.value;
    this.mainCategory = selectedNewsCategoryId;
    this.get_news_bymaincategory(selectedNewsCategoryId,this.unit_id);
    this.get_SubNews_category(selectedNewsCategoryId,this.unit_id);
  }

  /* get main news category */
  get_MainNews_category(id:any) {
    const News_Category_ID = 0;
    const office_id = id;
    this.ds
      .postapi(`news/TopNewsCategory/${News_Category_ID},${office_id}`, null)
      .subscribe((result: any) => {
        if(result){
          this.newsCategory = result;
        } else{
          this.newsCategory = [];
        }
      },(error)=>{
        console.error('Error fetching newscategory', error);
      });
  }

  /* get sub news category */
  get_SubNews_category(id1:any,id2:any) {
    this.ds
      .postapi(`news/TopNewsCategory/${id1},${id2}`, null)
      .subscribe((result: any) => {
        if(result){
          this.subNewsCategory = result;
        } else{
          this.subNewsCategory = [];
        }
      },(error)=>{
        console.error('Error fetching subnews category', error);
      });
  }

  /* latest news */
  get_Top_news(id:any) {
    const PageNumber = 1;
    const RowsPerPage =10;
    this.ds
      .postapi(`news/TopNewsTillToday/,,${id},${PageNumber},${RowsPerPage}`, null)
      .subscribe((result: any) => {
        if(result){
          this.top_news = result;
        } else{
          this.top_news = [];
        }
      },(error)=>{
        console.error('Error fetching top news', error);
      });
  }
  
  /* get news by main category */
  get_news_bymaincategory(id1: number,id2:number) {
    const PageNumber = 1;
    const RowsPerPage =10;
    this.ds
      .postapi(`news/TopNewsTillToday/${id1},,${id2},${PageNumber},${RowsPerPage}`, null)
      .subscribe((result: any) => {
        if(result){
          this.top_news = result;
        }else{
          this.top_news = [];
        }
      },(error)=>{
        console.error('Error fetching news by main category', error);
      });
  }

  /* get news by subcategory */
  get_news_bysubcategory(id1:number, id2 :number) {
    const PageNumber = 1;
    const RowsPerPage =10;
    this.ds
      .postapi(`news/TopNewsTillToday/${this.mainCategory},${id1},${id2},${PageNumber},${RowsPerPage}`, null)
      .subscribe((result: any) => {
        if(result){
          this.top_news = result;
        } else{
          this.top_news = [];
        }
      },(error)=>{
        console.error('Error fetching news by sub category', error);
      });
  }

  /* on selecting a main category */
  getNewsID(newsCategory_Id: number) {
    this.mainCategory = newsCategory_Id;
    this.get_news_bymaincategory(newsCategory_Id,this.unit_id);
    this.get_SubNews_category(newsCategory_Id,this.unit_id);
  }

  /* on selecting sub category */
  onSubNewsCategorySelected(event: any): void {
    const selectedValue = event.target.value;
    this.get_news_bysubcategory(selectedValue,this.unit_id);
  }

  routeToMainNews() {
    this.router.navigate(['/about/news']);
  }

  getMarqueeHeight() {
  const marqueeContent = document.querySelector('.marquee-content');
  if (marqueeContent) {
    const contentHeight = marqueeContent.clientHeight;
    return contentHeight > 300 ? '300px' : `${contentHeight}px`; // Assuming 300px is the fixed height
  }
  return '300px'; // Default height
}
  
}
