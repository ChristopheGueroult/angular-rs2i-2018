import { Injectable } from '@angular/core';
import { Auth } from '../../shared/interfaces/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private itemsCollection: AngularFirestoreCollection<User>;
  private users$: Observable<User[]>;
  public connect$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public user: User;
  public msg$: BehaviorSubject<string> = new BehaviorSubject(null);
  constructor(
    private afs: AngularFirestore,
    private router: Router,
  ) { }

  public signIn(auth: Auth) {
    // tslint:disable-next-line:max-line-length
    this.itemsCollection = this.afs.collection<User>('users', ref => ref.where('login', '==', auth.login).where('pass', '==', auth.pass));
    this.users$ = this.itemsCollection.valueChanges();
    this.users$.subscribe((data) => {
      if (data.length > 0) {
        console.log(data);
        this.user = data[0];
        this.connect$.next(true);
        this.router.navigate(['/home']);
      } else {
        this.msg$.next('tu t\'es trompé tonton !');
      }
    });
  }
}
