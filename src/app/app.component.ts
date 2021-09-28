import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
  ngOnInit() { }

  // Move to specific slide
  navigateToSlide(item) {
    this.ngCarousel.select(item);
    console.log(item)
  }

  // Move to previous slide
  getToPrev() {
    this.ngCarousel.prev();
  }

  // Move to next slide
  goToNext() {
    this.ngCarousel.next();
  }

  // Pause slide
  stopCarousel() {
    this.ngCarousel.pause();
  }

  // Restart carousel
  restartCarousel() {
    this.ngCarousel.cycle();
  }

  //here


  title = 'MTNSA';
    slides = [
      {img: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
      {img: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
      {img: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
      {img: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
     
    ];
    slideConfig = {slidesToShow: 1,
      infinite: true,
      variableWidth: true,
      outerEdgeLimit: true,
      nextArrow: '<div style=\'position: absolute; top: 35%; height: 40px; width: 40px; background-color: #232323; border-radius: 50%; right: 5px; cursor: pointer;\' class=\'next-slide\'><i class="fa fa-angle-right"></i></div>',
      prevArrow: '<div style=\'position: absolute; color: #F5F5F5; height: 40px; width: 40px; background-color: #232323; border-radius: 50%; top: 35%; left: 5px; z-index: 1; cursor: pointer;\' class=\'next-slide\'><i class="fa fa-angle-left"></i></div>',};
    
    addSlide() {
      this.slides.push({img: "https://material.angular.io/assets/img/examples/shiba2.jpg"})
    }
    
    removeSlide() {
      this.slides.length = this.slides.length - 1;
    }
    
    slickInit(e) {
      console.log('slick initialized');
    }
    
    breakpoint(e) {
      console.log('breakpoint');
    }
    
    afterChange(e) {
      console.log('afterChange');
    }
    
    beforeChange(e) {
      console.log('beforeChange');
    }
}

