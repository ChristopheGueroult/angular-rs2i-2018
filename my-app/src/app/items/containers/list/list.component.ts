import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends AbstractComponent implements OnInit {
  constructor(
    collectionService: CollectionService
  ) {
    super(collectionService);
    super.ngOnInit();
  }

  ngOnInit() {
    console.log('surcharge ngOnInit de class mère');
  }

}
