import { Component,Input,OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-message',
  standalone: false,
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() headDetail_data: any=0;
  @Input() pageDetail_data: any=0;
  @Input() message!: string;
  @Input() isError!: boolean;
  @Input() isSuccess!: boolean;


  constructor(private ds: DataService,private activateroute:ActivatedRoute ) {}

  office_id:any
  OnErrorImage:String=environment.PhotoUrl + 'Img_notFound.png';

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(result=>{
     })
  }

  errorHandler(event: any): void {
    event.target.src = this.OnErrorImage;
  }


}