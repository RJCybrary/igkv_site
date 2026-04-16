

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-who-is-who-list',
  standalone: false,
  templateUrl: './who-is-who-list.component.html',
  styleUrls: ['./who-is-who-list.component.scss']
})
export class WhoIsWhoListComponent {
  workExperience_Data: any;
  workResponsibility_Data: any;
  emp_Responsibility: any = [];
  emp_WorkExperience: any = [];
  emp_Qualifications: any;
  loading: boolean = true;

  governorImage:any=environment.PhotoUrl + 'about-chancellor-image.jpg';
  errorImage: any=environment.PhotoUrl + 'Img_notFound.png';



  constructor(private ds: DataService, private activateroute: ActivatedRoute, private router: Router) {}

  Post_Level: any;
  Employee_List: any;
  Employee_List1:any;

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result => {
      this.Post_Level = result.get('id');
      this.getdata();
    });
  }

  getdata() {
    this.ds.postapi(`WhoisWhosPostList/details/${this.Post_Level}`, null).subscribe((result: any) => {
     if(result){
       this.Employee_List = result;
       this.fetchEmployeeData();
     }
     else{
      this.Employee_List = [];
     }
      this.loading = false;
    },(error)=>{
      console.error('Error fetching who is who post list data', error);
    });
  }

  fetchEmployeeData() {
    let i = 0;
    this.Employee_List.forEach((content: any) => {
      const emp_id = content.Emp_Id;
      if (emp_id) {
        this.getbasicdetail(emp_id,i);
        i++;
      }
    });
  }
 
  routetoprofile(emp_id: any) {
    this.router.navigate(['about/employeeProfile', emp_id]);
  }

  onErrorImage(event: any) {
    event.target.src = this.errorImage;
  }

  getbasicdetail(emp_id: any,index:number){
    const designation = '';
    const office = '';
    const StartRowFrom ='';
    const TotalRow  =  '';
  
    this.ds.postapi(`allStaffDetails/getEmployeeDetails/${emp_id},${designation},${office},${StartRowFrom},${TotalRow}`,null).subscribe((result:any)=>{
      if(result && result.additionalResponsibilities && result.additionalResponsibilities.length > 0 && result.employeeWorkExperience && result.employeeWorkExperience.length > 0){
        this.emp_Responsibility[index] = result.additionalResponsibilities; 
        this.emp_WorkExperience[index] = result.employeeWorkExperience;
        this.loading = false;
      } else{
        this.emp_Responsibility[index] = []; 
        this.emp_WorkExperience[index] = [];
      }
    },(error)=>{
      console.error('Error fetching employee', error);
    })
  }

 

}
