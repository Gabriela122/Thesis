<template>
    <div id="container2" class="cont">
        <h1>Obliczanie równania kwadratowego</h1><br><br>
        <strong>y = ax<sup>2</sup> + bx + c<br></strong>
        <button v-on:click="quadraticEquation" id="quadraticSolver">Solve</button>
        <br>
        Czas obliczania 1000 równań
        <p id="timeResolution"></p>
        Wyniki każdego z równań wraz z czasem ich obliczania
        <p id="results"></p>
        Czas wyswietlania wszystkich wyników
        <p id="timeRes"></p>
        <a href="#container3">
            <div class="arrow">
                <p class="arrow-para">V</p>
            </div>
        </a>
    </div>
</template>

<script>
var time, result, i, j
export default {
  name: 'Container2',
  methods: {
    quadraticEquation () {
      time = 0
      result = []
      for (i = 0; i < 100000; i++) {
        this.randomCoeff()
      }
      this.printResults()
    },
    randomCoeff () {
      var a = Math.floor(Math.random() * 101) - 50
      var b = Math.floor(Math.random() * 101) - 50
      var c = Math.floor(Math.random() * 101) - 50
      this.checkDelta(a, b, c)
    },
    checkDelta (a, b, c) {
      var delta = Math.pow(b, 2) - (4 * a * c)
      if (delta < 0 || a === 0) {
        this.randomCoeff()
      } else {
        this.quadraticCalc(a, b, delta)
      }
    },
    quadraticCalc (a, b, delta) {
      time -= performance.now()
      var result1 = (-1 * b - Math.sqrt(delta)) / (2 * a)
      var result2 = (-1 * b + Math.sqrt(delta)) / (2 * a)
      time += performance.now()
      if (i < 1000) {
        result[i] = {
          res1: result1,
          res2: result2,
          t: time
        }
        for (j = 0; j < i; j++) {
          result[i].t = result[i].t - result[j].t
        }
      }
    },
    printResults () {
      var timeResolution = document.querySelector('#timeResolution')
      var resultDisplay = document.querySelector('#results')
      var timeDisplay = document.querySelector('#timeRes')
      timeResolution.innerHTML = time + ' millisekund'
      var resultString = '<table>'
      for (i = 0; i < 40; i++) {
        resultString += '<tr>'
        for (j = 0; j < 25; j++) {
          resultString += '<td>'
          resultString += (Math.round(result[i * 25 + j].res1 * 100) / 100).toFixed(2) + '<br/>'
          resultString += (Math.round(result[i * 25 + j].res2 * 100) / 100).toFixed(2) + '<br/>'
          resultString += result[i * 25 + j].t + 'ms' + '<br/>'
          resultString += '</td>'
        }
        resultString += '</tr>'
      }
      resultString += '</table>'
      const t1 = performance.now()
      resultDisplay.innerHTML = resultString
      const t2 = performance.now()
      timeDisplay.innerHTML = t2 - t1 + ' milisekund'
    }

  }
}
</script>
