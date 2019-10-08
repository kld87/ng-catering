import { DishType } from './dish-type';

export class Dish {
  id: number;
  name: string;
  description: string;
  type: DishType;
  price: number;
  ingredients: number[];
}