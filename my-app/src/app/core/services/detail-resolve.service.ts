import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Item } from '../../shared/interfaces/item';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/Operators';
import { CollectionService } from './collection.service';

@Injectable({
  providedIn: 'root'
})
export class DetailResolveService implements Resolve<Item> {

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    const id = route.paramMap.get('id');
    return this.collectionService.getItem(id).pipe(
      take(1),
      tap((data) => {
        if (data) {
          return data;
        } else {
          this.router.navigate(['items/list']);
          return null;
        }
      })
    );
  }
}
