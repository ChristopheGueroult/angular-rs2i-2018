import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment.firebase';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
