import { Component, QueryList, ViewChildren,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';
import { MatExpansionPanel } from '@angular/material/expansion';



@Component({
  selector: 'app-main-notification',
  standalone: false,
  templateUrl: './main-notification.component.html',
  styleUrls: ['./main-notification.component.scss']
})
export class MainNotificationComponent {
  @ViewChildren('panel') panels!: QueryList<MatExpansionPanel>;



constructor(private ds:DataService,private activateroute:ActivatedRoute,private route:Router){

}
  
newsCategory:any;
subNewsCategory:any;
selectedSubCategoryId: any = null; // Holds the selected subcategory ID
selectedSubMonthId: any = null; // Holds the selected subcategory ID
top_news:any;
mainCategory!:number
unit_id!:string;
news_title:string = "Latest"
News_Category_ID!:string;
news_sub_category_id!:string;
News_Notification_Main_Id!:string;
readmore:boolean=false;
expandedCategoryId!:string;
bannerImg:String=environment.PhotoUrl + 'about-university-service-regulations-banner.jpg';

totalrecords!: number;
currentPages: number = 1;  
@Input()rowsPerPage: number = 10; 

yearData:any;
newsYear!:number;
selecttedMonthsName!:string;
mainNewsCategoryName!:string;
subNewsCategoryName!:string;
searchData!:string;
currentUrl!:string;
shownbanner = false;
isLoading: boolean = false;
officeName!:string;


ngOnInit(): void {
  this.activateroute.paramMap.subscribe(result=>{
    this.unit_id=result.get('id1') ?? '';
    this.News_Category_ID=result.get('id2') ?? '';
    this.news_sub_category_id=result.get('id3') ?? '';
    this.News_Notification_Main_Id=result.get('id4') ?? '';
    this.currentUrl = this.route.url;
    if (this.currentUrl.includes('/about/news')) {
      this.shownbanner = true;
    }
    if(this.News_Notification_Main_Id === '' ){
      this.get_LatestNews(this.unit_id,0,'');
    }

    if(this.unit_id === '100'){
      this.officeName = 'Directorate of Research Services'
    }else if(this.unit_id === '101'){
      this.officeName = 'Directorate of Extension Services'
    }else if(this.unit_id === '111'){
      this.officeName = 'Directorate of Instructions'
    }else if(this.unit_id === '112'){
      this.officeName = 'Directorate of Farms'
    }else if(this.unit_id === '57'){
      this.officeName = 'Dean Students Welfare'
    }
    this.get_MainNews_category(this.unit_id);
  
    // this.isReadMoreOpen = this.top_news.map(() => false);
   })
}

onlatest(){
  this.currentPages = 1;
  this.get_LatestNews(this.unit_id,0,'');
  this.news_title = 'Latest';
}


/* get main news category */
P_attach:any;
get_Previous_News_Attachment(id:number){
  const news_id = id;
    
  this.ds.postapi(`news/getPAttach/${news_id}`,null).subscribe((result:any)=>{
    if(result){
      this.P_attach=result;
    }else{
      this.P_attach=[];
    }
  },(error)=>{
    console.error('Error fetching main news category', error);
  })
}

/* get main news category */
get_MainNews_category(id:string){
  const News_Category_ID = 0;
    const office_id = id;
    
  this.ds.postapi(`news/TopNewsCategory/${News_Category_ID},${office_id}`,null).subscribe((result:any)=>{
    if(result){
      this.newsCategory=result;
      if(this.News_Notification_Main_Id !== ''){
        this.expandedCategoryId = this.News_Category_ID;
      }
    }else{
      this.newsCategory=[];
    }
  },(error)=>{
    console.error('Error fetching main news category', error);
  })
}

/* get sub news category */
get_SubNews_category(id1:string,id2:string){
  
  this.ds.postapi(`news/TopNewsCategory/${id1},${id2}`,null).subscribe((result:any)=>{
    if(result){
      this.subNewsCategory=result;
      if(this.news_sub_category_id !== ''){
        this.selectedSubCategoryId = this.news_sub_category_id
      }
    }else{
      this.subNewsCategory=[];
    }
  },(error)=>{
    console.error('Error fetching subnews category', error);
  })
}



/* on opening panel */
onPanelOpened(newsCategoryId:any){
  this.currentPages = 1;
  this.subNewsCategory = [];
  this.mainCategory=newsCategoryId;
  this.get_SubNews_category(newsCategoryId,this.unit_id);
  this.get_News_BymainCategory(newsCategoryId,this.unit_id,0,'');
}

onYearPanelOpened(newsYear:number){
this.currentPages = 1;
this.newsYear = newsYear;
this.selectedSubMonthId = null;
this.get_News_ByYear(newsYear,this.unit_id,0,'');
}

/* on selecting sub id */
onSubIdClicked(selectedId:any){
  this.currentPages = 1;
  this.get_News_BysubCategory(selectedId,this.unit_id,0,'');
  this.selectedSubCategoryId = selectedId;
}

/* on selecting month id */
onMonthIdClicked(selectedYear:number,selectedMonth:number,selecttedMonthsName:string){
  this.currentPages = 1;
  this.selecttedMonthsName = selecttedMonthsName;
  this.get_News_ByMonth(selectedYear,selectedMonth,this.unit_id,selecttedMonthsName,0,'');
  this.selectedSubMonthId = selectedMonth;
}


/* latest News */
get_LatestNews(id:string,pageNumber: number,search_data:string){
  this.isLoading = true;
  this.news_title = 'Latest'
  const News_Category_ID = '';
  const news_parent_category_id = '';
  const unit_ID = id;
  const Start_Date = '';
  const End_Date = '';
  const news_id = '';
  const Unit_Type_Id = '';
  const year = '';
  const month = '';
  const Main_Title = search_data || '';;
  const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
  const adjustedStartRowFrom = Math.max(0, startRowFrom);
  const queryString = `${News_Category_ID},${news_parent_category_id},${unit_ID},${Start_Date},${End_Date},${news_id},${Unit_Type_Id},${year},${month},${Main_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;
  this.selectedSubCategoryId = '';
  this.mainCategory = 0;
  this.subNewsCategoryName = '';
  this.ds.postapi(`news/getNewsDetail/${queryString}`,null).subscribe((result:any)=>{
    if(result && result.newsData && result.newsData.length > 0){
      this.totalrecords = result.totalNews;
      this.top_news=result.newsData;
      this.yearData = result.yearData;
      this.isLoading = false;
    }else{
      this.top_news=[];
      this.isLoading = false;    
    }
  },(error)=>{
    console.error('Error fetching latest news', error);
  })
}

/* News by main category */
get_News_BymainCategory(maincategory:any, id:string,pageNumber: number,search_data:string){
  this.isLoading = true;
  const News_Category_ID = '';
  const news_parent_category_id = maincategory || '';
  const unit_ID = id;
  const Start_Date = '';
  const End_Date = '';
  const news_id = '';
  const Unit_Type_Id = '';
  const year = '';
  const month = '';
  const Main_Title = search_data || '';;
  const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
  const adjustedStartRowFrom = Math.max(0, startRowFrom);
  const queryString = `${News_Category_ID},${news_parent_category_id},${unit_ID},${Start_Date},${End_Date},${news_id},${Unit_Type_Id},${year},${month},${Main_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;
  
  this.selectedSubCategoryId = '';
  this.subNewsCategoryName = '';
  this.ds.postapi(`news/getNewsDetail/${queryString}`,null).subscribe((result:any)=>{
    if(result && result.newsData && result.newsData.length > 0){
      this.totalrecords = result.totalNews;
      this.top_news=result.newsData;
      this.yearData = result.yearData;
      this.news_title = this.top_news[0].News_Category_Name_E;
      this.mainNewsCategoryName = this.news_title;
      this.isLoading = false;
      
    }else{
      this.top_news=[];
      this.isLoading = false;
    }
  },(error)=>{
    console.error('Error fetching news by main category', error);
  })
}

/* News by sub category */
get_News_BysubCategory(subId:any,id:string,pageNumber: number,search_data:string){
  this.isLoading = true;
  this.newsYear = 0;
  this.selectedSubMonthId = 0;
  const News_Category_ID = subId ;
  const news_parent_category_id = this.mainCategory || '';
  const unit_ID = id;
  const Start_Date = '';
  const End_Date = '';
  const news_id = '';
  const Unit_Type_Id = '';
  const year = '';
  const month = '';
  const Main_Title = search_data || '';;
  const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
  const adjustedStartRowFrom = Math.max(0, startRowFrom);
  const queryString = `${News_Category_ID},${news_parent_category_id},${unit_ID},${Start_Date},${End_Date},${news_id},${Unit_Type_Id},${year},${month},${Main_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;
  this.ds.postapi(`news/getNewsDetail/${queryString}`,null).subscribe((result:any)=>{
    if(result && result.newsData && result.newsData.length > 0){
      this.totalrecords = result.totalNews;
      this.top_news=result.newsData;
      this.news_title = this.top_news[0]?.news_sub_category_name;
      this.subNewsCategoryName = this.top_news[0]?.news_sub_category_name;
      this.yearData = result.yearData; 
      this.isLoading = false;
    }else{
      this.top_news=[];
      this.isLoading = false;
    }
  },(error)=>{
    console.error('Error fetching news by sub category', error);
  })
}

/* get news by year */
get_News_ByYear(yearvalue:number, id:string,pageNumber: number,search_data:string){
  this.isLoading = true;
  const News_Category_ID = '';
  const news_parent_category_id = this.mainCategory || '';
  const unit_ID = id;
  const Start_Date = '';
  const End_Date = '';
  const news_id = '';
  const Unit_Type_Id = '';
  const year = yearvalue;
  const month = '';
  const Main_Title = search_data || '';;
  const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
  const adjustedStartRowFrom = Math.max(0, startRowFrom);
  const queryString = `${News_Category_ID},${news_parent_category_id},${unit_ID},${Start_Date},${End_Date},${news_id},${Unit_Type_Id},${year},${month},${Main_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;
  this.selecttedMonthsName = '';
  this.ds.postapi(`news/getNewsDetail/${queryString}`,null).subscribe((result:any)=>{
    if(result && result.newsData && result.newsData.length > 0){
      this.totalrecords = result.totalNews;
      this.top_news=result.newsData;
      if (!this.mainCategory) {
        this.news_title = `${yearvalue}`;
      } else if (this.mainNewsCategoryName && this.newsYear && !this.subNewsCategoryName) {
        this.news_title = `${this.mainNewsCategoryName} > ${this.newsYear}`;
      } else if (this.mainNewsCategoryName && this.subNewsCategoryName && !this.selecttedMonthsName) {
        this.news_title = `${this.subNewsCategoryName} > ${this.newsYear}`;
      } 
      
      this.isLoading = false;
    }else{
      this.top_news=[];
      this.isLoading = false;
    }
  },(error)=>{
    console.error('Error fetching news by main category', error);
  })
}

get_News_ByMonth(yearvalue:number,monthvalue:number,id:string,monthname:String,pageNumber: number,search_data:string){
  this.isLoading = true;
  const News_Category_ID = this.selectedSubCategoryId || '';
  const news_parent_category_id = this.mainCategory || '';
  const unit_ID = id;
  const Start_Date = '';
  const End_Date = '';
  const news_id = '';
  const Unit_Type_Id = '';
  const year = yearvalue;
  const month = monthvalue;
  const Main_Title = search_data || '';;
  const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
  const adjustedStartRowFrom = Math.max(0, startRowFrom);
  const queryString = `${News_Category_ID},${news_parent_category_id},${unit_ID},${Start_Date},${End_Date},${news_id},${Unit_Type_Id},${year},${month},${Main_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;

  this.ds.postapi(`news/getNewsDetail/${queryString}`,null).subscribe((result:any)=>{
    if(result && result.newsData && result.newsData.length > 0){
      this.totalrecords = result.totalNews;
      this.top_news=result.newsData;
      if (!this.mainCategory && this.selecttedMonthsName) {
        this.news_title = `${yearvalue} > ${monthname}`;
      } else if (this.mainNewsCategoryName && this.subNewsCategoryName && this.newsYear && !this.selecttedMonthsName) {
        this.news_title = `${this.mainNewsCategoryName} > ${yearvalue}`;
      } else if (this.mainNewsCategoryName && !this.subNewsCategoryName && this.selecttedMonthsName) {
        this.news_title = `${this.mainNewsCategoryName} > ${yearvalue} > ${this.selecttedMonthsName}`;
      } else if (this.mainNewsCategoryName && this.subNewsCategoryName && this.selecttedMonthsName) {
        this.news_title = `${this.subNewsCategoryName} > ${yearvalue} > ${this.selecttedMonthsName}`;
      } else if (this.top_news && this.top_news[0] && this.top_news[0].news_sub_category_name) {
        this.news_title = `${this.top_news[0].news_sub_category_name} > ${monthname} > ${yearvalue}`;
      } else {
        this.news_title = `${yearvalue}`;
      }
      this.isLoading = false;
    }else{
      this.top_news=[];
      this.isLoading = false;
    }
  },(error)=>{
    console.error('Error fetching news by sub category', error);
  })
}


// Ensure to declare isReadMoreOpen array in your component
isReadMoreOpen: boolean[] = [];

// toggleReadMore(index: number) {
  
//   // Close all other open "Read More" content
//   this.isReadMoreOpen.fill(false);
//   // Toggle the clicked item's "Read More" content
//   this.isReadMoreOpen[index] = !this.isReadMoreOpen[index];
// }


toggleReadMore(index: number) {
  this.isReadMoreOpen[index] = !this.isReadMoreOpen[index];
}

onPageChanged(newPage: number): void {
  this.currentPages = newPage; 
  if (this.mainCategory && this.selectedSubCategoryId && this.newsYear && this.selectedSubMonthId) {
    this.get_News_ByMonth(this.newsYear, this.selectedSubMonthId, this.unit_id, this.selecttedMonthsName, this.currentPages, '');
  } else if (this.mainCategory && this.newsYear && this.selectedSubMonthId) {
    this.get_News_ByMonth(this.newsYear, this.selectedSubMonthId, this.unit_id, '', this.currentPages, '');
  } else if (this.newsYear && this.selectedSubMonthId) {
    this.get_News_ByMonth(this.newsYear, this.selectedSubMonthId, this.unit_id, '', this.currentPages, '');
  } else if (this.mainCategory && this.selectedSubCategoryId && this.newsYear) {
    this.get_News_ByYear(this.newsYear, this.unit_id, this.currentPages, '');
  } else if (this.newsYear) {
    this.get_News_ByYear(this.newsYear, this.unit_id, this.currentPages, '');
  } else if (this.mainCategory && this.selectedSubCategoryId) {
    this.get_News_BysubCategory(this.selectedSubCategoryId, this.unit_id, this.currentPages, '');
  } else if (this.mainCategory) {
    this.get_News_BymainCategory(this.mainCategory, this.unit_id, this.currentPages, '');
  } else if (this.searchData) {
    this.get_LatestNews(this.unit_id, this.currentPages, this.searchData);
  } else {
    this.get_LatestNews(this.unit_id, this.currentPages, '');
  }
  
  
  // if(!this.mainCategory){
  //   this.get_LatestNews(this.unit_id,this.currentPages,'');
  // }
 
}

onSearchCriteriaReceived(searchCriteria: any): void {
  this.currentPages = 1;
  
  this.get_LatestNews(this.unit_id,this.currentPages,searchCriteria);
  this.searchData = searchCriteria;
  this.news_title = 'Searched News'
  this.panels.forEach(panel => panel.close()); // Closes each panel
  this.expandedCategoryId = '0';
  this.selectedSubCategoryId = null;
  this.selectedSubMonthId = null;
  /*  if (this.mainCategory && this.selectedSubCategoryId && this.newsYear && this.selectedSubMonthId) {
    this.get_News_ByMonth(this.newsYear, this.selectedSubMonthId, this.unit_id, this.selecttedMonthsName, this.currentPages, searchCriteria);
  } else if (this.mainCategory && this.selectedSubCategoryId && this.newsYear) {
    this.get_News_ByYear(this.newsYear, this.unit_id, this.currentPages, searchCriteria);
  } else if (this.mainCategory && this.selectedSubCategoryId) {
    this.get_News_BysubCategory(this.selectedSubCategoryId, this.unit_id, this.currentPages, searchCriteria);
  } else if (this.mainCategory) {
    this.get_News_BymainCategory(this.mainCategory, this.unit_id, this.currentPages, searchCriteria);
  }
  if(!this.mainCategory){
    this.get_LatestNews(this.unit_id,this.currentPages,searchCriteria);
  } */
}

onRowsPerPageChanged(newRowsPerPage: number): void {
  this.rowsPerPage = newRowsPerPage;
}

}
