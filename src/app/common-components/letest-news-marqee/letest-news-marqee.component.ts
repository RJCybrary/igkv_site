import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-letest-news-marqee',
  standalone: false,
  templateUrl: './letest-news-marqee.component.html',
  styleUrls: ['./letest-news-marqee.component.scss']
})
export class LetestNewsMarqeeComponent implements AfterViewInit {
  @ViewChild('newsTicker') newsTicker!: ElementRef;
  @ViewChild('newsTickerContainer') newsTickerContainer!: ElementRef;

  top_news: any;
  unit_id:number =0;
  private scrollSpeed: number = 1; // You can adjust this to control the speed
  private tickerPosition: number = 0;
  private isScrolling: boolean = true;
  currentLanguage : any

  constructor(private ds: DataService, private laguage : LanguageService) {}

  ngOnInit(): void {
    this.get_Top_news(); // Fetch news

    this.laguage.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
      // this.loadContent(); // Optional: Reload content if needed
    });
  }

  ngAfterViewInit(): void {
    this.startScrolling(); // Start the manual scrolling animation
    this.setupHoverListeners(); // Set up hover listeners
  }

  // Fetch the top news
  get_Top_news() {
    const unit_id = 0
    const PageNumber = 1;
    const RowsPerPage =10;
    this.ds.postapi(`news/TopNewsTillToday/,,${unit_id},${PageNumber},${RowsPerPage}`, null).subscribe((result: any) => {
      if(result  ){
        this.top_news = result;
      } else{
        this.top_news = [];
      }
    },(error)=>{
      console.error('Error fetching news', error);
    });
  }

  startScrolling() {
    const ticker = this.newsTicker.nativeElement;
    const tickerContainer = this.newsTickerContainer.nativeElement;

    this.tickerPosition = tickerContainer.clientWidth;

    const scroll = () => {
      if (this.isScrolling) {
        this.tickerPosition -= this.scrollSpeed;
        if (this.tickerPosition < -ticker.scrollWidth) {
          this.tickerPosition = tickerContainer.clientWidth;
        }
        ticker.style.transform = `translateX(${this.tickerPosition}px)`;
      }
      requestAnimationFrame(scroll); // Use requestAnimationFrame for smooth animation
    };

    scroll();
  }

  setupHoverListeners() {
    const tickerContainer = this.newsTickerContainer.nativeElement;
    
    tickerContainer.addEventListener('mouseenter', () => {
      this.isScrolling = false; // Pause scrolling on hover
    });

    tickerContainer.addEventListener('mouseleave', () => {
      this.isScrolling = true; // Resume scrolling on mouse leave
    });
  }
}
