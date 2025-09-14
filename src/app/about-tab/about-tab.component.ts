import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about-tab',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about-tab.component.html',
  styleUrl: './about-tab.component.css'
})
export class AboutTabComponent {
  currentSlide = 0;
  slides = [
    {
      img: 'carousel1.jpg',
      alt: 'Dumbbells and Gym Equipment',
      caption: 'Dumbbells & Equipment'
    },
    {
      img: 'carousel2.jpg',
      alt: 'Barbells and Racks',
      caption: 'Barbells & Racks'
    },
    {
      img: 'carousel3.jpg',
      alt: 'Cardio Machines in Gym',
      caption: 'Cardio Machines'
    }
  ];

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}
