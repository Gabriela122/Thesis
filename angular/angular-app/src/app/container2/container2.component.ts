import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-container2',
  templateUrl: './container2.component.html',
  styleUrls: ['./container2.component.css']
})
export class Container2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('timeResolution', { static: true }) timeResolution: any
  @ViewChild('resultDisplay', { static: true }) resultDisplay: any
  @ViewChild('timeDisplay', { static: true }) timeDisplay: any

  time: any
  result: any
  i: any
  j: any

  quadraticEquation = () => {
    this.time = 0
    this.result = []
    for (this.i = 0; this.i < 100000; this.i++) {
      this.randomCoeff()
    }
    this.printResults()
  }

  randomCoeff = () => {
    var a = Math.floor(Math.random() * 101) - 50
    var b = Math.floor(Math.random() * 101) - 50
    var c = Math.floor(Math.random() * 101) - 50
    this.checkDelta(a, b, c)
  }

  checkDelta = (a: number, b: number, c: number) => {
    var delta = Math.pow(b, 2) - (4 * a * c)
    if (delta < 0 || a === 0) {
      this.randomCoeff()
    } else {
      this.quadraticCalc(a, b, delta)
    }
  }

  quadraticCalc = (a: number, b: number, delta: number) => {
    this.time -= performance.now()
    var result1 = (-1 * b - Math.sqrt(delta)) / (2 * a)
    var result2 = (-1 * b + Math.sqrt(delta)) / (2 * a)
    this.time += performance.now()
    if (this.i < 1000) {
      this.result[this.i] = {
        res1: result1,
        res2: result2,
        t: this.time
      }
      for (this.j = 0; this.j < this.i; this.j++) {
        this.result[this.i].t = this.result[this.i].t - this.result[this.j].t
      }
    }
  }

  printResults = () => {
    this.timeResolution.nativeElement.innerHTML = this.time + ' millisekund'
    var resultString = '<table>'
    for (this.i = 0; this.i < 40; this.i++) {
      resultString += '<tr>'
      for (this.j = 0; this.j < 25; this.j++) {
        resultString += '<td>'
        resultString += (Math.round(this.result[this.i * 25 + this.j].res1 * 100) / 100).toFixed(2) + '<br/>'
        resultString += (Math.round(this.result[this.i * 25 + this.j].res2 * 100) / 100).toFixed(2) + '<br/>'
        resultString += this.result[this.i * 25 + this.j].t + 'ms' + '<br/>'
        resultString += '</td>'
      }
      resultString += '</tr>'
    }
    resultString += '</table>'
    const t1 = performance.now()
    this.resultDisplay.nativeElement.innerHTML = resultString
    const t2 = performance.now()
    this.timeDisplay.nativeElement.innerHTML = t2 - t1 + ' milisekund'
  }
}
