import { Component, OnInit } from '@angular/core';
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gluten-icon',
  templateUrl: './gluten-icon.component.html',
  styleUrls: ['./gluten-icon.component.css']
})
export class GlutenIconComponent implements OnInit {
  icon = faBreadSlice;

  constructor() { }

  ngOnInit() {
  }

}
