
var quadraticSolver = document.querySelector('#quadraticSolver')
var timeResolution = document.querySelector('#timeResolution')
var resultDisplay = document.querySelector('#results')
var timeDisplay = document.querySelector('#timeRes') 
var time, result, i, j
function quadraticEquation() {
    time = 0
    result = []
    for (i = 0; i < 100000; i++) {
        randomCoeff()
    }
    printResults()

}

function randomCoeff() {
    var a = Math.floor(Math.random() * 101) - 50
    var b = Math.floor(Math.random() * 101) - 50
    var c = Math.floor(Math.random() * 101) - 50
    checkDelta(a, b, c)
}

function checkDelta(a, b, c) {
    var delta = Math.pow(b, 2) - (4 * a * c)
    if (delta < 0 || a === 0) {
        randomCoeff()
    } else {
        quadraticCalc(a, b, delta)
    }
}

function quadraticCalc(a, b, delta) {
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

}


function printResults() {
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

quadraticSolver.addEventListener('click', quadraticEquation())





