import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { map } from 'rxjs';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FoodStateService } from '../food-state.service';
import { Food } from '../food.model';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, NgFor, MatTableModule],
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodsComponent implements OnInit {
  // foodResponse$ = this.foodService.getFood();
  food$ = this.foodState.food$;
  length$ = this.food$.pipe(map((foods) => foods.length));

  displayedColumns = [
    'id',
    'name',
    'caloriesPer100g',
    'weight',
    'nutriScore',
    'created_at',
    'updated_at',
    'photo',
    'tags',
    'actions',
  ];

  constructor(private foodState: FoodStateService) {}

  ngOnInit(): void {
    this.foodState.getFood();
  }
  onDelteClick(id: Food['id']) {
    this.foodState.deleteFood(id);
  }
}
