import { Pipe, PipeTransform } from '@angular/core';

import { DishType } from '../classes/dish-type';

@Pipe({
  name: 'labelDishType'
})
export class LabelDishTypePipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    return DishType[value];
  }

}
