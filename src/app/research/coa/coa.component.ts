import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-coa',
  standalone: false,
  templateUrl: './coa.component.html',
  styleUrls: ['./coa.component.scss']
})
export class COAComponent {
  constructor(private ds: DataService, private activateroute: ActivatedRoute) { }
  Office_Head_Data: any;
  Office_Page_Data: any;
  imageUrl: string = environment.PhotoUrl + '	about-BaordOfMgmnt-banner.jpg';
  non_timber: string = '';
  protective_cultivation = environment.PhotoUrl + 'research-Protective-Cultivation-banner.jpg';
  agro_industrial_biotechnology = environment.PhotoUrl + 'research-AgroIndustrial-Biotechnology-banner.jpg';
  PC_PolyhouseImg: string = environment.PhotoUrl + 'research-ProtectiveCultivation-Facilities-Polyhouse.jpg';
  PC_nethouseImg: string = environment.PhotoUrl + '	research-ProtectiveCultivation-Facilities-nethouse.jpg';
  PC_NurseryImg: string = environment.PhotoUrl + 'research-ProtectiveCultivation-Facilities-NurseryArea.jpg';
  PC_HeadStockAutomationImg: string = environment.PhotoUrl + 'research-Protective-Cultivation-Facilities-Head_Stock_Automation_Unit.jpg';
  PC_WaterHarvesting: string = environment.PhotoUrl + 'research-ProtectiveCultivation-Facilities-Water-Harvesting-Reservoir.jpg';

  PC_Gallery1: string = environment.PhotoUrl + 'research-ProtectiveCultivation-Gallery-1.jpg';
  PC_Gallery2: string = environment.PhotoUrl + 'research-ProtectiveCultivation-Gallery-2.jpg';
  PC_Gallery3: string = environment.PhotoUrl + 'research-ProtectiveCultivation-Gallery-3.jpg';
  PC_Gallery4: string = environment.PhotoUrl + 'research-ProtectiveCultivation-Gallery-4.jpg';
  PC_Gallery5: string = environment.PhotoUrl + 'research-ProtectiveCultivation-Gallery-5.jpg';
  PC_Gallery6: string = environment.PhotoUrl + 'research-ProtectiveCultivation-Gallery-6.jpg';


  Office_id: any;


  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result => {
      this.Office_id = result.get('id')
      // this.getdata();
      if (this.Office_id == 1010) {
        this.imageUrl = this.protective_cultivation;
      }
      else if (this.Office_id == 1009) {
        this.imageUrl = this.agro_industrial_biotechnology;
      }
      else if (this.Office_id == 1012) {
        this.imageUrl = this.non_timber;
      }
      else {
        this.imageUrl = environment.PhotoUrl + '	about-BaordOfMgmnt-banner.jpg';
      }
      this.getCOEdata();

    })

  }

  getdata() {
    this.ds.postapi(`OfficeDetails/${this.Office_id}`, null).subscribe((result: any) => {
      this.Office_Head_Data = result.Office_Head_Data[0];
      this.Office_Page_Data = result.Office_Page_Data[0];
    })
  }

  getCOEdata() {
    this.ds
      .postapi(`OfficeDetails/${this.Office_id}`, null)
      .subscribe((result: any) => {
        this.Office_Head_Data = result.Office_Head_Data[0];
        this.Office_Page_Data = result.Office_Page_Data[0];
      });
  }






}