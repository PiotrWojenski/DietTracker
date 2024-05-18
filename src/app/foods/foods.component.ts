import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Observable, map } from 'rxjs';
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
  food$ = this.foodResponse$.pipe(map((response) => response.data)); // Get data from response
  length$ = this.foodResponse$.pipe(map((response) => response.length));

  displayedColumns = ['id', 'name'];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {}
}
