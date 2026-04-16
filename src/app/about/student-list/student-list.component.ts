import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{
  subject_id: any;
  office_id: any;
  parentId:any;
  dept_id:any;
  student_data: any;
constructor(private ds: DataService,private activateroute:ActivatedRoute){}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result=>{
      this.subject_id=result.get('id')
      
      this.activateroute.paramMap.subscribe((params: ParamMap) => {
        this.dept_id = params.get('id'); // Get the ID from the paramMap
    
        // If you want to access the ID from a nested route like '/gallery-list/5'
        this.parentId = params.get('id1'); // Assuming 'parent_id' is the parameter name
    });
    this. getEventdetails();
     })
    
  }


 

  getEventdetails() {
    // const office_id = '';
    const faculty_id = '';
    const degree_programme_id = '';
    const Degree_Programme_Type_Id = '';
    this.ds.postapi(`departmentApi/StudentList/${this.parentId},${faculty_id},${degree_programme_id},${Degree_Programme_Type_Id},${this.dept_id}`,null).subscribe((result: any) => {
        this.student_data = result.Response.StudentList
      });
  }


}
