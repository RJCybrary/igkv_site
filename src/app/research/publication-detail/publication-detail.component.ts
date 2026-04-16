import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-publication-detail',
  standalone: false,
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.scss']
})
export class PublicationDetailComponent {

  publicationType: any;
  publicationList_Data: any;

  constructor(private ds:DataService,private activateroute:ActivatedRoute){}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result=>{
      this.publicationType=result.get('id')
      this. getdata();
     })
  }

  getdata(){
    this.ds.postapi(`publications/publicationsData/${this.publicationType}`,null).subscribe((result:any)=>{
      this.publicationList_Data = result.Response.publicationList;
    })
  }


}
