import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-catering';
  navs = [
    {route: '/dashboard', label: 'Dashboard'},
    {route: '/menus', label: 'Menus'},
    {route: '/dishes', label: 'Dishes'},
    {route: '/ingredients', label: 'Ingredients'},
  ];
  activeRoute;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((e: Event) => {
      // TODO: Complete the below if switching to a REST architecture
      if (e instanceof NavigationStart) {
        // TODO: Show loading indicator
      } else if (e instanceof NavigationEnd) {
        // only match first part of the route re: list/detail drilldown
        this.activeRoute = '/' + e.urlAfterRedirects.split('/')[1];
        // TODO: Hide loading indicator
      } else if (e instanceof NavigationError) {
        // TODO: Hide loading indicator
        // TODO: Present error to user
        console.log(e.error);
      }
    });
  }
}
