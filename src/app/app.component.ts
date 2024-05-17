import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodsComponent } from './foods/foods.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, FoodsComponent],
})
export class AppComponent {}
