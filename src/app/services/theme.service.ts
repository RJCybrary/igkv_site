import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
    this.resetFilters(); // Apply normal settings on load
  }

  setHighSaturation() {
    this.applyFilters(200, 100, 0); // Max saturation
  }

  setLowSaturation() {
    this.applyFilters(0, 100, 0); // Grayscale (No color)
  }

  setHighContrast() {
    this.applyFilters(100, 200, 0); // Max contrast
  }

  setInvertColors() {
    this.applyFilters(100, 100, 100); // Invert colors
  }

  resetFilters() {
    this.applyFilters(100, 100, 0); // Reset to normal
  }

  private applyFilters(saturation: number, contrast: number, invert: number) {
    document.documentElement.style.setProperty('--saturation', `${saturation}%`);
    document.documentElement.style.setProperty('--contrast', `${contrast}%`);
    document.documentElement.style.setProperty('--invert', `${invert}%`);
  }



}
