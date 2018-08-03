import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
// import { COLLECTION } from '../collection';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  private _collection: Observable<Item[]>;
  private url_api = 'api.monsite.com/';
  constructor(
    private afs: AngularFirestore,
    private http: HttpClient,
  ) {
    // this.collection = COLLECTION;
    this.itemsCollection = afs.collection<Item>('collection');
    this.collection = this.itemsCollection.valueChanges();
    // this.collection = this.http.get<Item>(`${this.url-api}collection');
  }

  /**
   * get collection
   */
  get collection(): Observable<Item[]> {
    return this._collection;
  }

  /**
   * set collection
   */
  set collection(col: Observable<Item[]>) {
    this._collection = col;
  }

  /**
   * get 1 item from collection
   */

  add(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));

    // return this.http.post<Item>(url, item)
  }

  /**
   * update item in collection
   */
  update(item: Item): void {
    this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));
    // return this.http.patch<Item>(url, item, option);
  }

  /**
   * delete item in collection
   */
  delete(item: Item): void {
    this.itemsCollection.doc(item.id).delete()
      .catch(error => console.log(error));
    // return this.http.delete<Item>(url, item, option);
  }

  // get data on item
  getItem(id: string): Observable<Item> {
    const item = this.afs.doc<Item>(`collection/${id}`).valueChanges();
    return item;
  }
}
