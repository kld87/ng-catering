import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Menu } from '../../classes/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {
  menu: Menu;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.menuService.getSingle(id)
      .subscribe(menu => this.menu = menu);
  }

}
