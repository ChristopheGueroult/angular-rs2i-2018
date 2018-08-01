import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '',
  redirectTo: '/login',
  pathMatch: 'full'
  },
  {
    path: 'items',
    loadChildren: './items/items.module#ItemsModule',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
