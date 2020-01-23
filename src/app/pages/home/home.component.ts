import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [
    'assets/imageFolder/carouselPics/Mandalorian.jpg', 'assets/imageFolder/carouselPics/testPicture2.png',
    'assets/imageFolder/carouselPics/MEPic2.png', 'assets/imageFolder/carouselPics/Cosplay2.png'
  ];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
  }

}
