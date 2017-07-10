import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'am-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  @Output() searchFilterChange:EventEmitter<SearchFilter> = new EventEmitter()
  @Input()  searchFilter:SearchFilter = new SearchFilter()
  @Input() minPrice:number = 0
  @Input() maxPrice:number = 10000
  collapse = true
  constructor() { }

  ngOnInit() {
  }

  getNumberAsList(n:number):Array<number> {
    let result = []

    for(let i = 0; i < n; i++){
      result.push(i)
    }
    return result
  }

  toggleAllStars(){
    this.searchFilter.stars = this.searchFilter.hasAllStars() ? [] : [1,2,3,4,5]
    this.searchFilterChange.emit(this.searchFilter)
  }

  toggleStar(star:number) {
    this.searchFilter.hasStar(star)
      ? this.searchFilter.stars = this.searchFilter.stars.filter(s => s !== star)
      : this.searchFilter.stars.push(star)
    this.searchFilterChange.emit(this.searchFilter)
  }
}


export class SearchFilter {
  constructor(
    public priceRange:Array<number> = [0, 10000],
    public name:string = "",
    public stars:Array<number> = [1, 2, 3, 4, 5],){
  }

  static duplicate(filter:SearchFilter):SearchFilter{
      return new SearchFilter(filter.priceRange, filter.name, filter.stars)
  }

  hasStar(star:number):boolean{
      return this.stars.some(s => s === star)
  }

  hasAllStars(){
    let result:boolean = true
    let allStars = [1, 2, 3, 4, 5]
    allStars.forEach(s => result = result && this.hasStar(s))
    return result
  }




}
