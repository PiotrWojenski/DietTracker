import { NutriScore } from './nutri-score.model';

export interface Food {
  id?: string;
  name?: string;
  weight?: number;
  caloriesPer100g?: number;
  nutriScore?: NutriScore;
  tags?: string[];
}

export interface FoodResponse {
  data: Food[];
  length: number;
}
