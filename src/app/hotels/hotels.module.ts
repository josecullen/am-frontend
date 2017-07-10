import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HotelSearchComponent} from "./hotel-search/hotel-search.component";
import {hotelsRouting} from "./hotels.routing";
import {HotelResultComponent} from "./hotel-result/hotel-result.component";
import {Angular2FontawesomeModule} from "angular2-fontawesome";
import {SearchFilterComponent} from "./hotel-filter/hotel-filter.component";
import {FormsModule} from "@angular/forms";
import { NouisliderModule } from 'ng2-nouislider';
import {HotelService} from "../common/services/hotel.service";
import {HttpModule} from "@angular/http";
import {HotelFilterPipe} from "./hotel-filter/hotelFilter.pipe";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    Angular2FontawesomeModule,
    NouisliderModule,
    FlexLayoutModule,
    hotelsRouting
  ],
  declarations: [
    HotelSearchComponent,
    SearchFilterComponent,
    HotelResultComponent,
    HotelFilterPipe
  ],
  providers : [
    HotelService
  ]
})
export class HotelsModule { }
