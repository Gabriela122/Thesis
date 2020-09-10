<template>
    <div id="container3" class="cont">
        <h1>Sortowanie i formatowanie </h1><br><br>
        <h2>Sortowanie</h2>
        Sortowanie dla 3 różnych prób, powtórzone 1000 razy <br><br><br>
        <li>proba licząca 10 wylosowanych liczb w tablicy</li>
        <p id="prob10" class="prob"></p>
        <li>proba licząca 100 wylosowanych liczb w tablicy</li>
        <p id="prob100" class="prob"></p>
        <li>proba licząca 1000 wylosowanych liczb w tablicy</li>
        <p id="prob10000" class="prob"></p>
        <br><h2>Formatowanie</h2>
        <div id='formatowanie'></div>
        <br><br> Czas formatowania tabeli <br><br>
        <div id="czasFormatowania"></div>
        <a href="#container4">
            <div class="arrow">
                <p class="arrow-para">V</p>
            </div>
        </a>
    </div>
</template>

<script>
var wyniki
export default {
  name: 'Container3',
  methods: {
    losuj (rozmiar, zakres) {
      var los = []
      for (var i = 0; i < rozmiar; i++) {
        los.push(Math.floor(Math.random() * zakres))
      }
      return los
    },
    sortNumber (a, b) {
      return a - b
    },
    timePerformance (rozmiarTablicy, zakresLiczbWTablicy, iloscPowtorzen) {
      var time = 0
      var liczby = []
      for (var j = 0; j < iloscPowtorzen; j++) {
        liczby = this.losuj(rozmiarTablicy, zakresLiczbWTablicy)
        time -= performance.now()
        liczby.sort(this.sortNumber)
        time += performance.now()
      }
      return time / iloscPowtorzen
    },
    formatowanie () { // siec->wylacz pamiec robocza
      var time0 = performance.now()
      var iloscPowtorzen = 10
      for (var j = 0; j < iloscPowtorzen; j++) { // zmieniac ilosc powtorzen na 10,100 i 10000
        var table = document.createElement('table')
        table.style.border = '1px solid black'
        for (var i = 0; i < 3; i++) {
          var tr = table.insertRow()
          var td = tr.insertCell()
          td.appendChild(document.createTextNode(wyniki[i].innerText))
          td.style.border = '1px solid black'
        }
        document.getElementById('formatowanie').appendChild(table)
      }
      var time1 = performance.now()
      document.querySelector('#czasFormatowania').innerHTML = time1 - time0 + ' milisekund'
    }
  },
  mounted () {
    var prob10 = document.querySelector('#prob10')
    var prob100 = document.querySelector('#prob100')
    var prob10000 = document.querySelector('#prob10000')
    prob10.innerHTML = this.timePerformance(10, 100, 1000)
    prob100.innerHTML = this.timePerformance(100, 100, 1000)
    prob10000.innerHTML = this.timePerformance(10000, 100, 1000)
    wyniki = [prob10, prob100, prob10000]
    this.formatowanie()
  }
}
</script>
