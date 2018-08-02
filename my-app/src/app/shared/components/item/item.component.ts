import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection.service';

import { faPenSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  public state = State;
  public states = Object.values(State);
  faPenSquare = faPenSquare;
  faTrashAlt = faTrashAlt;
  constructor(
    private collectionService: CollectionService
  ) {
  }

  ngOnInit() {
  }

  public changeState(state: State): void {
    this.item.state = state;
    // update item using collectionService in database
    this.collectionService.update(this.item);
    // this.collectionService.update(item).subscribe((data) => {
    //   if (data) {
    //     data.state = item.state;
    //   }
    // });
  }

  public delete(): void {
    this.collectionService.delete(this.item);
    // this.collectionService.delete(item).subscribe((data) => {
    //   if (data ) {
    //     msg to user
    //   }
    // })
  }

}
