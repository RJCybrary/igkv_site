import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter-news',
  standalone: false,
  templateUrl: './search-filter-news.component.html',
  styleUrls: ['./search-filter-news.component.scss']
})
export class SearchFilterNewsComponent {
  @Input() years: string[] = []; // List of years for the dropdown
  @Input() month: string[] = []; // List of months for the dropdown
  @Input() newsData: any[] = []; // Full activity data for filtering

  @Output() filteredResults = new EventEmitter<any[]>(); // Emit filtered results
  @Output() clearFiltersEvent = new EventEmitter<void>(); // Emit event when filters are cleared

  searchText: string = ''; // Local search input
  selectedYear: string = ''; // Selected year
  selectedMonth: string = ''; // Selected month

  /**
   * Apply filters based on searchText, selectedYear, and selectedMonth.
   */
  applyFilters(): void {
    let filteredData = this.newsData;

    // If no filters are applied, emit the original data
    if (!this.searchText && !this.selectedYear && !this.selectedMonth) {
      this.filteredResults.emit(this.newsData);
      return;
    }

    // Apply year filter
    if (this.selectedYear) {
      filteredData = filteredData.filter((item) =>
        new Date(item.News_Date).getFullYear().toString() === this.selectedYear
      );
    }

    if (this.selectedMonth) {
      filteredData = filteredData.filter((item) =>
        new Date(item.News_Date).toLocaleString('default', { month: 'long' }) === this.selectedMonth
      );
    }
    
    // Apply search text filter
    if (this.searchText) {
      const searchTerm = this.searchText.toLowerCase();
      filteredData = filteredData.filter((item) =>
        item.Main_Title.toLowerCase().includes(searchTerm) ||
        item.attachment.some((attachmentItem:any) =>
          attachmentItem.Sub_Title.toLowerCase().includes(searchTerm)
        )
      );
    }
    
    // Emit the filtered results
    this.filteredResults.emit(filteredData);
  }

  /**
   * Emit the search term and apply filters.
   */
  onSearch(): void {
    this.applyFilters();
  }

  /**
   * Emit the selected filters and apply them.
   */
  onFilterChange(): void {
    this.applyFilters();
  }

  /**
   * Clear all filters, reset pagination, and emit all data.
   */
  clearFilters(): void {
    this.searchText = '';
    this.selectedYear = '';
    this.selectedMonth = '';
    this.onSearch();
    this.onFilterChange();

    // Emit an event to clear pagination in parent component
    this.clearFiltersEvent.emit();
  }
  
}
