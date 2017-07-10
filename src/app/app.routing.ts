/**
 * Created by josecullen on 07/07/17.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRouting: Routes = [
  {
    path: 'hotels',
    loadChildren: 'app/hotels/hotels.module#HotelsModule'
  },
  {
    path: '',
    redirectTo: '/hotels',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/hotels',
    pathMatch: 'full'
  }
];


const appRoutes : Routes = [
  ...appRouting

]

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
