import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from "../../common/models/hotel";

@Component({
  selector: 'am-hotel-result',
  templateUrl: './hotel-result.component.html',
  styleUrls: ['./hotel-result.component.scss']
})
export class HotelResultComponent implements OnInit {
  @Input() hotel:Hotel = new Hotel('',0,0)

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

}
