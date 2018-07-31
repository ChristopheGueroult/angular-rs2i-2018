import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
