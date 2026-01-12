import { Component, AfterViewInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-experiences',
  standalone: true, 
  templateUrl: './experiences.html',
  styleUrl: './experiences.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Experiences implements AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  ngAfterViewInit() {
    const swiperEl = this.swiperContainer.nativeElement;

    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: true,
      },
      pagination: {
        clickable: true,
      },
      navigation: true,
      injectStyles: [
        `
        .swiper-button-next,
        .swiper-button-prev {
        color: black;
        width:1dvh;
        font-weight: bold;

        z-index: 1;

        }
       .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
        position: absolute;
         bottom: 0;
         margin-top: 5% !important;
        }
        .swiper-pagination-bullet-active {
          background: blue;

        }
        `,
      ],
    };


    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }
}
