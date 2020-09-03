import { Component, ViewChild, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';

//import * as anime from 'animejs';

@Component({
  selector: 'app-container4',
  templateUrl: './container4.component.html',
  styleUrls: ['./container4.component.css']
})

export class Container4Component implements AfterViewInit {

  constructor() { }

  t1: any;
  t2: any;
  Slide: any;
  time: any;

  ngAfterViewInit(): void {

    this.Slide = anime({
      targets: 'div.box',
      translateX: [
        { value: 200, duration: 500 },
        { value: 0, duration: 500 }
      ],
      rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
      },
      borderRadius: ['0%', '50%'],
      easing: 'easeInOutQuad',
      opacity: '0.3',
      begin: function () {
        this.t1 = performance.now()
      },
      complete: function () {
        this.t2 = performance.now()
        this.time = this.t2 - this.t1 + ' milisekund'
        debugger
        const timeResolution: HTMLElement = document.getElementById('animationTime') as HTMLElement
        timeResolution.innerHTML = this.time

      },

      delay: function (el, i: number) { return i * 1000 },
      autoplay: false,

    })

  }

  slideButton() {
    this.Slide.play()
  }

}
