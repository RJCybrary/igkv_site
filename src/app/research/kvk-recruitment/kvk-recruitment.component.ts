import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-kvk-recruitment',
  standalone: false,
  templateUrl: './kvk-recruitment.component.html',
  styleUrls: ['./kvk-recruitment.component.scss'],
})
export class KvkRecruitmentComponent {
  constructor(private ds: DataService, private activateroute: ActivatedRoute) {}
  totalrecords!: number;
  top_news: any;
  unit_id: any;
  banner_heading!: string;
  currentPages: number = 1;
  @Input()rowsPerPage: number = 20;

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((result) => {
      this.unit_id = result.get('id');
      this.getParticularNews(this.unit_id, 0, '');
      this.banner_heading = 'Recruitment';
    });
  }

  getParticularNews(id: any, pageNumber: number, search_data: string) {
    const News_Category_ID = '';
    const news_parent_category_id = 2;
    const unit_ID = id;
    const Start_Date = '';
    const End_Date = '';
    const news_id = '';
    const Unit_Type_Id = '';
    const year = '';
    const month = '';
    const Main_Title = search_data || '';
    const startRowFrom = (pageNumber - 1) * this.rowsPerPage;
    const adjustedStartRowFrom = Math.max(0, startRowFrom);
    const queryString = `${News_Category_ID},${news_parent_category_id},${unit_ID},${Start_Date},${End_Date},${news_id},${Unit_Type_Id},${year},${month},${Main_Title},${adjustedStartRowFrom},${this.rowsPerPage}`;
    this.ds.postapi(`news/getNewsDetail/${queryString}`, null).subscribe(
      (result: any) => {
        if (result) {
          this.totalrecords = result.totalNews;
          this.top_news = result.newsData;
        } else {
          this.top_news = [];
        }

        console.warn(this.totalrecords);
        
      },
      (error) => {
        console.error('Error fetching latest news', error);
      }
    );
  }

  onPageChanged(newPage: number): void {
    this.currentPages = newPage;
    this.getParticularNews(this.unit_id, this.currentPages, '');
  }

  onSearchCriteriaReceived(searchCriteria: any): void {
    this.currentPages = 1;
    this.getParticularNews(this.unit_id, this.currentPages, searchCriteria);
  }

  onRowsPerPageChanged(newRowsPerPage: number): void {
    this.rowsPerPage = newRowsPerPage;
  }
}
