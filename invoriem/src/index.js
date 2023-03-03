import './index.html';
import './index.scss';

// translate.js
import { language, setTexts, toggleLanguage } from './modules/translate';

// carousel
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    responsive: {
      0: {
        items: 2,
        margin: 32,
        loop: true,
        dots: false,
      },
      601: {
        items: 3,
        margin: 32,
        loop: true,
        dots: false,
      },
      1001: {
        items: 3,
        margin: 48,
        loop: true,
        dots: false,
      }
    }
  });
});

// play.js
import { videoBtn, videoPicture, videoWrapper, video } from './modules/play';


// burger
import { openNavbtn, mobileNav } from './modules/burger';