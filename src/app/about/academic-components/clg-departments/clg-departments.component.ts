import {
  Component,
  Input,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clg-departments',
  standalone: false,
  templateUrl: './clg-departments.component.html',
  styleUrls: ['./clg-departments.component.scss'],
})
export class ClgDepartmentsComponent {
  @ViewChildren('button') buttons!: QueryList<any>;

  constructor(private ds: DataService) {}
  @Input() departmentlist: any;
  @Input() message: string = '';
  @Input() isCollege!: boolean;
  @Input() isOther!: boolean;
  selectedDepartmentIndex: any;
  departmentdetails: any;
  errorImage: any = environment.PhotoUrl + 'Img_notFound.png';

  ngAfterViewInit(): void {
    const firstButton = this.buttons.first;
    if (firstButton) {
      // Save the current scroll position
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      // Focus the button
      firstButton.nativeElement.focus();

      // Restore the scroll position
      window.scrollTo(scrollX, scrollY);
    }
  }

  onErrorImage(event: any) {
    event.target.src = this.errorImage;
  }

  ngOnInit(): void {
    this.getSubjectId(0);
  }

  getSubjectId(index: number) {
    this.departmentdetails = this.departmentlist[index];

    // this.sanitizeDepartmentName(this.departmentdetails.DepartmentName);
  }

  onSelectCategorysmall(event: any) {
    const selectedValue = event.target.value;

    this.departmentdetails = this.departmentlist[selectedValue];
  }
}
