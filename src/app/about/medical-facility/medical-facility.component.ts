import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-medical-facility',
  standalone: false,
  templateUrl: './medical-facility.component.html',
  styleUrls: ['./medical-facility.component.scss']
})
export class MedicalFacilityComponent {
  constructor(private ds:DataService){}

  medicalUnit_data: any;
  medicalUnitOffice: any;
  unit_id = 5;


  ngOnInit(): void {
    this.getdata();
  }
  
  getdata(){
    this.ds.postapi('medicalUnit',null).subscribe((result:any)=>{
      this.medicalUnit_data = result.Response.OfficeHeadDetail[0];
      this.medicalUnitOffice = result.Response.OfficePageDetail[0];
    })
}

}
