import { Component, OnInit, Input  } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-staff-testimonial',
  standalone: false,
  templateUrl: './staff-testimonial.component.html',
  styleUrls: ['./staff-testimonial.component.scss']
})
export class StaffTestimonialComponent implements OnInit {
  @Input() unit_type: any;
  Staff_List: any;
  Employee_List: any;
  isshowUnLink:boolean = false;
  errorImage: any=environment.PhotoUrl + 'Img_notFound.png';

  constructor(private ds: DataService,private activateroute:ActivatedRoute,private route:Router ) {}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result=>{
      const currentUrl = this.route.url;
      if(currentUrl.includes('/kvk-home/')){
        this.isshowUnLink = true;
      }
      if(currentUrl.includes('/college-home/')){
        this.isshowUnLink = true;
      }
      this.unit_type=result.get('id')
      this.getdata();
     })
  }

  getdata() {
    this.ds.postapi(`officeEmployeeList/${this.unit_type}`, null).subscribe((result: any) => {
      if(result){
        this.Staff_List = result.map((employee: any) => {
          const numericPart = employee.Emp_Id.match(/\d+/);
          return { ...employee, empid_numeric: numericPart ? numericPart[0] : null };
        });
      } else{
        this.Staff_List = []
      }
    },(error)=>{
      console.error('Error fetching employee details', error);
    });
  }
  
  onErrorImage(event: any) {
    event.target.src = this.errorImage;
  }

  getSliceIndices(length: number, chunkSize: number): number[] {
    const indices = [];
    for (let i = 0; i < length; i += chunkSize) {
      indices.push(i);
    }
    return indices;
  }

}


