import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url:'/home', icon: 'gift'},
    { title: 'Customers', url:'/customers', icon: 'power' },
    { title: 'Cities', url:'/cities', icon: 'location' },
  ];
  public labels = [];
  constructor() {}
}
