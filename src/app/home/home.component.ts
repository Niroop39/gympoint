import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { AboutTabComponent } from '../about-tab/about-tab.component';
import { LocationsComponent } from '../locations/locations.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutTabComponent, LocationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
