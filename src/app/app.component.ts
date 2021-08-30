import { Component } from '@angular/core';
import { navigationDetails } from './app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public navigationDetails = navigationDetails;
}
