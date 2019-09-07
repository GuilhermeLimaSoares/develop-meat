import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Restaurant } from './restaurant/restaurant.model';
import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model';
import { MEAT_API } from './../api.api';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from './../app.error-handler';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantsService {
  constructor(private http: Http){}

  Restaurants(): Observable<Restaurant[]> {
    // return this.rests;
    return this.http.get(`${MEAT_API}/restaurants`)
    .map(response => response.json())
    .catch(ErrorHandler.handlerError)
  }

  restaurantById(id: string): Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handlerError)
  }

  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map(response => response.json())
    .catch(ErrorHandler.handlerError)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
    .map(response => response.json())
    .catch(ErrorHandler.handlerError)
  }
}

// rests: Restaurant[] = [{
  //   id: 'bread-bakery',
  //   name: 'Bread & Bakery',
  //   category: 'Bakery',
  //   deliveryEstimate: '25m',
  //   rating: 4.9,
  //   imagePath: 'assets/img/restaurants/breadbakery.png',
  //   //about: 'A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.',
  //   //hours: 'Funciona de segunda à sexta, de 8h às 23h'
  // },
  // {
  //   id: 'burger-house',
  //   name: 'Burger House',
  //   category: 'Hamburgers',
  //   deliveryEstimate: '100m',
  //   rating: 3.5,
  //   imagePath: 'assets/img/restaurants/burgerhouse.png',
  //   //about: '40 anos se especializando em trash food.',
  //   //hours: 'Funciona todos os dias, de 10h às 22h'
  // }]
