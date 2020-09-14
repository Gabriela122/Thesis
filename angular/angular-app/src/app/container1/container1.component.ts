import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-container1',
  templateUrl: './container1.component.html',
  styleUrls: ['./container1.component.css']
})
export class Container1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('tekst1', {static: true}) tekst1: any
  @ViewChild('tekst2', {static: true}) tekst2: any
  @ViewChild('asyncTime', {static: true}) asyncTime: any

  async textDisplay1() {

    var t = performance.now()
    var txt2 = await this.textDisplay2()
    
    this.tekst1.nativeElement.style.display = "block"
    this.tekst2.nativeElement.style.display = txt2
    
    var time = performance.now() - t + 'milisekund'
    this.asyncTime.nativeElement.innerHTML = time
  }

  textDisplay2() {
    return new Promise(resolve => setTimeout(() => { resolve('block') }, 0))
  }
}
