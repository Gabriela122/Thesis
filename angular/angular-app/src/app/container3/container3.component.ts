import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
    selector: 'app-container3',
    templateUrl: './container3.component.html',
    styleUrls: ['./container3.component.css']
})
export class Container3Component implements OnInit {

    wyniki: any;
    time0:any;
    time1:any;
    
    @ViewChild('prob10', {static: true}) prob10: any
    @ViewChild('prob100', {static: true}) prob100: any
    @ViewChild('prob10000', {static: true}) prob10000: any
    @ViewChild('czasFormatowania', {static: true}) czasFormatowania: any
    @ViewChild('formatowanie', {static: true}) formatowanie: any

    constructor() {
        
    }

    ngOnInit(){

        this.prob10.nativeElement.innerHTML = this.timePerformance(10, 100, 1000)
        this.prob100.nativeElement.innerHTML = this.timePerformance(100, 100, 1000)
        this.prob10000.nativeElement.innerHTML = this.timePerformance(10000, 100, 1000)

        this.wyniki = [this.prob10, this.prob100, this.prob10000]

        this.formatowanieUI()

        this.czasFormatowania.nativeElement.innerHTML = this.time1 - this.time0 + ' milisekund'
    }
    

    //initialization() {}

    losuj(rozmiar: number, zakres: number) {
        var los = []
        for (var i = 0; i < rozmiar; i++) {
            los.push(Math.floor(Math.random() * zakres))
        }
        return los
    }
    sortNumber(a: number, b: number) {
        return a - b
    }

    timePerformance(rozmiarTablicy: number, zakresLiczbWTablicy: number, iloscPowtorzen: number) {
        var time = 0
        var liczby = []
        for (var j = 0; j < iloscPowtorzen; j++) {
            liczby = this.losuj(rozmiarTablicy, zakresLiczbWTablicy)
            time -= performance.now()
            liczby.sort(this.sortNumber)
            time += performance.now()
        }

        return time / iloscPowtorzen
    }


    formatowanieUI() { // siec->wylacz pamiec robocza 
        this.time0 = performance.now()
        let iloscPowtorzen = 10
        for (var j = 0; j < iloscPowtorzen; j++) {// zmieniac ilosc powtorzen na 10,100 i 10000
            var table = document.createElement('table')
            table.style.border = '1px solid black'
            for (var i = 0; i < 3; i++) {
                var tr = table.insertRow()
                var td = tr.insertCell()
                td.appendChild(document.createTextNode(this.wyniki[i].nativeElement.innerText))
                td.style.border = '1px solid black'
            }
            this.formatowanie.nativeElement.appendChild(table)
        }

        this.time1 = performance.now()
    }

}
