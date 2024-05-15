interface Food {
  id: number;
  name: string;
  caloriesPer100g: number;
  weight: number;
  nutriScore: string;
  created_at: string;
  updated_at: string;
  photo: string;
  tags: string;
}

export interface FoodResponse {
  data: Food[];
  length: number;
}
