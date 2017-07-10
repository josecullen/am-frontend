import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Hotel} from "../../common/models/hotel";
import {HotelService} from "../../common/services/hotel.service";
import {SearchFilter} from "../hotel-filter/hotel-filter.component";

@Component({
  selector: 'am-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss']
})
export class HotelSearchComponent implements OnInit {
  hotels:Array<Hotel> = []
  searchFilter:SearchFilter = new SearchFilter()
  minPrice:number = 0
  maxPrice:number = 10
  constructor(private hotelService:HotelService, private cd:ChangeDetectorRef) {}

  ngOnInit() {
    this.hotelService
      .retrieveAll()
      .subscribe(res => {
        this.hotels = res
        this.updatePriceRange(this.hotels)

      })
  }

  updatePriceRange(hotels:Array<Hotel>){
    let prices = this.hotels.map(h => h.price)
    this.minPrice = prices.sort((a, b) => a - b > 0 ? 1 : 0 )[0]
    this.maxPrice = prices.sort((a, b) => a - b > 0 ? 0 : 1 )[0]
    this.searchFilter = new SearchFilter([this.minPrice, this.maxPrice])
  }

  onSearchFilterChange(filter:SearchFilter){
    this.searchFilter = SearchFilter.duplicate(filter)

  }
}
