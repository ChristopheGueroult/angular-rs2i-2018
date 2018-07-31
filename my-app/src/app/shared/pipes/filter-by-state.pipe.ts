import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../enums/state.enum';

@Pipe({
  name: 'filterByState'
})
export class FilterByStatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args) {
      return value.filter(item => item.state === State.LIVREE);
    }
    return value.filter(item => item.state !== State.LIVREE);
  }

}
