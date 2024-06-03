import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { FoodService } from './food.service';

@Injectable({
  providedIn: 'root',
})
export class FoodStateService {
  private _food$ = new BehaviorSubject<Food[]>([]);
  private _error$ = new BehaviorSubject<any>(null);
  private _loading$ = new BehaviorSubject<boolean>(false);

  get food$(): Observable<Food[]> {
    return this._food$.asObservable();
  }

  get error$(): Observable<any> {
    return this._error$.asObservable();
  }

  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  constructor(private foodService: FoodService) {}

  getFood(): void {
    this._loading$.next(true);
    this.foodService.getFood().subscribe(
      (response) => {
        this._food$.next(response.data);
        this._loading$.next(false);
        this._error$.next(null);
      },
      (error) => {
        this._error$.next(error);
        this._loading$.next(false);
      }
    );
  }

  deleteFood(id: Food['id']): void {
    this._loading$.next(true);
    this.foodService.deleteFood(id).subscribe(
      (response) => {
        this.getFood();
        this._loading$.next(false);
        this._error$.next(null);
      },
      (error) => {
        this._error$.next(error);
        this._loading$.next(false);
      }
    );
  }
}
