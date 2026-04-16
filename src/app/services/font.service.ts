import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontService {

  private scaleFactor = 1; // Default scale

  constructor() {}

  increaseFontSize() {
    this.scaleFactor += 0.1; // Increase scale by 10%
    this.applyFontSize();
  }

  decreaseFontSize() {
    if (this.scaleFactor > 0.7) { // Prevent too small font
      this.scaleFactor -= 0.1; // Decrease scale by 10%
      this.applyFontSize();
    }
  }

  resetFontSize() {
    this.scaleFactor = 1; // Reset to normal size
    this.applyFontSize();
  }

  private applyFontSize() {
    document.documentElement.style.setProperty('--font-scale', `${this.scaleFactor}`);
  }
}
