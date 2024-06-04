import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food, FoodResponse } from './food.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private readonly _URL = 'http://localhost:8080/api/food/';

  constructor(private httpClient: HttpClient) {}

  getFood(): Observable<FoodResponse> {
    return this.httpClient.get<FoodResponse>(this._URL);
  }

  deleteFood(id: Food['id']): Observable<FoodResponse> {
    return this.httpClient.delete<FoodResponse>(`${this._URL}${id}`);
  }
}
