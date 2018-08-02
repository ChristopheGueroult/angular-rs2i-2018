import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) { }

  public convertDateToIso(item: Item): string {
    return new Date(item.deliveryDate).toISOString();
  }

  public dateToIso(arg: any): string {
    arg = new Date(this.ngbDateParserFormatter.format(arg));
    return arg.toISOString();
  }
}
