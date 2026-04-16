import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-other-news',
  standalone: false,
  templateUrl: './other-news.component.html',
  styleUrls: ['./other-news.component.scss'],
})
export class OtherNewsComponent {
  overview: any;
  nepHead:any
  constructor(private ds: DataService, private activateroute: ActivatedRoute) {}
  totalrecords!: number;
  top_news: any;
  idFromMenu: any;
  bannerImg: String =
  environment.PhotoUrl + 'about-university-service-regulations-banner.jpg';
  banner_heading!: string;
  parent_id: number=3;
  currentPages: number = 1;
  @Input()rowsPerPage: number = 9;

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((result) => {
      this.idFromMenu = result.get('id');
      if (this.idFromMenu == 18) {
        this.getParticularNews(this.idFromMenu,this.parent_id, 0, '');
        this.banner_heading = 'Seniority List';
      }
      if (this.idFromMenu == 19) {
        this.getParticularNews(this.idFromMenu,this.parent_id, 0, '');
        this.banner_heading = 'University Service Regulation';
      }
      if (this.idFromMenu == 57) {
        this.getParticularNews(this.idFromMenu,this.parent_id, 0, '');
        this.banner_heading = 'MOUs';
      }
      if (this.idFromMenu == 53) {
        this.getParticularNews(this.idFromMenu,3, 0, '');
        this.banner_heading = 'Rules Ragulation';
      }
      if (this.idFromMenu == 70) {
        this.getParticularNews(this.idFromMenu,3, 0, '');
        this.banner_heading = 'New Education Policy 2020';
        this.nepHead = ' Implementation of NEP at IGKV'
        this.overview = '    Indira Gandhi Krishi Vishwavidyalaya (IGKV) is at the forefront of implementing the National Education Policy (NEP) 2020, integrating agricultural sciences with a multidisciplinary, research-driven framework. The university envisions flexible, learner-centric programs that combine agricultural, environmental, and technological domains. Students can design personalized academic pathways through major–minor combinations, interdisciplinary electives, and skill-enhancement modules, aligning with NEP’s holistic approach As of the latest report, IGKV has students on roll in the 2024–25 academic year.          In undergraduate programs. With this student body, IGKV is realigning the academic structure under NEP to offer major–minor combinations, interdisciplinary electives, and research tracks. The Academic Bank of Credits (ABC) is being introduced to facilitate credit transfer and flexible progression, permitting learners to exit early with certificates or diplomas and re-enter later. The university is also reorganizing faculty training and infrastructure to support technology-enabled classrooms, online assessments, and blended pedagogy. To ensure equitable access, IGKV provides special support systems, mentoring, and scholarships  especially for students from rural and marginalized backgrounds. The university’s extension programs, field internships, and community outreach continue to translate academic learning into tangible agricultural impact. By integrating its significant student population into a NEP-compliant structure in 2024–25, IGKV aims to emerge as a model agricultural institution that balances academic flexibility, rigorous research, and social relevance, preparing graduates to lead in a dynamic and sustainable agricultural ecosystem.'
      }
      if (this.idFromMenu == 34) {
        this.parent_id = 6
        this.getParticularNews(this.idFromMenu,this.parent_id, 0, '');
        this.banner_heading = 'Anti-Ragging';
      }
      if (this.idFromMenu == 69) {
        this.parent_id = 8
        this.getParticularNews(this.idFromMenu,this.parent_id, 0, '');
        this.banner_heading = 'IGKV Newsletter';
      }
      if (this.idFromMenu == 35) {
        this.parent_id = 52
        this.getParticularNews(this.idFromMenu,this.parent_id, 0, '');
        this.banner_heading = 'Placement Cell and its activities';
      }
      if (this.idFromMenu == 23) {
        this.parent_id = 5
        this.getParticularNews(this.idFromMenu,this.parent_id, 0, '');
        this.banner_heading = 'RTI';
      }
    });
  }

  getParticularNews(menuid: any,id:number, pageNumber: number, search_data: string) {
    const News_Category_ID = menuid;
    const news_parent_category_id = id;
    const unit_ID = '';
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
      },
      (error) => {
        console.error('Error fetching latest news', error);
      }
    );
  }

  onPageChanged(newPage: number): void {
    this.currentPages = newPage;
    this.getParticularNews(this.idFromMenu,this.parent_id, this.currentPages, '');
  }

  onSearchCriteriaReceived(searchCriteria: any): void {
    this.currentPages = 1;
    this.getParticularNews(this.idFromMenu,this.parent_id, this.currentPages, searchCriteria);
  }

  onRowsPerPageChanged(newRowsPerPage: number): void {
    this.rowsPerPage = newRowsPerPage;
  }
}