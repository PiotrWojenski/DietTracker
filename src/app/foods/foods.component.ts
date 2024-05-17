import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Observable, map } from 'rxjs';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, NgFor],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.scss',
})
export class FoodsComponent implements OnInit {
  foodResponse$ = this.foodService.getFood();
  food$ = this.foodResponse$.pipe(map((response) => response.data));
  length$ = this.foodResponse$.pipe(map((response) => response.length));

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {}
}
