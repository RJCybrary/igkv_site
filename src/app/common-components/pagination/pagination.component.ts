import { Component, EventEmitter, Input, Output ,ViewChild,SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent,MatPaginator } from '@angular/material/paginator';
import {Router,NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() currentPages: number = 1; // Input for current page
  @Input() totalrecords!: number; 
  previousPageIndex: number = 0;
  @Output() rowsPerPageChanged = new EventEmitter<number>(); // emit for rows per page
  @Output() searchCriteria = new EventEmitter<any>(); // Emit search criteria 
  @Output() pageChanged = new EventEmitter<number>(); // Event emitter to notify parent of page change
  currentUrl!:string;
  searchForm: FormGroup;

  constructor(private fb: FormBuilder,private route:Router) {
  
    this.searchForm = this.fb.group({
      Content_Title: ['']
    });
  }

 

ngOnChanges(changes: SimpleChanges): void {
            if (changes['totalrecords'] && !changes['totalrecords'].firstChange) {
              this.paginator.pageIndex = 0;
            }
}

  onSearch(): void {
    const searchValues = this.searchForm.value.Content_Title;
    this.searchCriteria.emit(searchValues); // Emit search values
    // Reset paginator to the first page
    if (this.paginator) {
      this.paginator.pageIndex = 0;
    }
  }
  onClear(): void {
    this.searchForm.reset(); // Reset the form
    this.searchCriteria.emit({ Content_Title: '' }); // Emit empty search criteria
    this.pageChanged.emit(1); // Optionally reset to the first page
  }


  /* currently using */
  onPageChange(event: PageEvent): void {
    const newPageIndex = event.pageIndex;
    const selectedPageSize = event.pageSize;

    this.rowsPerPageChanged.emit(selectedPageSize);
    this.pageChanged.emit(newPageIndex + 1);

    // Execute scroll only when the page changes
    // if (newPageIndex !== this.previousPageIndex) {
    //   window.scrollTo({
    //     top: 100,
    //     behavior: 'instant',
    //   });
    // }

    this.previousPageIndex = newPageIndex; // Update the previous page index
  }
  
/* not using */
  changePage(direction: string): void {
    if (direction === 'next') {
      this.currentPages++;
    } else if (direction === 'previous' && this.currentPages > 1) {
      this.currentPages--;
    }
    this.pageChanged.emit(this.currentPages); // Emit the current page to the parent component
     // Scroll to the top of the page or a specific element
  window.scrollTo({
    top: 100, // Adjust this value if you want to scroll to a specific offset
    behavior: 'instant', // Smooth scrolling effect
  });
  }


}
