import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-farming',
  standalone: false,
  templateUrl: './farming.component.html',
  styleUrls: ['./farming.component.scss']
})
export class FarmingComponent {

  Farm_id:any;
  farming_Data: any;
  heading: any;
  bannerImg:string=environment.PhotoUrl + '';
  pultry_Img:string=environment.PhotoUrl +'Farm-Poultry-banner.jpg';
  beeKeepingImg:string=environment.PhotoUrl + 'bee_keeping_banner.png';
  selectedProduct:any =  null;
  productList: any;
  errorImage:string=environment.PhotoUrl +'no_preview_image.png';

  constructor(private ds:DataService,private activateroute: ActivatedRoute){}

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((result) => {
      this.Farm_id = result.get('id');
      this.getdata();
      this.getProductdata();
      
  if(this.Farm_id==1)
  {
    this.bannerImg= this.pultry_Img;
  }
  else if(this.Farm_id==2){
    this.bannerImg=this.beeKeepingImg;
  }

  else{
    this.bannerImg=environment.PhotoUrl + 'academic-DI-banner.jpg';
  }
}) 
}

 getdata() {
  const product_id = ',';
  this.ds.postapi(`getFarm/${this.Farm_id},${product_id}`, null).subscribe((result: any) => {
      this.productList = result;
      this.heading = result[0].Farm_Name;
    });
}

getProductdata() {
  const product_id = this.selectedProduct  || '';
  this.ds.postapi(`getFarm/${this.Farm_id},${product_id}`, null).subscribe((result: any) => {
      this.farming_Data = result;
    });
}

refreshPage(){
window.location.reload()
}
onErrorImage(event:any){
event.target.src = this.errorImage
}
}