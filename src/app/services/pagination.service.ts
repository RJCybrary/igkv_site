import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  /**
   * Paginates the given data.
   */
  paginate(data: any[], pageIndex: number, pageSize: number): any[] {
    const startIndex = pageIndex * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }

  /**
   * Gets the total number of pages.
   */
  getTotalPages(dataLength: number, pageSize: number): number {
    return Math.ceil(dataLength / pageSize);
  }
}