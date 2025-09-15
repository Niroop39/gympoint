import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { AboutTabComponent } from '../about-tab/about-tab.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutTabComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
