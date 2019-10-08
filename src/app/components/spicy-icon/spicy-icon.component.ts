import { Component, OnInit } from '@angular/core';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-spicy-icon',
  templateUrl: './spicy-icon.component.html',
  styleUrls: ['./spicy-icon.component.css']
})
export class SpicyIconComponent implements OnInit {
  icon = faPepperHot;

  constructor() { }

  ngOnInit() {
  }

}
