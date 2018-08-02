import { DateService } from './../../../core/services/date.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private collectionService: CollectionService,
    private router: Router,
    private dateService: DateService,
  ) { }

  ngOnInit() {
  }

  public add(item: Item): void {
    console.log(item);
    this.collectionService.add(item);
    this.router.navigate(['items/list']);
    // this.collectionService.add(item).subscribe((date) => {
    //   if (data ) {
    //     // action ou msg user
    //   }
    // });
  }

}
