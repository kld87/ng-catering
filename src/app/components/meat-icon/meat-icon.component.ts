import { Component, OnInit } from '@angular/core';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-meat-icon',
  templateUrl: './meat-icon.component.html',
  styleUrls: ['./meat-icon.component.css']
})
export class MeatIconComponent implements OnInit {
  icon = faDrumstickBite;

  constructor() { }

  ngOnInit() {
  }

}
