import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-infrastructure-common',
  standalone: false,
  templateUrl: './infrastructure-common.component.html',
  styleUrls: ['./infrastructure-common.component.scss']
})
export class InfrastructureCommonComponent {
  @Input() infrastructureList: Array<{ institutionSetup: any }> = []; // Define a type for the list
  @Input() office_id: string | number | null = null; // Define the type for office_id

  errorImage: string = environment.PhotoUrl + 'no_image_available_1.jpg';

  constructor() {}

  ngOnInit() {}

  OnErrorImage(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = this.errorImage;
  }
}
