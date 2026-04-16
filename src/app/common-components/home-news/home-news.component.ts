import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-news',
  standalone: false,
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss'],
})
export class HomeNewsComponent {
  Activity_data: any;


  constructor(private ds: DataService) {}
  ngOnInit(): void {
    this.getactivitydetails();
  }

  getactivitydetails() {
    const unit_id = 0;
    const section_id = '';
    const category_id = '';
    const emp_id = '';
    const Website_Content_ID = '';
    this.ds
      .postapi(
        `ActivityList/${unit_id},${category_id},${section_id},${emp_id},${Website_Content_ID}`,
        null
      )
      .subscribe((result: any) => {
        this.Activity_data = result;
      
      });
  }
}
