import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {
    @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const videoEl = this.heroVideo.nativeElement;

    // Make sure autoplay always works
    videoEl.muted = true;
    videoEl.play().catch(err => {
      console.warn('Autoplay blocked:', err);
    });
  }

}
