import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({name: 'changeCustomPipe'})
export class CustomPipes implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer){

  }
  transform(value: number): SafeHtml{

    value = Number(value.toFixed(2));
    if(value < 0) {
      return this.sanitizer.bypassSecurityTrustHtml(`<span class="text-danger">${value}</span>`);
    } else if (value === 0) {
      return this.sanitizer.bypassSecurityTrustHtml(`<span>${value}</span>`);
    } else {
      return this.sanitizer.bypassSecurityTrustHtml(`<span class="text-success">${value}</span>`);
    }
  }
}
