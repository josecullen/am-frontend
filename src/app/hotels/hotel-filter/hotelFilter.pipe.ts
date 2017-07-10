/**
 * Created by josecullen on 09/07/17.
 */
import {Pipe, PipeTransform} from "@angular/core";
import {Hotel} from "../../common/models/hotel";
import {SearchFilter} from "./hotel-filter.component";

@Pipe({ name: 'hotelFilter' })
export class HotelFilterPipe implements PipeTransform {
  transform(hotels: Hotel[], filter:SearchFilter) {
    let filtered = hotels
      .filter(h => h.price >= filter.priceRange[0] && h.price <= filter.priceRange[1])
      .filter(h => filter.stars.some(s => s === h.stars))
    if(filter.name.length > 0){
      filtered = filtered.filter(h => h.name.toLowerCase().includes(filter.name.toLowerCase()))
    }
    return filtered
  }
}
