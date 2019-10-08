import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../../classes/dish';

@Component({
  selector: 'app-dish-render',
  templateUrl: './dish-render.component.html',
  styleUrls: ['./dish-render.component.css']
})
export class DishRenderComponent implements OnInit {
  @Input() dishes: Dish[];

  constructor() { }

  ngOnInit() {
  }

}
