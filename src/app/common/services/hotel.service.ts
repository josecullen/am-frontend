import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Hotel} from "../models/hotel";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class HotelService {
  private headers = new Headers({
    'Content-Type': 'application/json'
  })

  constructor(private http: Http) { }

  retrieveAll():Observable<Array<Hotel>> {
    return this.http.get('/api/hotels', this.headers)
      .map(res => {
        let response = res.json()
        return response ? response.hotels : []
      })
  }

}
