import { Component } from '@angular/core';
import { CarouselComponent } from "./components/carousel/carousel.component";

@Component({
  selector: 'app-landing',
  imports: [CarouselComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
