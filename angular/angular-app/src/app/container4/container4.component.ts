import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
declare var anime: any;
//import anime from "animejs";
//import * as anime from 'animejs';

@Component({
  selector: 'app-container4',
  templateUrl: './container4.component.html',
  styleUrls: ['./container4.component.css']
})

export class Container4Component implements AfterViewInit {

  constructor() { }

  t1:any;
  t2:any;
  Slide:any;

  //@ViewChild('slideButton', {static: true}) slideButton: any
  @ViewChild('timeResolution', {static: true}) timeResolution: any


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
        this.timeResolution.nativeElement.innerHTML = this.t2 - this.t1 + ' milisekund'
      },
      delay: function (el:number, i:number) { return i * 1000 },
      autoplay: false
    })

  }

    

    slideButton(){
      this.Slide.play
    }

    //this.slideButton = this.Slide.play()
    //this.slideButton.addEventListener('click',this.Slide.play())
    //this.slideButton.nativeElement.onclick= Slide.play()

}
