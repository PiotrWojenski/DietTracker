import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodsComponent } from './food/food.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, FoodsComponent],
})
export class AppComponent {}
