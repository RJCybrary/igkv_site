import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  standalone: false,
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent {
  @Input() years: string[] = []; // List of years for the dropdown
  @Input() venues: string[] = []; // List of venues for the dropdown
  @Input() activityData: any[] = []; // Full activity data for filtering

  @Output() filteredResults = new EventEmitter<any[]>(); // Emit filtered results
  @Output() clearFiltersEvent = new EventEmitter<void>(); // Emit event when filters are cleared

  searchText: string = ''; // Local search input
  selectedYear: string = ''; // Selected year
  selectedVenue: string = ''; // Selected venue

  /**
   * Apply filters based on searchText, selectedYear, and selectedVenue.
   */
  applyFilters(): void {
    let filteredData = this.activityData;

    // If no filters are applied, emit the original data
    if (!this.searchText && !this.selectedYear && !this.selectedVenue) {
      this.filteredResults.emit(this.activityData);
      return;
    }

    // Apply year filter
    if (this.selectedYear) {
      filteredData = filteredData.filter((item) =>
        new Date(item.web_content_date2).getFullYear().toString() === this.selectedYear
      );
    }

    // Apply venue filter
    if (this.selectedVenue) {
      filteredData = filteredData.filter((item) => item.venue === this.selectedVenue);
    }

    // Apply search text filter
    if (this.searchText) {
      const searchTerm = this.searchText.toLowerCase();
      filteredData = filteredData.filter(
        (item) =>
          item.Content_Title.toLowerCase().includes(searchTerm) ||
          item.Content_Description.toLowerCase().includes(searchTerm)
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
    this.selectedVenue = '';

    this.onSearch();
    this.onFilterChange();

    // Emit an event to clear pagination in parent component
    this.clearFiltersEvent.emit();
  }
  
}
