import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './containers/list/list.component';
import { LivreesComponent } from './containers/livrees/livrees.component';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'livrees', component: LivreesComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }