import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'stripHtml',
  standalone: false
})
export class StripHtmlPipe implements PipeTransform {
  transform(value: string): string {
    return value?.replace(/<[^>]*>/g, '') || ''; 
  }

}
