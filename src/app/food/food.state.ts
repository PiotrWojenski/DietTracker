import { Injectable } from '@angular/core';
import { FoodService } from '../food.service';
import { Subject } from 'rxjs';
import { FoodResponse } from '../food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodState {
  private foodSource$ = new Subject<FoodResponse>();
  food = this.foodSource$.asObservable();

  constructor(private foodService: FoodService) {}

  getFood(): void {
    this.foodService.getFood().subscribe((response) => {
      this.foodSource$.next(response);
    });
  }
}
