import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { map } from 'rxjs';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, NgFor, MatTableModule],
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss'],
})
export class FoodsComponent implements OnInit {
  foodResponse$ = this.foodService.getFood();
  food$ = this.foodResponse$.pipe(map((response) => response.data));
  length$ = this.foodResponse$.pipe(map((response) => response.length));

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
  ];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {}
}
