import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // private translations = new BehaviorSubject<{ [id: number]: string }>({});

  //  languageId: number = 1; // Default to English
  //  private apiUrl = 'http://localhost:3001/demo/api/homeDashboard/getLanguage';


  constructor(private http: HttpClient) { }


  setCatData(value1: string, value2: string, value3:string ,value4:string) {
    const data = {
      cattitle1: value1,
      cattitle2: value2,
      catId: value3,
      lastroute: value4
    };
    localStorage.setItem('catData', JSON.stringify(data));
  }
  

  getCatData() {
    const data = localStorage.getItem('catData');
    if (data) {
      const parsedData = JSON.parse(data);
      return {
        cattitle1: parsedData.cattitle1,
        cattitle2: parsedData.cattitle2,
        catId: parsedData.catId,
        lastroute: parsedData.lastroute
      };
    }
    return null; // Handle the case where data is not available
  }

//  loadTranslations(languageId: number) {
//     return this.http.get(`${this.apiUrl}/${languageId}`);
//   }

    // Set translations in the BehaviorSubject
    // setTranslations(data: any) {
    //   const translationMap: { [id: number]: string } = {};
    //   data.forEach((item: any) => {
    //     translationMap[item.Translation_ID] = item.Value;
    //   });
    //   this.translations.next(translationMap);
    // }

  //    // Change language dynamically
  // changeLanguage(languageId: number) {
  //   this.languageId = languageId;
  //   this.loadTranslations(languageId).subscribe((data) => {
  //     this.setTranslations(data);
  //   });
  // }

  //    // Get translation for a specific ID
  // getTranslation(translationId: number): string {
  //   const currentTranslations = this.translations.getValue();
  //   return currentTranslations[translationId] || `#${translationId}`;
  // }

  //   // Get all translations as an observable
  // getTranslations() {
  //   return this.translations.asObservable();
  // }

  
}
