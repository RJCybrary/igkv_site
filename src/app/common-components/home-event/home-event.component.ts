import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CommonService } from 'src/app/services/common.service';



@Component({
  selector: 'app-home-event',
  standalone: false,
  templateUrl: './home-event.component.html',
  styleUrls: ['./home-event.component.scss']
})
export class HomeEventComponent {


  Event_data:any;

  constructor(private ds:DataService,private cms :CommonService){}
  ngOnInit(): void{
    this.getEventdetails();
  }

  getEventdetails(){
    const unit_id = 0;
    const section_id ='';
    const category_id=24;
    const emp_id ='';
    const Website_Content_ID = '';
    const PageNumber = 1
    const RowsPerPage = 5;
      this.ds.postapi(`ActivityList/${unit_id},${section_id},${category_id},${emp_id},${Website_Content_ID},${PageNumber},${RowsPerPage}`,null).subscribe((result:any)=>{
        if(result){
          this.Event_data=result;
        } else{
          this.Event_data=[];
        }
      },(error)=>{
        console.error('Error fetching activities', error);
      })
  
  }

  setdetails(){
    this.cms.setCatData('Our Events','Events','24','/about/activities/category/')
  }

  scrollToSlide(index: number) {
    // Scroll the carousel to the specified slide index
    const carousel = document.getElementById('carouselExampleCaptions1');
    if (carousel) {
      const carouselInner = carousel.querySelector('.carousel-inner');
      if (carouselInner) {
        const carouselItems = Array.from(carouselInner.children);
        carouselItems.forEach((item, i) => {
          if (i === index) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    }
  }
  
  
}
