import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
/**
 * Filters data based on a search term and additional filters.
 */
filterData(
  data: any[],
  searchTerm: string,
  fields: string[],
  additionalFilters: { [key: string]: any } = {},
  useFuzzySearch: boolean = false,
  maxDistance: number = 2
): any[] {
  // Early return if searchTerm is empty
  if (!searchTerm) {
    return data;
  }

  const search = searchTerm.toLowerCase();

  return data.filter((item) => {
    const matchesSearch = fields.some((field) => {
      const fieldValue = item[field]?.toLowerCase() || '';
      if (useFuzzySearch) {
        return this.fuzzySearch(fieldValue, search, maxDistance);
      }
      return fieldValue.includes(search);
    });

    const matchesAdditionalFilters = Object.keys(additionalFilters).every((key) => {
      if (!additionalFilters[key]) return true;
      return item[key]?.toString() === additionalFilters[key];
    });

    return matchesSearch && matchesAdditionalFilters;
  });
}

/**
 * Fuzzy search using Levenshtein distance.
 */
fuzzySearch(text: string, search: string, maxDistance: number = 2): boolean {
  return this.levenshteinDistance(text.toLowerCase(), search.toLowerCase()) <= maxDistance;
}

/**
 * Calculates the Levenshtein distance between two strings.
 */
private levenshteinDistance(a: string, b: string): number {
  const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));

  for (let i = 0; i <= a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      if (i === 0) {
        matrix[i][j] = j;
      } else if (j === 0) {
        matrix[i][j] = i;
      } else if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = 1 + Math.min(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]);
      }
    }
  }
  return matrix[a.length][b.length];
}


  /**
   * Filters the data based on selected year and venue.
   */
  applyFilters(data: any[], selectedYear: string, selectedVenue: string): any[] {
    return data.filter((activity: { web_content_date2: string; Venue: string }) => {
      const matchesYear = selectedYear
        ? new Date(activity.web_content_date2).getFullYear().toString() === selectedYear
        : true;
      const matchesVenue = selectedVenue ? activity.Venue === selectedVenue : true;
      return matchesYear && matchesVenue;
    });
  }

  /**
   * Generates unique years from the provided data's `web_content_date2`.
   */
  generateYears(data: any[]): string[] {
    const uniqueYears = new Set<string>();
    data.forEach((activity: { web_content_date2: string }) => {
      const year = new Date(activity.web_content_date2).getFullYear().toString();
      uniqueYears.add(year);
    });
    return Array.from(uniqueYears).sort((a, b) => parseInt(b) - parseInt(a)); // Sort descending
  }

  /**
   * Generates unique venues from the provided data's `Venue`.
   */
  generateVenues(data: any[]): string[] {
    const uniqueVenues = new Set<string>();
    data.forEach((activity: { Venue: string }) => {
      if (activity.Venue) uniqueVenues.add(activity.Venue);
    });
    return Array.from(uniqueVenues).sort(); // Sort alphabetically
  }
}
