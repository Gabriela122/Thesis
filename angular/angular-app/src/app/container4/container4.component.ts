import { Component, OnInit, ViewChild } from '@angular/core';
declare var anime: any;
//import anime from 'animejs';


@Component({
  selector: 'app-container4',
  templateUrl: './container4.component.html',
  styleUrls: ['./container4.component.css']
})

export class Container4Component implements OnInit {

  constructor() { }

  t1:any;
  t2:any;
  @ViewChild('slideButton') slideButton: any
  @ViewChild('animationTime') timeResolution: any


  ngOnInit(): void {
  }

    
    Slide = anime({
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
        this.timeResolution.nativeElement.innerHTML = this.t2 - this.t1 + ' milisekund'
      },
      delay: function (el, i) { return i * 1000 },
      autoplay: false
    })

    //this.slideButton.addEventListener('click',this.Slide.play())
    //this.slideButton.nativeElement.onclick= Slide.play




}
