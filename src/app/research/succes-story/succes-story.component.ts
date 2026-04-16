import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-succes-story',
  standalone: false,
  templateUrl: './succes-story.component.html',
  styleUrls: ['./succes-story.component.scss']
})
export class SuccesStoryComponent {


  farmer_Data: any[] = []; // Use `any[]` for simplicity
  filteredFarmers: any[] = []; // Use `any[]` for simplicity
  searchControl = new FormControl('');
  farmerlist: any;
  selectedKissan: any | null = null;
  farmerData: any;
  
  constructor(private ds : DataService){}

  title = 'Success Stories of Farmers'
  banner_img =environment.PhotoUrl + 'research-variety-releases-banner.jpg';
  ImgNotFound:String=environment.PhotoUrl + 'Img_notFound.png';


  ngOnInit(){
  this.getdata();
  this.getAllSuccessStory()
  
  this.searchControl.valueChanges.subscribe(searchTerm => {
    const term = searchTerm ?? ''; // Default to an empty string if searchTerm is null
    this.filteredFarmers = this.filterFarmers(term);
  });
  }

  getdata() {
    this.ds.postapi(`getFarm/getFarmerSuccessStory/,`, null).subscribe((result: any) => {
        this.farmer_Data = result; 
        this.farmer_Data = result; // No typecasting needed

      });
  }

 // Fetch the farmer data from the API
 getAllSuccessStory() {
  const farmer_story_id = this.selectedKissan || ',';
  this.ds.postapi(`getFarm/getFarmerSuccessStory/${farmer_story_id}`, null).subscribe((result: any) => {
    this.farmerData = result; 
  });
}


filterFarmers(searchTerm: string): any[] {
  if (!searchTerm) {
    return this.farmer_Data;
  }
  return this.farmer_Data.filter(farmer =>
    farmer.Full_Name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

refreshPage() {
  window.location.reload();
}

}
