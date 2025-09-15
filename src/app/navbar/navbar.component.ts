import { Component, HostListener } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbCollapseModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
	isMenuCollapsed = true;
  isScrolled = false;

  // Listen to the window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Check if the page is scrolled
    this.isScrolled = window.scrollY > 0;
  }
}
