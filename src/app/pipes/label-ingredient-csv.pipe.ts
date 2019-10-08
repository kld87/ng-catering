import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

import { IngredientService } from '../services/ingredient.service';
import { Ingredient } from '../classes/ingredient';

@Pipe({
  name: 'labelIngredientCsv',
  pure: false
})
export class LabelIngredientCsvPipe implements PipeTransform {
  ingredientMap: Ingredient[];

  constructor(private ingredientService: IngredientService) {
    this.init();
  }

  init() {
    this.ingredientService.getList()
      .subscribe(list => this.ingredientMap = _.keyBy(list, 'id'));
  }

  transform(value: number | number[], ...args: any[]): string | null {
    // convert single id to array, if needed
    const ids: number[] = Array.isArray(value) ? value : [value];

    // convert ingredient id array to csv of ingredient names
    return ids.map(v =>
      this.ingredientMap[v] ? this.ingredientMap[v].name : null
    ).filter(v => v).sort().join(', ');
  }

}
