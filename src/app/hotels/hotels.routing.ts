/**
 * Created by josecullen on 07/07/17.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelSearchComponent} from "./hotel-search/hotel-search.component";

const routing: Routes = [{
  path: '',
  component: HotelSearchComponent
}];


export const hotelsRouting : ModuleWithProviders = RouterModule.forChild(routing);
